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

const API_URL=(window.APP_CONFIG?.API_URL||"").trim();
const state={items:[],product:"전체",search:"",status:"",category:""};
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const statusClass=s=>s==="보유"?"owned":s==="미보유"?"missing":"checking";
const fmtDate=s=>!s||s==="-"?"-":s;

async function api(action,payload={}){
  if(!API_URL) throw new Error("API_NOT_CONFIGURED");
  if(action==="list"){
    const res=await fetch(`${API_URL}?action=list&_=${Date.now()}`);
    if(!res.ok) throw new Error(`HTTP ${res.status}`); return res.json();
  }
  const res=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action,...payload})});
  if(!res.ok) throw new Error(`HTTP ${res.status}`); return res.json();
}

async function loadData(showMessage=false){
  try{
    if(API_URL){
      const result=await api("list");
      state.items=(result.items||[]).map(x=>({...x,id:String(x.id)}));
      setSync(true,"Google Sheets 연결됨",`${state.items.length}개 항목 동기화`);
    }else{
      state.items=structuredClone(SEED_DATA); setSync(false,"초기 데이터 모드","config.js에 Apps Script URL 입력");
    }
  }catch(e){
    console.error(e); state.items=structuredClone(SEED_DATA); setSync(false,"연결 오류 · 초기 데이터 표시","Apps Script 배포 URL을 확인하세요");
    toast("Google Sheets 연결에 실패해 초기 데이터를 표시합니다.");
  }
  rebuildFilters(); render(); if(showMessage) toast("최신 데이터로 새로고침했습니다.");
}

function setSync(on,title,sub){$("#syncDot").classList.toggle("on",on);$("#syncText").textContent=title;$("#syncSub").textContent=sub}
function products(){return [...new Set(state.items.map(x=>x.product).filter(Boolean))]}
function categories(){return [...new Set(state.items.map(x=>x.category).filter(Boolean))]}
function filtered(){return state.items.filter(x=>(state.product==="전체"||x.product===state.product)&&(!state.status||x.status===state.status)&&(!state.category||x.category===state.category)&&(!state.search||[x.item,x.description,x.note,x.category,x.product].join(" ").toLowerCase().includes(state.search.toLowerCase())))}
function totals(items=state.items){const total=items.length,owned=items.filter(x=>x.status==="보유").length,missing=items.filter(x=>x.status==="미보유").length,checking=items.filter(x=>x.status==="확인중").length;return{total,owned,missing,checking,rate:total?Math.round(owned/total*100):0}}

function render(){renderStats();renderTabs();renderTable()}
function renderStats(){const t=totals(state.product==="전체"?state.items:state.items.filter(x=>x.product===state.product));const cards=[['전체 Tool',t.total,'현재 관리 중인 전체 항목','▦'],['보유',t.owned,`보유율 ${t.rate}%`,'✓'],['미보유',t.missing,'추가 제작·확보 필요','!'],['확인중',t.checking,'상태 확인이 필요한 항목','?']];$("#stats").innerHTML=cards.map(c=>`<div class="stat"><div class="stat-top"><span class="stat-label">${c[0]}</span><span class="stat-icon">${c[3]}</span></div><div class="stat-value">${c[1]}</div><div class="stat-sub">${c[2]}</div></div>`).join('')}
function renderTabs(){const ps=["전체",...products()];$("#productTabs").innerHTML=ps.map(p=>`<button class="tab ${p===state.product?'active':''}" data-product="${esc(p)}">${esc(p)}</button>`).join('');document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{state.product=b.dataset.product;state.category="";$("#categoryFilter").value="";render()});const set=state.product==="전체"?state.items:state.items.filter(x=>x.product===state.product);const t=totals(set);$("#productProgress").innerHTML=`<div class="progress-track"><div class="progress-fill" style="width:${t.rate}%"></div></div><div class="progress-copy"><b>${t.rate}%</b> 확보 · ${t.owned}/${t.total}</div>`}
function renderTable(){const rows=filtered();$("#resultCount").textContent=`${rows.length}개 항목`;$("#emptyState").hidden=rows.length>0;$("#toolBody").innerHTML=rows.map(x=>`<tr class="${String(x.no).includes('-')?'subitem':''}"><td>${esc(x.no||'-')}</td><td class="category">${esc(x.category||'-')}</td><td class="tool-name">${esc(x.item)}</td><td class="description">${esc(x.description||'-')}</td><td><span class="badge ${statusClass(x.status)}">${esc(x.status)}</span></td><td class="date">${esc(fmtDate(x.updatedAt))}</td><td class="note">${esc(x.note||'-')}</td><td><button class="row-btn" data-edit="${esc(x.id)}" title="수정">⋯</button></td></tr>`).join('');document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEdit(b.dataset.edit))}
function rebuildFilters(){const current=$("#categoryFilter").value;$("#categoryFilter").innerHTML='<option value="">모든 구분</option>'+categories().map(x=>`<option>${esc(x)}</option>`).join('');if(categories().includes(current))$("#categoryFilter").value=current;$("#categoryList").innerHTML=categories().map(x=>`<option value="${esc(x)}">`).join('')}

function fillProductSelect(selected){const ps=products();$("#productSelect").innerHTML=ps.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('')+'<option value="__new__">＋ 새 제품 추가</option>';$("#productSelect").value=selected&&ps.includes(selected)?selected:(ps[0]||"__new__");toggleNewProduct()}
function toggleNewProduct(){$("#newProductWrap").hidden=$("#productSelect").value!=="__new__";$("#newProductInput").required=!$("#newProductWrap").hidden}
function openAdd(){resetForm();$("#dialogEyebrow").textContent="NEW SALES TOOL";$("#dialogTitle").textContent="Tool 추가";$("#deleteBtn").hidden=true;fillProductSelect(state.product!=="전체"?state.product:null);$("#statusInput").value="미보유";$("#itemDialog").showModal()}
function openEdit(id){const x=state.items.find(i=>String(i.id)===String(id));if(!x)return;resetForm();$("#dialogEyebrow").textContent="EDIT SALES TOOL";$("#dialogTitle").textContent="Tool 수정";$("#deleteBtn").hidden=false;$("#editId").value=x.id;fillProductSelect(x.product);$("#noInput").value=x.no||"";$("#categoryInput").value=x.category||"";$("#itemInput").value=x.item||"";$("#descriptionInput").value=x.description||"";$("#statusInput").value=x.status||"미보유";$("#dateInput").value=x.updatedAt&&x.updatedAt!=="-"?x.updatedAt:"";$("#noteInput").value=x.note||"";$("#itemDialog").showModal()}
function resetForm(){$("#itemForm").reset();$("#editId").value="";$("#newProductWrap").hidden=true}
function formData(){const id=$("#editId").value;const product=$("#productSelect").value==="__new__"?$("#newProductInput").value.trim():$("#productSelect").value;return{id:id||crypto.randomUUID(),product,no:$("#noInput").value.trim(),category:$("#categoryInput").value.trim(),item:$("#itemInput").value.trim(),description:$("#descriptionInput").value.trim(),status:$("#statusInput").value,updatedAt:$("#dateInput").value,note:$("#noteInput").value.trim(),order:id?(state.items.find(x=>String(x.id)===String(id))?.order||state.items.length+1):state.items.length+1}}
async function saveItem(e){e.preventDefault();const item=formData();if(!item.product||!item.item||!item.category)return toast("제품, 구분, Tool 항목을 입력해주세요.");try{if(API_URL){const r=await api("save",{item});if(!r.ok)throw new Error(r.message||"SAVE_FAILED");await loadData();}else{const idx=state.items.findIndex(x=>String(x.id)===String(item.id));if(idx>=0)state.items[idx]=item;else state.items.push(item);rebuildFilters();render();toast("미리보기 모드에서 저장했습니다. Sheets 연결 후에는 시트에 저장됩니다.");}$("#itemDialog").close();}catch(err){console.error(err);toast("저장 중 오류가 발생했습니다.")}}
async function deleteItem(){const id=$("#editId").value;if(!id||!confirm("이 Tool 항목을 삭제할까요?"))return;try{if(API_URL){const r=await api("delete",{id});if(!r.ok)throw new Error(r.message||"DELETE_FAILED");await loadData();}else{state.items=state.items.filter(x=>String(x.id)!==String(id));rebuildFilters();render();toast("미리보기 모드에서 삭제했습니다.");}$("#itemDialog").close()}catch(e){console.error(e);toast("삭제 중 오류가 발생했습니다.")}}
let toastTimer;function toast(msg){clearTimeout(toastTimer);$("#toast").textContent=msg;$("#toast").classList.add("show");toastTimer=setTimeout(()=>$("#toast").classList.remove("show"),2600)}

$("#addBtn").onclick=openAdd;$("#refreshBtn").onclick=()=>loadData(true);$("#closeDialog").onclick=()=>$("#itemDialog").close();$("#cancelBtn").onclick=()=>$("#itemDialog").close();$("#productSelect").onchange=toggleNewProduct;$("#itemForm").onsubmit=saveItem;$("#deleteBtn").onclick=deleteItem;$("#searchInput").oninput=e=>{state.search=e.target.value;renderTable()};$("#statusFilter").onchange=e=>{state.status=e.target.value;renderTable()};$("#categoryFilter").onchange=e=>{state.category=e.target.value;renderTable()};$("#focusMissing").onclick=()=>{state.status="미보유";$("#statusFilter").value="미보유";renderTable();document.querySelector('.table-panel').scrollIntoView({behavior:'smooth'})};
loadData();
