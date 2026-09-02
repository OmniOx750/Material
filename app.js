const SEED_DATA = [
  ["OmniOx","1","제품 소개","제품 카다로그","제품 라인업 및 주요 사양을 소개하는 자료","보유","",""],
  ["OmniOx","1-1.","","OmniOx","","보유","2026-04-09",""],
  ["OmniOx","1-2.","","HFT700","","보유","2026-04-09",""],
  ["OmniOx","1-3.","","HFT750A","","보유","2026-04-14",""],
  ["OmniOx","1-4.","","HFT750B","","보유","2026-04-14",""],
  ["OmniOx","1-5.","","HFT750S","","보유","2026-04-14",""],
  ["OmniOx","1-6.","","HFT751","","보유","2026-04-14","이미지 저작권 재 확인"],
  ["OmniOx","2","제품 소개","제품 브로슈어","요약형 홍보물 (영업 방문·전시회용)","보유","",""],
  ["OmniOx","2-1.","","OmniOx","","보유","",""],
  ["OmniOx","2-2.","","Bi-Flow","","보유","",""],
  ["OmniOx","2-3.","","TSF","","보유","",""],
  ["OmniOx","3","제품 소개","제품 소개 PPT자료","영업 프레젠테이션용 슬라이드","보유","2026-05-13","디자인 및 내용 재검토"],
  ["OmniOx","4","사용/설치 자료","사용자 매뉴얼","제품 사용법 안내서","보유","",""],
  ["OmniOx","4-1.","","HFT700","","보유","2026-04-09",""],
  ["OmniOx","4-2.","","HFT750A","","보유","2026-04-14",""],
  ["OmniOx","4-3.","","HFT750B","","보유","2026-04-14",""],
  ["OmniOx","4-4.","","HFT750S","","보유","2026-04-14",""],
  ["OmniOx","4-5.","","HFT751","","보유","2026-04-14",""],
  ["OmniOx","5","사용/설치 자료","퀵 매뉴얼","설치 및 셋업 가이드","보유","",""],
  ["OmniOx","5-1.","","HFT700","","보유","2026-04-09",""],
  ["OmniOx","5-2.","","HFT750A","","보유","2026-04-14",""],
  ["OmniOx","5-3.","","HFT750B","","보유","2026-04-14",""],
  ["OmniOx","5-4.","","HFT750S","","보유","2026-04-14",""],
  ["OmniOx","5-5.","","HFT751","","보유","2026-04-14",""],
  ["OmniOx","6","사용/설치 자료","트러블슈팅/FAQ","자주 묻는 질문 및 문제 해결 안내","보유","",""],
  ["OmniOx","7","인허가/제출 자료","인증서 (ISO13485·CE·FDA 등)","제품 인증 및 허가 관련 서류","보유","",""],
  ["OmniOx","8","인허가/제출 자료","임상적 근거자료 (Clinical Evidence)","임상 데이터 및 관련 논문·자료","확인중","",""],
  ["OmniOx","9","영업지원 자료","경쟁사 비교자료","경쟁 제품 대비 강점 비교 자료","미보유","","업데이트본 없음"],
  ["OmniOx","10","영업지원 자료","레퍼런스 병원 리스트","기존 설치·사용 병원 레퍼런스","미보유","","업데이트본 없음"],
  ["OmniOx","11","마케팅/데모 자료","사용 후기 / 케이스 스터디","고객 사용 사례 자료","미보유","","업데이트본 없음"],
  ["OmniOx","12","마케팅/데모 자료","제품 데모 영상","사용 시연 영상","미보유","","일부 있으나 전체영상 없음"],
  ["OmniOx","13","마케팅/데모 자료","전시회·학회용 홍보물","부스 전시용 배너, 리플렛 등","보유","",""],
  ["MV50","1","제품 소개","제품 카다로그","제품 라인업 및 주요 사양을 소개하는 자료","보유","",""],
  ["MV50","2","제품 소개","제품 브로슈어","요약형 홍보물 (영업 방문·전시회용)","미보유","",""],
  ["MV50","3","제품 소개","제품 소개 PPT자료","영업 프레젠테이션용 슬라이드","미보유","",""],
  ["MV50","4","사용/설치 자료","사용자 매뉴얼","제품 사용법 안내서","보유","",""],
  ["MV50","5","사용/설치 자료","퀵 매뉴얼","설치 및 셋업 가이드","보유","",""],
  ["MV50","6","사용/설치 자료","트러블슈팅/FAQ","자주 묻는 질문 및 문제 해결 안내","미보유","",""],
  ["MV50","7","인허가/제출 자료","임상적 근거자료 (Clinical Evidence)","임상 데이터 및 관련 논문·자료","미보유","",""],
  ["MV50","9","영업지원 자료","경쟁사 비교자료","경쟁 제품 대비 강점 비교 자료","확인중","",""],
  ["MV50","10","영업지원 자료","레퍼런스 병원 리스트","기존 설치·사용 병원 레퍼런스","미보유","",""],
  ["MV50","11","마케팅/데모 자료","사용 후기 / 케이스 스터디","고객 사용 사례 자료","미보유","",""],
  ["MV50","12","마케팅/데모 자료","제품 데모 영상","사용 시연 영상","미보유","",""],
  ["MV50","13","마케팅/데모 자료","전시회·학회용 홍보물","부스 전시용 배너, 리플렛 등","미보유","",""]
].map((r,i)=>({id:`seed-${i+1}`,product:r[0],no:r[1],category:r[2],item:r[3],description:r[4],status:r[5],updatedAt:r[6],note:r[7],order:i+1}));

const RAW_API_URL=(window.APP_CONFIG?.API_URL||"").trim();
const normalizeAppsScriptUrl=url=>url.replace(/\/a\/macros\/[^/]+\/s\//,"/macros/s/");
const API_CANDIDATES=[normalizeAppsScriptUrl(RAW_API_URL),RAW_API_URL].filter((v,i,a)=>v&&a.indexOf(v)===i);
let ACTIVE_API_URL=API_CANDIDATES[0]||"";
const state={items:[],files:[],product:"전체",search:"",status:"",category:"",connected:false};
const materialState={parentId:"",mode:"upload"};
const bulkState={fileName:"",sheets:[]};
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const statusClass=s=>s==="보유"?"owned":s==="미보유"?"missing":"checking";
const fmtDate=s=>!s||s==="-"?"-":String(s).slice(0,10);
const isChild=x=>String(x.no||"").includes("-");
const baseNo=x=>String(x.no||"").split("-")[0].replace(/\.$/,"");
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

function jsonp(url,params={}){
  return new Promise((resolve,reject)=>{
    const cb=`__mekics_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script=document.createElement("script");
    const timer=setTimeout(()=>finish(new Error("TIMEOUT")),9000);
    function cleanup(){clearTimeout(timer);delete window[cb];script.remove()}
    function finish(err,data){cleanup();err?reject(err):resolve(data)}
    window[cb]=data=>finish(null,data);
    const u=new URL(url);
    Object.entries({...params,callback:cb,_:Date.now()}).forEach(([k,v])=>u.searchParams.set(k,v));
    script.src=u.toString(); script.async=true; script.onerror=()=>finish(new Error("SCRIPT_LOAD_FAILED"));
    document.head.appendChild(script);
  });
}

async function apiList(){
  if(!API_CANDIDATES.length) throw new Error("API_NOT_CONFIGURED");
  let lastErr;
  for(const url of API_CANDIDATES){
    try{
      let result=await jsonp(url,{action:"bootstrap"});
      // v3 Code.gs가 잠시 남아 있어도 Tool 목록은 계속 보이도록 호환 처리
      if(!result||result.ok===false){
        result=await jsonp(url,{action:"list"});
      }
      if(!result||result.ok===false) throw new Error(result?.message||"API_ERROR");
      ACTIVE_API_URL=url; return result;
    }catch(e){lastErr=e}
  }
  throw lastErr||new Error("CONNECTION_FAILED");
}

async function apiPost(action,payload={}){
  if(!ACTIVE_API_URL) throw new Error("API_NOT_CONFIGURED");
  await fetch(ACTIVE_API_URL,{
    method:"POST",mode:"no-cors",credentials:"include",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify({action,...payload})
  });
  await sleep(action==="bulkUpsert"?1500:action==="uploadFile"?2200:1100);
}

async function loadData(showMessage=false){
  try{
    if(API_CANDIDATES.length){
      const result=await apiList();
      state.items=(result.items||[]).map((x,i)=>({...x,id:String(x.id),order:Number(x.order)||i+1}));
      state.files=(result.files||[]).map(x=>({...x,id:String(x.id),toolId:String(x.toolId),size:Number(x.size)||0,isCurrent:String(x.isCurrent)!=="false"&&x.isCurrent!==false}));
      state.connected=true;
      setSync("on","Google Sheets · Drive 연결됨",`${state.items.length}개 Tool · ${state.files.length}개 자료`);
    }else{
      state.items=structuredClone(SEED_DATA); state.files=[]; state.connected=false;
      setSync("","초기 데이터 모드","config.js에 배포 URL 입력");
    }
  }catch(e){
    console.error("Sheets connection:",e);
    state.items=structuredClone(SEED_DATA); state.files=[]; state.connected=false;
    setSync("error","연결 필요 · 샘플 데이터","Code.gs 재배포 후 새로고침");
    if(showMessage) toast("Google Sheets 연결을 다시 확인해주세요.");
  }
  rebuildFilters(); render();
  if(showMessage&&state.connected) toast("Google Sheets 최신 데이터로 동기화했습니다.");
}

function setSync(mode,title,sub){
  $("#syncDot").classList.remove("on","error"); if(mode) $("#syncDot").classList.add(mode);
  $("#syncText").textContent=title; $("#syncSub").textContent=sub;
}
function products(){return [...new Set(state.items.map(x=>x.product).filter(Boolean))]}
function compareNo(a,b){return String(a.no||"").localeCompare(String(b.no||""),"ko",{numeric:true,sensitivity:"base"})}
function topTools(items=state.items){return items.filter(x=>!isChild(x)).sort((a,b)=>String(a.product||"").localeCompare(String(b.product||""),"ko")||compareNo(a,b)||(Number(a.order)||9999)-(Number(b.order)||9999))}
function categories(){return [...new Set(topTools().map(x=>x.category).filter(Boolean))]}
function childrenOf(parent){const base=String(parent.no||"").replace(/\.$/,"");return state.items.filter(x=>x.product===parent.product&&isChild(x)&&baseNo(x)===base).sort((a,b)=>compareNo(a,b)||(Number(a.order)||9999)-(Number(b.order)||9999))}
function parentOf(item){if(!isChild(item)) return item;return state.items.find(x=>x.product===item.product&&!isChild(x)&&String(x.no||"").replace(/\.$/,"")===baseNo(item))||null}
function filesForToolId(toolId){return state.files.filter(f=>String(f.toolId)===String(toolId)).sort((a,b)=>String(b.uploadedAt||"").localeCompare(String(a.uploadedAt||"")))}
function fileScopeIds(parent){return [String(parent.id),...childrenOf(parent).map(c=>String(c.id))]}
function filesForParent(parent){const ids=new Set(fileScopeIds(parent));return state.files.filter(f=>ids.has(String(f.toolId))).sort((a,b)=>(Number(b.isCurrent)-Number(a.isCurrent))||String(b.uploadedAt||"").localeCompare(String(a.uploadedAt||"")))}
function fileCountForParent(parent){return filesForParent(parent).length}
function bytesLabel(n){const v=Number(n)||0;if(!v)return"";if(v<1024)return`${v} B`;if(v<1024*1024)return`${(v/1024).toFixed(1)} KB`;return`${(v/1024/1024).toFixed(v>10*1024*1024?0:1)} MB`}
function targetName(toolId){return state.items.find(x=>String(x.id)===String(toolId))?.item||"Tool"}
function scopedTopTools(){return topTools().filter(x=>state.product==="전체"||x.product===state.product)}
function filteredTools(){
  const q=state.search.toLowerCase().trim();
  return scopedTopTools().filter(x=>{
    const children=childrenOf(x);
    const text=[x.product,x.category,x.item,x.description,x.note,...children.flatMap(c=>[c.item,c.description,c.note])].join(" ").toLowerCase();
    return (!state.status||x.status===state.status)&&(!state.category||x.category===state.category)&&(!q||text.includes(q));
  });
}
function totals(items=scopedTopTools()){
  const total=items.length,owned=items.filter(x=>x.status==="보유").length,missing=items.filter(x=>x.status==="미보유").length,checking=items.filter(x=>x.status==="확인중").length;
  return {total,owned,missing,checking,rate:total?Math.round(owned/total*100):0};
}
function categoryIcon(category){if(category.includes("제품 소개"))return"▤";if(category.includes("사용"))return"◫";if(category.includes("인허가"))return"✓";if(category.includes("영업지원"))return"↗";if(category.includes("마케팅"))return"◇";return"□"}

function render(){renderProductNav();renderHeader();renderStats();renderOverview();renderToolSections()}
function renderProductNav(){
  $("#productNav").innerHTML=products().map(p=>`<button class="nav-item ${state.product===p?'active':''}" data-product-nav="${esc(p)}"><span class="product-dot"></span><b>${esc(p)}</b></button>`).join("");
  document.querySelector('[data-product-nav="전체"]').classList.toggle("active",state.product==="전체");
  document.querySelectorAll("[data-product-nav]").forEach(b=>b.onclick=()=>selectProduct(b.dataset.productNav));
}
function selectProduct(product){state.product=product;state.category="";$("#categoryFilter").value="";render();window.scrollTo({top:0,behavior:"smooth"})}
function renderHeader(){
  const name=state.product==="전체"?"영업 Tool 보유 현황":`${state.product} Sales Tool`;
  $("#pageTitle").textContent=name;
  $("#pageSubtitle").textContent=state.product==="전체"?"제품별 영업 자료를 Tool 단위로 확인하고 관리합니다.":`${state.product}의 카다로그, 브로슈어, 매뉴얼 등 영업 자료를 확인합니다.`;
}
function renderStats(){
  const t=totals();
  const cards=[["전체 Tool",t.total,"관리 중인 Tool 항목","▦"],["보유",t.owned,`보유율 ${t.rate}%`,"✓"],["미보유",t.missing,"제작·확보 필요","!"],["확인중",t.checking,"상태 확인 필요","?"]];
  $("#stats").innerHTML=cards.map(c=>`<div class="stat"><div class="stat-top"><span class="stat-label">${c[0]}</span><span class="stat-icon">${c[3]}</span></div><div class="stat-value">${c[1]}</div><div class="stat-sub">${c[2]}</div></div>`).join("");
}
function renderOverview(){
  const t=totals();const label=state.product==="전체"?"전체 제품":state.product;
  $("#overviewTitle").textContent=label;
  $("#overviewDescription").textContent=state.product==="전체"?`${products().length}개 제품의 핵심 영업 Tool 현황입니다.`:`${state.product}의 핵심 영업 Tool ${t.total}개를 관리 중입니다.`;
  $("#overviewRate").innerHTML=`<strong>${t.rate}%</strong><span>Tool 확보율</span>`;
  $("#productProgress").innerHTML=`<div class="progress-track"><div class="progress-fill" style="width:${t.rate}%"></div></div><div class="progress-copy"><b>${t.owned}/${t.total}</b> 보유</div>`;
}
function renderToolSections(){
  const tools=filteredTools(); $("#resultCount").textContent=`${tools.length}개 Tool`; $("#emptyState").hidden=tools.length>0;
  const grouped=new Map(); tools.forEach(x=>{const k=x.category||"기타";if(!grouped.has(k))grouped.set(k,[]);grouped.get(k).push(x)});
  $("#toolSections").innerHTML=[...grouped.entries()].map(([category,items])=>`
    <section class="tool-section">
      <div class="tool-section-head"><div><h2>${esc(category)}</h2><p>${esc(state.product==="전체"?"제품별 해당 Tool을 카드로 확인합니다.":`${state.product} · ${category}`)}</p></div><span class="section-count">${items.length}개</span></div>
      <div class="tool-grid">${items.map(toolCard).join("")}</div>
    </section>`).join("");
  document.querySelectorAll("[data-detail]").forEach(b=>b.onclick=()=>openDetail(b.dataset.detail));
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=e=>{e.stopPropagation();openEdit(b.dataset.edit)});
}
function toolCard(x){
  const children=childrenOf(x);const preview=children.slice(0,3).map(c=>`<span class="variant-chip">${esc(c.item)}</span>`).join("")+(children.length>3?`<span class="variant-more">+${children.length-3}</span>`:"");
  const update=x.updatedAt?`업데이트 ${fmtDate(x.updatedAt)}`:children.find(c=>c.updatedAt)?`세부자료 ${children.length}종`:"업데이트 기록 없음";
  const fileCount=fileCountForParent(x);
  return `<article class="tool-card" data-detail="${esc(x.id)}">
    <div class="tool-card-top"><span class="tool-symbol">${categoryIcon(x.category||"")}</span><div class="tool-status"><span class="badge ${statusClass(x.status)}">${esc(x.status)}</span></div></div>
    <h3>${esc(x.item)}</h3><p class="tool-desc">${esc(x.description||"설명 없음")}</p>
    ${children.length?`<div class="variant-preview">${preview}</div>`:""}
    <div class="tool-card-footer"><span class="tool-meta">${fileCount?`📎 ${fileCount}개 자료 · `:""}${children.length?`${children.length}개 세부자료 · `:""}${esc(update)}</span><div class="card-actions"><button class="text-btn" data-detail="${esc(x.id)}">자료 보기</button><button class="row-btn" data-edit="${esc(x.id)}" title="수정">⋯</button></div></div>
  </article>`;
}
function rebuildFilters(){
  const allowed=state.product==="전체"?categories():[...new Set(scopedTopTools().map(x=>x.category).filter(Boolean))];
  const current=state.category; $("#categoryFilter").innerHTML='<option value="">모든 분류</option>'+allowed.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join("");
  if(allowed.includes(current))$("#categoryFilter").value=current; else state.category="";
  $("#categoryList").innerHTML=categories().map(x=>`<option value="${esc(x)}">`).join("");
}

function openDetail(id){
  const wasOpen=$("#detailDialog").open;
  const x=state.items.find(i=>String(i.id)===String(id));if(!x)return;const parent=parentOf(x)||x;const children=childrenOf(parent);const files=filesForParent(parent);
  $("#detailEyebrow").textContent=`${parent.product} · ${parent.category||"SALES TOOL"}`;$("#detailTitle").textContent=parent.item;
  $("#detailBody").innerHTML=`
    <div class="detail-summary"><div><span class="badge ${statusClass(parent.status)}">${esc(parent.status)}</span><p>${esc(parent.description||"설명 없음")}</p><div class="detail-info"><span>No. ${esc(parent.no||"-")}</span><span>최종 업데이트 ${esc(fmtDate(parent.updatedAt))}</span></div>${parent.note?`<div class="detail-note">${esc(parent.note)}</div>`:""}</div></div>
    ${children.length?`<div class="variant-list"><div class="variant-list-title">세부 Tool · ${children.length}종</div>${children.map(c=>`<div class="variant-row"><div class="variant-name"><strong>${esc(c.item)}</strong><span>${esc(c.note||c.description||"세부 자료")}</span></div><span class="badge ${statusClass(c.status)}">${esc(c.status)}</span><span class="date-col tool-meta">📎 ${filesForToolId(c.id).length} · ${esc(fmtDate(c.updatedAt))}</span><button class="row-btn" data-detail-edit="${esc(c.id)}">⋯</button></div>`).join("")}</div>`:""}
    <div class="material-section">
      <div class="material-section-head"><div><b>등록 자료</b><span>Google Drive에 연결된 파일 ${files.length}개</span></div><button class="btn primary compact" id="addMaterialFromDetail">＋ 자료 등록</button></div>
      <div class="material-list">${files.length?files.map(fileRowHtml).join(""):`<div class="material-empty"><span>⌁</span><b>아직 등록된 파일이 없습니다.</b><small>PDF, PPT, Excel 등을 Drive에 등록해 영업팀이 바로 열거나 다운로드할 수 있습니다.</small></div>`}</div>
    </div>
    <div class="detail-edit"><button class="btn ghost" id="editFromDetail">이 Tool 수정</button></div>`;
  $("#editFromDetail").onclick=()=>{$("#detailDialog").close();openEdit(parent.id)};
  $("#addMaterialFromDetail").onclick=()=>openMaterialDialog(parent.id);
  document.querySelectorAll("[data-detail-edit]").forEach(b=>b.onclick=()=>{$("#detailDialog").close();openEdit(b.dataset.detailEdit)});
  document.querySelectorAll("[data-file-delete]").forEach(b=>b.onclick=()=>deleteMaterial(b.dataset.fileDelete,parent.id));
  if(!wasOpen)$("#detailDialog").showModal();
}
function fileRowHtml(f){
  const current=f.isCurrent?'<span class="current-badge">현재본</span>':'';
  const meta=[f.version,f.language,bytesLabel(f.size),fmtDate(f.uploadedAt)].filter(v=>v&&v!=="-").map(esc).join(" · ");
  const label=targetName(f.toolId);
  const href=f.downloadUrl||f.viewUrl||"#";
  return `<div class="material-row"><div class="file-icon">${fileExtensionIcon(f.fileName)}</div><div class="file-main"><div class="file-title"><strong>${esc(f.fileName)}</strong>${current}</div><span>${esc(label)}${meta?` · ${meta}`:""}</span>${f.note?`<small>${esc(f.note)}</small>`:""}</div><div class="file-actions"><a class="btn ghost compact file-open" href="${esc(href)}" target="_blank" rel="noopener">다운로드</a><button class="row-btn" data-file-delete="${esc(f.id)}" title="자료 삭제">×</button></div></div>`;
}
function fileExtensionIcon(name){const ext=String(name||"").split(".").pop().toUpperCase();return ["PDF","PPT","PPTX","XLS","XLSX","DOC","DOCX","MP4","MOV","ZIP"].includes(ext)?ext.slice(0,4):"FILE"}

function setMaterialMode(mode){
  materialState.mode=mode;document.querySelectorAll("[data-material-mode]").forEach(b=>b.classList.toggle("active",b.dataset.materialMode===mode));
  $("#materialUploadField").hidden=mode!=="upload";$("#materialLinkField").hidden=mode!=="link";
  $("#saveMaterialBtn").textContent=mode==="upload"?"Drive에 업로드":"Drive 링크 등록";
}
function openMaterialDialog(parentId){
  if($("#detailDialog").open)$("#detailDialog").close();
  const parent=state.items.find(x=>String(x.id)===String(parentId));if(!parent)return;
  materialState.parentId=String(parent.id);setMaterialMode("upload");
  $("#materialFile").value="";$("#materialDriveUrl").value="";$("#materialVersion").value="";$("#materialLanguage").value="";$("#materialNote").value="";$("#materialCurrent").checked=true;
  const targets=[parent,...childrenOf(parent)];$("#materialTarget").innerHTML=targets.map((t,i)=>`<option value="${esc(t.id)}">${i===0?"대표 Tool · ":"세부 Tool · "}${esc(t.item)}</option>`).join("");
  $("#materialDialog").showModal();
}
function readFileAsDataUrl(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||""));r.onerror=()=>reject(r.error||new Error("FILE_READ_ERROR"));r.readAsDataURL(file)})}
async function saveMaterial(){
  if(!state.connected)return toast("Google Sheets 연결 후 자료를 등록할 수 있습니다.");
  const toolId=$("#materialTarget").value;const version=$("#materialVersion").value.trim();const language=$("#materialLanguage").value;const note=$("#materialNote").value.trim();const isCurrent=$("#materialCurrent").checked;
  if(!toolId)return toast("연결할 Tool을 선택해주세요.");
  const btn=$("#saveMaterialBtn");const original=btn.textContent;const beforeCount=state.files.length;
  try{
    btn.disabled=true;btn.textContent="등록 중...";
    if(materialState.mode==="upload"){
      const file=$("#materialFile").files?.[0];if(!file)throw new Error("파일을 선택해주세요.");
      if(file.size>8*1024*1024)throw new Error("직접 업로드는 8MB 이하만 권장합니다. 큰 파일은 Drive 링크 등록을 사용해주세요.");
      const dataUrl=await readFileAsDataUrl(file);const base64=dataUrl.split(",")[1]||"";
      await apiPost("uploadFile",{file:{toolId,fileName:file.name,mimeType:file.type||"application/octet-stream",base64,version,language,note,isCurrent}});
    }else{
      const driveUrl=$("#materialDriveUrl").value.trim();if(!driveUrl)throw new Error("Google Drive 링크를 입력해주세요.");
      await apiPost("registerDriveFile",{file:{toolId,driveUrl,version,language,note,isCurrent}});
    }
    await loadData();
    if(state.files.length<=beforeCount)throw new Error("Drive 등록 결과를 확인하지 못했습니다. Apps Script 배포/권한을 확인해주세요.");
    $("#materialDialog").close();toast("Google Drive 자료를 등록했습니다.");
    if(materialState.parentId)openDetail(materialState.parentId);
  }catch(err){console.error(err);toast(err.message||"자료 등록 중 오류가 발생했습니다.")}
  finally{btn.disabled=false;btn.textContent=original}
}
async function deleteMaterial(fileId,parentId){
  const f=state.files.find(x=>String(x.id)===String(fileId));if(!f)return;
  const message=f.source==="upload"?"이 자료를 삭제할까요? 웹앱에서 직접 올린 파일은 Google Drive 휴지통으로 이동됩니다.":"이 자료 연결을 해제할까요? Drive 원본 파일은 삭제하지 않습니다.";
  if(!confirm(message))return;
  try{await apiPost("deleteFile",{id:fileId});await loadData();toast(f.source==="upload"?"자료를 삭제했습니다.":"Drive 연결을 해제했습니다.");openDetail(parentId)}catch(err){console.error(err);toast("자료 삭제 중 오류가 발생했습니다.")}
}

function fillProductSelect(selected){
  const ps=products();$("#productSelect").innerHTML=ps.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join("")+'<option value="__new__">＋ 새 제품 추가</option>';
  $("#productSelect").value=selected&&ps.includes(selected)?selected:(state.product!=="전체"&&ps.includes(state.product)?state.product:(ps[0]||"__new__"));toggleNewProduct();
}
function toggleNewProduct(){
  const isNew=$("#productSelect").value==="__new__";
  $("#newProductWrap").hidden=!isNew;
  $("#newProductInput").required=isNew;
}
function openAdd(){resetForm();$("#dialogEyebrow").textContent="NEW SALES TOOL";$("#dialogTitle").textContent="Tool 추가";$("#deleteBtn").hidden=true;fillProductSelect();$("#statusInput").value="미보유";$("#itemDialog").showModal()}
function openEdit(id){
  const x=state.items.find(i=>String(i.id)===String(id));if(!x)return;const inheritedCategory=x.category||(parentOf(x)?.category||"");resetForm();$("#dialogEyebrow").textContent="EDIT SALES TOOL";$("#dialogTitle").textContent=isChild(x)?"세부 자료 수정":"Tool 수정";$("#deleteBtn").hidden=false;$("#editId").value=x.id;fillProductSelect(x.product);$("#noInput").value=x.no||"";$("#categoryInput").value=inheritedCategory;$("#itemInput").value=x.item||"";$("#descriptionInput").value=x.description||"";$("#statusInput").value=x.status||"미보유";$("#dateInput").value=x.updatedAt&&x.updatedAt!=="-"?fmtDate(x.updatedAt):"";$("#noteInput").value=x.note||"";$("#itemDialog").showModal();
}
function resetForm(){$("#itemForm").reset();$("#editId").value="";$("#newProductWrap").hidden=true}

function normalizeProductFromSheet(name){
  return String(name||"").replace(/\s*체크리스트\s*$/i,"").trim();
}
function normalizeExcelDate(v){
  if(v===null||v===undefined||v===""||v==="-") return "";
  if(v instanceof Date && !Number.isNaN(v.getTime())){
    const y=v.getFullYear(),m=String(v.getMonth()+1).padStart(2,"0"),d=String(v.getDate()).padStart(2,"0");
    return `${y}-${m}-${d}`;
  }
  if(typeof v==="number" && window.XLSX?.SSF?.parse_date_code){
    const p=XLSX.SSF.parse_date_code(v);if(p)return `${p.y}-${String(p.m).padStart(2,"0")}-${String(p.d).padStart(2,"0")}`;
  }
  const text=String(v).trim().replace(/\./g,"-").replace(/\//g,"-");
  const m=text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(m)return `${m[1]}-${m[2].padStart(2,"0")}-${m[3].padStart(2,"0")}`;
  const d=new Date(v);if(!Number.isNaN(d.getTime()))return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  return "";
}
function excelCell(v){return String(v??"").trim()}
function parseChecklistSheet(sheetName,ws){
  const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:"",raw:true});
  const headerIndex=rows.findIndex(r=>{
    const cells=r.map(excelCell);return cells.includes("No")&&cells.includes("구분")&&cells.includes("영업 Tool 항목")&&cells.includes("보유 여부");
  });
  if(headerIndex<0)return {sheetName,product:normalizeProductFromSheet(sheetName),items:[],error:"체크리스트 헤더를 찾지 못했습니다."};
  const headers=rows[headerIndex].map(excelCell);const col=name=>headers.indexOf(name);
  const ix={no:col("No"),category:col("구분"),item:col("영업 Tool 항목"),description:col("설명"),status:col("보유 여부"),updatedAt:col("최종 업데이트일"),note:col("비고")};
  const product=normalizeProductFromSheet(sheetName);const items=[];const warnings=[];
  rows.slice(headerIndex+1).forEach((r,offset)=>{
    const item=excelCell(r[ix.item]);const no=excelCell(r[ix.no]);if(!item||!no)return;
    const child=no.includes("-");const category=excelCell(r[ix.category]);
    if(!child&&!category){warnings.push(`${headerIndex+2+offset}행: 구분이 없어 제외됨`);return;}
    let status=excelCell(r[ix.status]);if(!["보유","미보유","확인중"].includes(status))status="미보유";
    items.push({product,no,category:child?"":category,item,description:excelCell(r[ix.description]),status,updatedAt:normalizeExcelDate(r[ix.updatedAt]),note:excelCell(r[ix.note]),order:offset+1});
  });
  return {sheetName,product,items,warnings,error:items.length?"":"등록 가능한 Tool 항목이 없습니다."};
}
function resetBulkDialog(){
  bulkState.fileName="";bulkState.sheets=[];$("#excelFile").value="";$("#excelFileTitle").textContent="Excel 파일 선택";$("#excelFileSub").textContent=".xlsx / .xls · 기존 체크리스트 양식";$("#bulkPreview").hidden=true;$("#bulkPreview").innerHTML="";$("#bulkPreviewEmpty").hidden=false;$("#runBulkBtn").disabled=true;
}
function openBulkImport(){
  if(typeof XLSX==="undefined")return toast("Excel 모듈을 불러오지 못했습니다. 인터넷 연결을 확인해주세요.");
  if($("#itemDialog").open)$("#itemDialog").close();resetBulkDialog();$("#bulkDialog").showModal();
}
function renderBulkPreview(){
  const known=new Set(products());
  $("#bulkPreviewEmpty").hidden=bulkState.sheets.length>0;$("#bulkPreview").hidden=bulkState.sheets.length===0;
  $("#bulkPreview").innerHTML=bulkState.sheets.map((s,i)=>{
    const existing=known.has(s.product),valid=!s.error&&s.items.length>0;const checked=valid&&!existing;
    return `<label class="import-sheet ${valid?'':'invalid'}"><input type="checkbox" data-bulk-sheet="${i}" ${checked?'checked':''} ${valid?'':'disabled'}><span class="import-sheet-main"><b>${esc(s.product||s.sheetName)}</b><small>${esc(s.sheetName)}</small></span><span class="import-sheet-meta"><strong>${s.items.length}개</strong><em class="${existing?'update':'new'}">${existing?'기존 제품 · 업데이트':'새 제품 · 자동 추가'}</em>${s.error?`<small>${esc(s.error)}</small>`:''}${s.warnings?.length?`<small>${s.warnings.length}개 행 확인 필요</small>`:''}</span></label>`;
  }).join("");
  document.querySelectorAll("[data-bulk-sheet]").forEach(x=>x.onchange=updateBulkButton);updateBulkButton();
}
function updateBulkButton(){
  const selected=[...document.querySelectorAll("[data-bulk-sheet]:checked")];$("#runBulkBtn").disabled=selected.length===0;$("#runBulkBtn").textContent=selected.length?`선택한 ${selected.length}개 시트 반영`:"선택한 시트 반영";
}
async function handleExcelFile(e){
  const file=e.target.files?.[0];if(!file)return;$("#excelFileTitle").textContent=file.name;$("#excelFileSub").textContent="파일 분석 중...";
  try{
    const buf=await file.arrayBuffer();const book=XLSX.read(buf,{type:"array",cellDates:true});
    bulkState.fileName=file.name;bulkState.sheets=book.SheetNames.map(name=>parseChecklistSheet(name,book.Sheets[name])).filter(x=>x.items.length||x.error);
    $("#excelFileSub").textContent=`${bulkState.sheets.length}개 체크리스트 시트 확인`;renderBulkPreview();
  }catch(err){console.error(err);bulkState.sheets=[];$("#excelFileSub").textContent="파일을 읽지 못했습니다.";renderBulkPreview();toast("Excel 파일을 확인해주세요.")}
}
async function runBulkImport(){
  const selected=[...document.querySelectorAll("[data-bulk-sheet]:checked")].map(x=>bulkState.sheets[Number(x.dataset.bulkSheet)]).filter(Boolean);if(!selected.length)return;
  const items=selected.flatMap(s=>s.items);if(!items.length)return toast("반영할 Tool이 없습니다.");
  if(!state.connected)return toast("Google Sheets 연결 후 일괄 등록할 수 있습니다.");
  if(!confirm(`${selected.map(s=>s.product).join(", ")} · 총 ${items.length}개 항목을 Google Sheets에 반영할까요?\n같은 제품 + 같은 No.는 업데이트됩니다.`))return;
  try{
    $("#runBulkBtn").disabled=true;$("#runBulkBtn").textContent="반영 중...";await apiPost("bulkUpsert",{items});await loadData();$("#bulkDialog").close();
    toast(`${selected.length}개 제품 · ${items.length}개 항목을 반영했습니다.`);
    if(selected.length===1)selectProduct(selected[0].product);
  }catch(err){console.error(err);toast("Excel 일괄 등록 중 오류가 발생했습니다.");updateBulkButton()}
}
function formData(){
  const id=$("#editId").value;const product=$("#productSelect").value==="__new__"?$("#newProductInput").value.trim():$("#productSelect").value;
  return {id:id||crypto.randomUUID(),product,no:$("#noInput").value.trim(),category:$("#categoryInput").value.trim(),item:$("#itemInput").value.trim(),description:$("#descriptionInput").value.trim(),status:$("#statusInput").value,updatedAt:$("#dateInput").value,note:$("#noteInput").value.trim(),order:id?(state.items.find(x=>String(x.id)===String(id))?.order||state.items.length+1):state.items.length+1};
}
async function saveItem(e){
  e.preventDefault();const item=formData();if(!item.product||!item.item||!item.category)return toast("제품, 자료 분류, Tool 항목을 입력해주세요.");
  try{
    if(state.connected){await apiPost("save",{item});await loadData();toast("Google Sheets에 저장했습니다.");}
    else{const idx=state.items.findIndex(x=>String(x.id)===String(item.id));if(idx>=0)state.items[idx]=item;else state.items.push(item);toast("샘플 모드에만 반영되었습니다. Sheets 연결이 필요합니다.");rebuildFilters();render();}
    $("#itemDialog").close();if(state.product!=="전체"&&item.product!==state.product)selectProduct(item.product);
  }catch(err){console.error(err);toast("저장 중 오류가 발생했습니다.")}
}
async function deleteItem(){
  const id=$("#editId").value;if(!id||!confirm("이 Tool 항목을 삭제할까요?"))return;
  try{if(state.connected){await apiPost("delete",{id});await loadData();toast("삭제했습니다.");}else{state.items=state.items.filter(x=>String(x.id)!==String(id));rebuildFilters();render();toast("샘플 모드에서만 삭제되었습니다.");}$("#itemDialog").close()}catch(e){console.error(e);toast("삭제 중 오류가 발생했습니다.")}
}
let toastTimer;function toast(msg){clearTimeout(toastTimer);$("#toast").textContent=msg;$("#toast").classList.add("show");toastTimer=setTimeout(()=>$("#toast").classList.remove("show"),2800)}

$("#addBtn").onclick=openAdd;$("#bulkBtn").onclick=openBulkImport;$("#bulkFromNewBtn").onclick=openBulkImport;$("#refreshBtn").onclick=()=>loadData(true);$("#closeDialog").onclick=()=>$("#itemDialog").close();$("#cancelBtn").onclick=()=>$("#itemDialog").close();$("#closeDetail").onclick=()=>$("#detailDialog").close();$("#productSelect").onchange=toggleNewProduct;$("#itemForm").onsubmit=saveItem;$("#deleteBtn").onclick=deleteItem;
$("#closeBulkDialog").onclick=()=>$("#bulkDialog").close();$("#cancelBulkBtn").onclick=()=>$("#bulkDialog").close();$("#excelFile").onchange=handleExcelFile;$("#runBulkBtn").onclick=runBulkImport;
$("#closeMaterialDialog").onclick=()=>$("#materialDialog").close();$("#cancelMaterialBtn").onclick=()=>$("#materialDialog").close();$("#saveMaterialBtn").onclick=saveMaterial;document.querySelectorAll("[data-material-mode]").forEach(b=>b.onclick=()=>setMaterialMode(b.dataset.materialMode));
$("#searchInput").oninput=e=>{state.search=e.target.value;renderToolSections()};$("#statusFilter").onchange=e=>{state.status=e.target.value;renderToolSections()};$("#categoryFilter").onchange=e=>{state.category=e.target.value;renderToolSections()};
loadData();
