
(function(){
  "use strict";

  var bulkDriveState = { rows: [], fileName: "" };

  function val(v){ return String(v == null ? "" : v).trim(); }
  function key(v){ return val(v).toLowerCase().replace(/\s+/g,"").replace(/[._-]/g,""); }
  function cell(row,names){
    for(var i=0;i<names.length;i++){
      var n=names[i];
      if(Object.prototype.hasOwnProperty.call(row,n) && val(row[n])!=="") return row[n];
    }
    var wanted={};
    names.forEach(function(n){ wanted[key(n)]=true; });
    var keys=Object.keys(row);
    for(var j=0;j<keys.length;j++) if(wanted[key(keys[j])]) return row[keys[j]];
    return "";
  }
  function normalizeProduct(v){
    var x=val(v).toUpperCase();
    if(x==="MP10" || x==="MP12" || x==="MP10/12") return "MP10/12";
    return val(v);
  }
  function normalizeLanguage(v){
    var x=val(v).toUpperCase();
    if(["국내","국문","KO","KR","KOR","KOREAN"].indexOf(x)>=0) return "국내";
    if(["해외","영문","EN","ENG","ENGLISH","OVERSEAS"].indexOf(x)>=0) return "해외";
    if(["공용","공통","BOTH","SHARED","COMMON"].indexOf(x)>=0) return "공용";
    return "";
  }
  function normalizeCurrent(v){
    var x=val(v).toUpperCase();
    if(["N","NO","FALSE","0","아니오"].indexOf(x)>=0) return false;
    return true;
  }
  function isDriveUrl(v){
    try{
      var u=new URL(val(v));
      var h=u.hostname.toLowerCase();
      return h==="drive.google.com" || h.slice(-17)===".drive.google.com" || h==="docs.google.com" || h.slice(-16)===".docs.google.com";
    }catch(e){ return false; }
  }
  function findProduct(name){
    var k=key(normalizeProduct(name));
    var list=navEntries("product");
    for(var i=0;i<list.length;i++){
      if(key(list[i].name)===k || key(list[i].dataKey)===k) return list[i];
    }
    return null;
  }
  function findTool(items,name){
    var k=key(name);
    for(var i=0;i<items.length;i++){
      if(key(items[i].item)===k || key(items[i].no)===k) return items[i];
    }
    return null;
  }
  function resolveTarget(productName,toolName,language){
    var product=findProduct(productName);
    if(!product) return {error:"제품을 찾을 수 없습니다."};
    var family=familyOf(product);
    if(!family) return {error:"제품군 정보를 찾을 수 없습니다."};

    if(family.mode==="child"){
      var parents=topTools().filter(function(x){ return x.product===family.dataKey; });
      var parent=findTool(parents,toolName);
      if(!parent) return {error:product.name+"의 “"+toolName+"” Tool을 찾을 수 없습니다."};

      var matches=childrenOf(parent).filter(function(c){ return childProductMatch(c.item,product.dataKey); });
      if(matches.length){
        var byMarket=matches.filter(function(c){ return hft750MarketForChild(c)===language; });
        var target=byMarket[0] || matches[0];
        return {toolId:String(target.id), label:product.name+" › "+parent.item};
      }
      return {toolId:String(parent.id), label:product.name+" › "+parent.item};
    }

    var productItems=topTools().filter(function(x){ return x.product===product.dataKey; });
    var parent2=findTool(productItems,toolName);
    if(!parent2) return {error:product.name+"의 “"+toolName+"” Tool을 찾을 수 없습니다."};
    return {toolId:String(parent2.id), label:product.name+" › "+parent2.item};
  }

  function parseRow(row,rowIndex){
    var product=normalizeProduct(cell(row,["제품","Product"]));
    var tool=val(cell(row,["Tool","영업 Tool","영업 Tool 항목","Tool명"]));
    var displayName=val(cell(row,["자료명","File Name","Filename","파일명"]));
    var driveUrl=val(cell(row,["Drive 링크","Drive URL","DriveURL","링크","URL"]));
    var language=normalizeLanguage(cell(row,["활용 구분","활용구분","Language","구분"]));
    var version=val(cell(row,["버전","Version"]));
    var current=normalizeCurrent(cell(row,["현재 사용본","현재사용본","Current","현재"]));
    var note=val(cell(row,["비고","Note","메모"]));
    var error="";
    if(!product) error="제품을 입력해주세요.";
    else if(!tool) error="Tool을 입력해주세요.";
    else if(!driveUrl) error="Drive 링크를 입력해주세요.";
    else if(!isDriveUrl(driveUrl)) error="Google Drive/Docs 링크가 아닙니다.";
    else if(!language) error="활용 구분은 국내/해외/공용 중 하나여야 합니다.";

    var resolved={};
    if(!error){
      resolved=resolveTarget(product,tool,language);
      if(resolved.error) error=resolved.error;
    }
    return {
      rowIndex:rowIndex, product:product, tool:tool, displayName:displayName,
      driveUrl:driveUrl, language:language, version:version, current:current, note:note,
      toolId:resolved.toolId||"", label:resolved.label||"", valid:!error, error:error
    };
  }

  function reset(){
    bulkDriveState={rows:[],fileName:""};
    var f=$("#driveBulkExcelFile");
    if(f) f.value="";
    $("#driveBulkFileTitle").textContent="Excel 파일 선택";
    $("#driveBulkFileSub").textContent=".xlsx / .xls · Drive 링크 등록 양식";
    $("#driveBulkPreview").innerHTML="";
    $("#driveBulkPreview").hidden=true;
    $("#driveBulkPreviewEmpty").hidden=false;
    $("#driveBulkSummary").textContent="0건";
    $("#runDriveBulkBtn").disabled=true;
    $("#runDriveBulkBtn").textContent="선택한 링크 등록";
  }

  function open(){
    if(typeof XLSX==="undefined") return toast("Excel 모듈을 불러오는 중입니다. 잠시 후 다시 눌러주세요.");
    reset();
    $("#driveBulkDialog").showModal();
  }

  function updateButton(){
    var selected=document.querySelectorAll("[data-drive-bulk-row]:checked").length;
    $("#runDriveBulkBtn").disabled=selected===0;
    $("#runDriveBulkBtn").textContent=selected ? selected+"개 링크 등록" : "선택한 링크 등록";
  }

  function renderPreview(){
    var rows=bulkDriveState.rows;
    var valid=rows.filter(function(r){return r.valid;}).length;
    var invalid=rows.length-valid;
    $("#driveBulkPreviewEmpty").hidden=rows.length>0;
    $("#driveBulkPreview").hidden=rows.length===0;
    $("#driveBulkSummary").textContent=rows.length ? valid+"건 등록 가능"+(invalid?" · "+invalid+"건 확인 필요":"") : "0건";
    $("#driveBulkPreview").innerHTML=rows.map(function(r,i){
      var title=r.label || (r.product+" › "+r.tool);
      var meta=[r.language,r.version,r.displayName].filter(Boolean).join(" · ") || "Drive 링크";
      var status=r.valid ? (r.current?"현재 사용본":"이전/참고본") : r.error;
      return '<label class="drive-bulk-row '+(r.valid?'':'invalid')+'">'+
        '<input type="checkbox" data-drive-bulk-row="'+i+'" '+(r.valid?'checked':'disabled')+'>'+
        '<div class="drive-bulk-main"><b>'+esc(title)+'</b><span>'+esc(meta)+'</span><small>'+esc(r.driveUrl)+'</small></div>'+
        '<div class="drive-bulk-status '+(r.valid?'ok':'error')+'">'+esc(status)+'</div>'+
      '</label>';
    }).join("");
    document.querySelectorAll("[data-drive-bulk-row]").forEach(function(x){x.onchange=updateButton;});
    updateButton();
  }

  async function handleFile(e){
    var file=e.target.files && e.target.files[0];
    if(!file) return;
    $("#driveBulkFileTitle").textContent=file.name;
    $("#driveBulkFileSub").textContent="파일 분석 중...";
    try{
      var buf=await file.arrayBuffer();
      var book=XLSX.read(buf,{type:"array",cellDates:true});
      var ws=book.Sheets[book.SheetNames[0]];
      var rows=XLSX.utils.sheet_to_json(ws,{defval:"",raw:false});
      bulkDriveState.fileName=file.name;
      bulkDriveState.rows=rows.map(function(row,i){ return parseRow(row,i+2); }).filter(function(r){ return r.product||r.tool||r.driveUrl; });

      var seen={};
      bulkDriveState.rows.forEach(function(r){
        if(!r.valid) return;
        var d=r.toolId+"|"+r.language+"|"+r.driveUrl;
        if(seen[d]){ r.valid=false; r.error="같은 Tool·활용 구분·링크가 파일 안에 중복되어 있습니다."; }
        else seen[d]=true;
      });

      $("#driveBulkFileSub").textContent=bulkDriveState.rows.length+"개 행 확인";
      renderPreview();
    }catch(err){
      console.error(err);
      bulkDriveState.rows=[];
      $("#driveBulkFileSub").textContent="Excel 파일을 읽지 못했습니다.";
      renderPreview();
      toast("Drive 링크 일괄 등록 양식을 확인해주세요.");
    }
  }

  function downloadTemplate(){
    if(typeof XLSX==="undefined") return toast("Excel 모듈을 불러오는 중입니다. 잠시 후 다시 눌러주세요.");
    var headers=["제품","Tool","자료명","Drive 링크","활용 구분","버전","현재 사용본","비고"];
    var sample=[
      ["MV50","제품 카다로그","MV50 Catalog EN","https://drive.google.com/file/d/FILE_ID/view","해외","v2.0","Y","CE MDR 반영본"],
      ["HFT750","제품 카다로그","HFT750 Catalog KR","https://drive.google.com/file/d/FILE_ID/view","국내","v1.0","Y","국내 영업용"]
    ];
    var guide=[
      ["항목","입력 방법"],
      ["제품","페이지의 제품명과 동일하게 입력: MV50, MP10/12, HFT750 등"],
      ["Tool","페이지의 Sales Tool명과 동일하게 입력"],
      ["Drive 링크","drive.google.com 또는 docs.google.com 공유 링크"],
      ["활용 구분","국내 / 해외 / 공용"],
      ["버전","선택 입력"],
      ["현재 사용본","Y 또는 N, 비워두면 Y"],
      ["비고","선택 입력"]
    ];
    var list=[["제품군","제품","Tool"]];
    navEntries("product").forEach(function(product){
      var family=familyOf(product);
      if(!family) return;
      var sourceKey=family.mode==="child"?family.dataKey:product.dataKey;
      var seen={};
      topTools().filter(function(t){return t.product===sourceKey;}).forEach(function(parent){
        var k=key(parent.item);
        if(seen[k]) return;
        seen[k]=true;
        list.push([family.name,product.name,parent.item]);
      });
    });
    var wb=XLSX.utils.book_new();
    var ws=XLSX.utils.aoa_to_sheet([headers].concat(sample));
    ws["!cols"]=[{wch:15},{wch:24},{wch:28},{wch:55},{wch:12},{wch:12},{wch:14},{wch:30}];
    XLSX.utils.book_append_sheet(wb,ws,"Drive 링크 등록");
    XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(guide),"작성 안내");
    XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(list),"제품-Tool 목록");
    XLSX.writeFile(wb,"MEKICS_Drive_Link_Bulk_Template.xlsx");
  }

  async function run(){
    var checked=[].slice.call(document.querySelectorAll("[data-drive-bulk-row]:checked"));
    var selected=checked.map(function(x){return bulkDriveState.rows[Number(x.dataset.driveBulkRow)];}).filter(function(r){return r && r.valid;});
    if(!selected.length) return;
    if(!state.connected) return toast("Google Sheets 연결 후 Drive 링크를 등록할 수 있습니다.");
    if(!confirm(selected.length+"개 Drive 링크를 일괄 등록할까요?\n현재 사용본(Y)은 같은 Tool·활용 구분의 기존 자료를 이전 버전으로 표시합니다.")) return;

    var btn=$("#runDriveBulkBtn");
    var completed=0;
    try{
      btn.disabled=true;
      for(var i=0;i<selected.length;i++){
        var row=selected[i];
        btn.textContent="등록 중 "+(i+1)+"/"+selected.length;
        await apiPost("registerDriveFile",{file:{
          toolId:row.toolId,
          driveUrl:row.driveUrl,
          version:row.version,
          language:row.language,
          note:row.note,
          isCurrent:row.current,
          displayName:row.displayName
        }});
        completed++;
      }
      btn.textContent="최신 데이터 확인 중...";
      await loadData(false);
      $("#driveBulkDialog").close();
      toast(completed+"개 Drive 링크 등록을 완료했습니다.");
    }catch(err){
      console.error(err);
      toast(completed+"개 등록 후 중단되었습니다.");
    }finally{
      btn.disabled=false;
      updateButton();
    }
  }

  function bind(){
    var openBtn=$("#driveBulkBtn");
    if(!openBtn) return;
    openBtn.onclick=open;
    $("#closeDriveBulkDialog").onclick=function(){ $("#driveBulkDialog").close(); };
    $("#cancelDriveBulkBtn").onclick=function(){ $("#driveBulkDialog").close(); };
    $("#driveBulkExcelFile").onchange=handleFile;
    $("#downloadDriveBulkTemplateBtn").onclick=downloadTemplate;
    $("#runDriveBulkBtn").onclick=run;
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",bind);
  else bind();
})();
