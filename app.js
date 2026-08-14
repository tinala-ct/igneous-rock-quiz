"use strict";

const LETTERS = ["A","B","C","D","E"];
const PASS_SCORE = 5;
const STORAGE_KEY = "rockQuest8Stages-v1";

const STAGES = [
  {
    title:"นักสืบหินอัคนี ตอนที่ 1", english:"Igneous Rock Detective I", color:"#d8663f",
    summary:"อ่านขนาดผลึก เนื้อแก้ว และรูพรุน", memory:"แกรนิต/แกบโบร = ผลึกหยาบ · บะซอลต์ = เนื้อละเอียด · ออบซิเดียน = แก้ว · พัมมิซ/สคอเรีย = รูพรุน",
    items:[
      ["granite","หินแกรนิต","granite","rocks/granite.jpg","สีค่อนข้างอ่อน เห็นผลึกหยาบหลายสีประสานกัน และมักพบควอตซ์"],
      ["gabbro","หินแกบโบร","gabbro","rocks/gabbro.jpg","สีเข้ม แต่ยังเห็นเม็ดผลึกหยาบประสานกันอย่างชัดเจน"],
      ["basalt","หินบะซอลต์","basalt","rocks/basalt.jpg","พื้นเนื้อละเอียดสีเข้ม และอาจมีผลึกสีอ่อนขนาดใหญ่ประปราย"],
      ["obsidian","หินออบซิเดียน","obsidian","rocks/obsidian.jpg","มันวาวคล้ายแก้ว ไม่มีผลึกที่มองเห็นชัด และแตกเป็นรอยโค้ง"],
      ["pumice","หินพัมมิซ","pumice","rocks/pumice.jpg","สีค่อนข้างอ่อน รูพรุนมาก ผนังฟองบาง และน้ำหนักเบามาก"],
      ["scoria","หินสคอเรีย","scoria","rocks/scoria.jpg","สีเข้มหรือแดงคล้ำ รูพรุนผนังหนา และหนักกว่าพัมมิซ"]
    ]
  },
  {
    title:"นักสืบหินอัคนี ตอนที่ 2", english:"Igneous Rock Detective II", color:"#c57833",
    summary:"ใช้สี องค์ประกอบ และเนื้อหินแยกญาติใกล้เคียง", memory:"ไรโอไลต์ = อ่อนละเอียด · แอนดีไซต์ = เทากลาง · ไดออไรต์ = เกลือพริกไทย · เพกมาไทต์ = ผลึกใหญ่มาก",
    items:[
      ["rhyolite","หินไรโอไลต์","rhyolite","rocks/rhyolite.webp","สีอ่อน เนื้อละเอียด และบางก้อนเห็นแนวการไหล"],
      ["andesite","หินแอนดีไซต์","andesite","rocks/andesite.webp","สีเทาปานกลาง เนื้อละเอียด และอาจมีผลึกใหญ่ประปราย"],
      ["diorite","หินไดออไรต์","diorite","rocks/diorite.webp","ผลึกหยาบสีขาวสลับดำคล้ายเกลือกับพริกไทย"],
      ["pegmatite","หินเพกมาไทต์","pegmatite","rocks/pegmatite.webp","ผลึกแร่ใหญ่มาก มักใหญ่ระดับเซนติเมตร"],
      ["tuff","หินทัฟฟ์","tuff","rocks/tuff.webp","เศษหินภูเขาไฟเชิงมุมฝังอยู่ในเนื้อเถ้าละเอียด"],
      ["peridotite","หินเพริโดไทต์","peridotite","rocks/peridotite.webp","สีเขียวเข้ม ผลึกหยาบ และมีโอลิวีนมาก"]
    ]
  },
  {
    title:"นักสืบหินตะกอน ตอนที่ 1", english:"Sedimentary Rock Detective I", color:"#a87946",
    summary:"ดูขนาด ความมน ชั้นหิน และซากดึกดำบรรพ์", memory:"กรวดมนกับกรวดเหลี่ยมดูที่ขอบ · หินทรายสาก · ดินดานแตกเป็นแผ่น · หินปูนอาจมีซาก",
    items:[
      ["conglomerate","หินกรวดมน","conglomerate","rocks/conglomerate.webp","มีเศษกรวดขอบมนหลายขนาดถูกยึดเข้าด้วยกัน"],
      ["breccia","หินกรวดเหลี่ยม","breccia","rocks/breccia.webp","มีเศษกรวดขอบเหลี่ยมคมถูกยึดเข้าด้วยกัน"],
      ["sandstone","หินทราย","sandstone","rocks/sandstone.webp","เห็นเม็ดขนาดทราย ผิวสัมผัสมักสากคล้ายกระดาษทราย"],
      ["shale","หินดินดาน","shale","rocks/shale.webp","เนื้อละเอียดมากและแตกออกเป็นแผ่นบางตามชั้น"],
      ["fossil-limestone","หินปูนซาก","fossiliferous limestone","rocks/fossil-limestone.webp","เห็นซากหรือเศษเปลือกหอยในเนื้อหินที่มีแคลไซต์"],
      ["coal","ถ่านหิน","coal","rocks/coal.webp","สีดำ เกิดจากอินทรียวัตถุสะสม และมักเบากว่าหินทั่วไป"]
    ]
  },
  {
    title:"นักสืบหินตะกอน ตอนที่ 2", english:"Sedimentary Rock Detective II", color:"#8b8062",
    summary:"แยกหินเนื้อละเอียด หินจากเปลือกหอย และหินเคมี", memory:"ทรายแป้งสากเล็กน้อย · โคลนเนียนทึบ · โคควินามีเปลือกหอย · เชิร์ตแข็งแตกโค้ง · ยิปซัมนุ่ม",
    items:[
      ["siltstone","หินทรายแป้ง","siltstone","rocks/siltstone.webp","เนื้อละเอียด แต่ถูแล้วรู้สึกสากเล็กน้อย และไม่แตกเป็นแผ่นเด่น"],
      ["mudstone","หินโคลน","mudstone","rocks/mudstone.webp","เนื้อละเอียดมาก ผิวทึบ และมักแตกเป็นก้อน ไม่ใช่แผ่นบาง"],
      ["coquina","หินโคควินา","coquina","rocks/coquina.webp","ประกอบด้วยเศษเปลือกหอยหยาบจำนวนมากที่ยึดกันหลวม ๆ"],
      ["chalk","ชอล์ก","chalk","rocks/chalk.webp","สีขาว เนื้อละเอียด นุ่ม และให้ผงคล้ายชอล์ก"],
      ["chert","หินเชิร์ต","chert","rocks/chert.webp","แข็งมาก เนื้อแน่น ผิวคล้ายขี้ผึ้ง และแตกเป็นรอยโค้ง"],
      ["rock-gypsum","หินยิปซัม","rock gypsum","rocks/rock-gypsum.webp","สีอ่อน อาจโปร่งแสง และนุ่มจนเล็บขูดเป็นรอยได้"]
    ]
  },
  {
    title:"นักสืบหินแปร ตอนที่ 1", english:"Metamorphic Rock Detective I", color:"#755b8f",
    summary:"อ่านแนวแร่ ประกาย และตามหาหินต้นกำเนิด", memory:"ชนวน = ละเอียดด้าน · ฟิลไลต์ = วาวไหม · ชีสต์ = เกล็ดชัด · ไนส์ = แถบอ่อน–เข้ม",
    items:[
      ["slate","หินชนวน","slate","rocks/slate.webp","เนื้อละเอียด ผิวค่อนข้างด้าน และแตกเป็นแผ่นเรียบ"],
      ["phyllite","หินฟิลไลต์","phyllite","rocks/phyllite.webp","เนื้อละเอียด มีประกายคล้ายไหมและแนวผิวเป็นคลื่น"],
      ["schist","หินชีสต์","schist","rocks/schist.webp","เห็นเกล็ดไมกาวาวชัดและมีแนวเรียงตัวเด่น"],
      ["gneiss","หินไนส์","gneiss","rocks/gneiss.webp","แร่สีอ่อนและสีเข้มแยกเป็นแถบสลับกัน"],
      ["marble","หินอ่อน","marble","rocks/marble.webp","ผลึกแคลไซต์ประสานกัน ไม่มีแนวแร่ และทำปฏิกิริยากับกรดอ่อน"],
      ["quartzite","หินควอร์ตไซต์","quartzite","rocks/quartzite.webp","แข็งมาก เม็ดควอตซ์เชื่อมแน่น และรอยแตกตัดผ่านเม็ด"]
    ]
  },
  {
    title:"นักสืบหินแปร ตอนที่ 2", english:"Metamorphic Rock Detective II", color:"#526b87",
    summary:"ใช้แร่เด่นและลวดลายตามรอยสภาพแวดล้อมการแปร", memory:"ฮอร์นเฟลส์ = ถูกอบ · เซอร์เพนทิไนต์ = เขียวลายตาข่าย · เอโคลไจต์ = แดงในเขียว · มิกมาไทต์ = ลายพับวน",
    items:[
      ["hornfels","หินฮอร์นเฟลส์","hornfels","rocks/hornfels.webp","สีเข้ม เนื้อแน่นละเอียด ไม่มีแนวแร่ และเกิดใกล้แมกมา"],
      ["amphibolite","หินแอมฟิโบไลต์","amphibolite","rocks/amphibolite.webp","มีแอมฟิโบลสีเข้มมากร่วมกับแพลจิโอเคลสสีขาว"],
      ["serpentinite","หินเซอร์เพนทิไนต์","serpentinite","rocks/serpentinite.webp","สีเขียวหลายเฉด ผิววาวคล้ายขี้ผึ้ง และมีเส้นดำเป็นตาข่าย"],
      ["soapstone","หินสบู่","soapstone","rocks/soapstone.webp","สีเทาเขียว ผิวเนียนลื่น และนุ่มเพราะมีทัลก์มาก"],
      ["eclogite","หินเอโคลไจต์","eclogite","rocks/eclogite.webp","ผลึกการ์เนตแดงจำนวนมากอยู่ในเนื้อออมฟาไซต์สีเขียว"],
      ["migmatite","หินมิกมาไทต์","migmatite","rocks/migmatite.webp","แถบสีอ่อน–เข้มคดโค้งซับซ้อนจากการหลอมบางส่วน"]
    ]
  },
  {
    title:"นักสืบแร่ ตอนที่ 1", english:"Mineral Detective I", color:"#2d8c87",
    summary:"ทดสอบความวาว ความแข็ง แนวแตก และรอยแตก", memory:"ควอตซ์ = แข็ง 7 ไม่มีแนวแตก · K-feldspar = ชมพู · plagioclase = เส้นขีด · ไมกา = ลอกเป็นแผ่น",
    items:[
      ["quartz","ควอตซ์","quartz","rocks/quartz.webp","วาวแก้ว แข็ง 7 ไม่มีแนวแตกเรียบ และแตกเป็นรอยโค้ง"],
      ["kfeldspar","โพแทสเซียมเฟลด์สปาร์","potassium feldspar","rocks/kfeldspar.webp","มักสีชมพู รูปทรงบล็อก และมีแนวแตกสองแนวเกือบ 90°"],
      ["plagioclase","แพลจิโอเคลส","plagioclase feldspar","rocks/plagioclase.webp","มักสีขาว–เทา และมีเส้นขีดขนานละเอียดบนผิวแนวแตก"],
      ["biotite","ไบโอไทต์","biotite mica","rocks/biotite.webp","สีดำหรือน้ำตาลเข้ม ลอกเป็นแผ่นบางได้ และแผ่นยืดหยุ่น"],
      ["muscovite","มัสโคไวต์","muscovite mica","rocks/muscovite.webp","ใสหรือสีเงิน ลอกเป็นแผ่นบางได้ และมีแนวแตกดีมากหนึ่งแนว"],
      ["calcite","แคลไซต์","calcite","rocks/calcite.webp","มีแนวแตกสามแนวเป็นทรงรอมโบฮีดรอน และเกิดฟองกับกรดอ่อน"]
    ]
  },
  {
    title:"นักสืบแร่ ตอนที่ 2", english:"Mineral Detective II", color:"#4f7e54",
    summary:"อ่านรูปผลึก มุมแนวแตก ความแข็ง และผิวสัมผัส", memory:"โอลิวีน = เม็ดเขียว · ไพรอกซีน = สั้น 90° · แอมฟิโบล = ยาว 60°/120° · ทัลก์ = นุ่มลื่น",
    items:[
      ["olivine","โอลิวีน","olivine","rocks/olivine.webp","เป็นเม็ดสีเขียวมะกอก วาวแก้ว แข็ง 6.5–7 และแนวแตกไม่เด่น"],
      ["pyroxene","ไพรอกซีน","pyroxene","rocks/pyroxene.webp","สีดำ–เขียวเข้ม ผลึกสั้นอวบ และมีแนวแตกเกือบ 90°"],
      ["amphibole","แอมฟิโบล–ฮอร์นเบลนด์","amphibole–hornblende","rocks/amphibole.webp","สีดำ–เขียวเข้ม ผลึกยาวเรียว และแตกประมาณ 60°/120°"],
      ["garnet","การ์เนต","garnet","rocks/garnet.webp","ผลึกแดง–น้ำตาล มักเป็นทรง 12 หน้า แข็ง และไม่มีแนวแตกเรียบ"],
      ["talc","ทัลก์","talc","rocks/talc.webp","นุ่มที่สุด ความแข็ง 1 และผิวลื่นคล้ายสบู่"],
      ["gypsum","ยิปซัม","gypsum","rocks/gypsum.webp","ผลึกใสหรือขาวเป็นแผ่น/ใบมีด ความแข็ง 2 และเล็บขูดได้"]
    ]
  }
].map((stage, stageIndex) => ({...stage, id:stageIndex + 1, items:stage.items.map(([id,thai,english,image,clue]) => ({id,thai,english,image,clue}))}));

const app = document.querySelector("#app");
let state = loadState();
let view = "map";
let stageIndex = state.currentStage;
let questions = [];
let questionIndex = 0;
let selected = null;
let stageScore = 0;
let attempt = 0;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Number.isInteger(saved.currentStage) && Array.isArray(saved.completed)) {
      return {currentStage:Math.max(0,Math.min(saved.currentStage,STAGES.length)),completed:saved.completed.filter(Number.isInteger)};
    }
  } catch (_) {}
  return {currentStage:0,completed:[]};
}
function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }
function seededShuffle(items, seed){ const out=[...items]; let x=seed>>>0; for(let i=out.length-1;i>0;i--){x=(x*1664525+1013904223)>>>0;const j=x%(i+1);[out[i],out[j]]=[out[j],out[i]];} return out; }
function makeQuestions(stage, seed){
  const order=seededShuffle(stage.items,seed);
  return order.map((item,i)=>({item,mode:i%2===0?"name":"clue",seed:seed+i*97}));
}
function correctValue(q){ return q.mode==="name"?q.item.id:`clue:${q.item.id}`; }
function makeOptions(q,stage){
  const pool=stage.items.map(item=>q.mode==="name"?item.id:`clue:${item.id}`);
  const correct=correctValue(q);
  return seededShuffle([correct,...seededShuffle(pool.filter(v=>v!==correct),q.seed).slice(0,4)],q.seed+31);
}
function itemByValue(value,stage){ const id=value.replace("clue:",""); return stage.items.find(item=>item.id===id); }
function optionText(value,q,stage){ const item=itemByValue(value,stage); return q.mode==="name"?`${item.thai} (${item.english})`:item.clue; }
function safeStageIndex(){ return Math.max(0,Math.min(state.currentStage,STAGES.length-1)); }

function renderHeader(extra=""){
  return `<header class="topbar"><div><p class="eyebrow">VISUAL EARTH SCIENCE LAB · อายุ 13 ปีขึ้นไป</p><h1>Rock Quest <em>8 ด่าน</em></h1><p class="subtitle">มองภาพ → ชี้หลักฐาน → เรียกชื่อหินและแร่</p></div><div class="utility">${extra}<button class="ghost" id="reset-all">เริ่มใหม่ทั้งหมด</button></div></header>`;
}
function attachReset(){ document.querySelector("#reset-all")?.addEventListener("click",()=>{if(confirm("ล้างความคืบหน้าทั้งหมดและกลับด่าน 1 ใช่หรือไม่?")){resetProgress();}}); }

function renderMap(){
  view="map";
  if(state.currentStage>=STAGES.length) return renderComplete();
  const current=safeStageIndex();
  app.innerHTML=`<main class="app"><section class="shell">${renderHeader(`<span class="status-chip">ผ่านแล้ว ${state.completed.length} / 8 ด่าน</span>`)}
    <section class="hero"><div class="hero-grid"><div><p class="eyebrow" style="color:#ffd47a">ภารกิจนักสืบธรณีวิทยา</p><h2>พิชิตหินและแร่ตามลำดับทั้ง 8 ด่าน</h2><p>แต่ละด่านมี 6 คำถามจากภาพ ตัวเลือก A–E และต้องได้อย่างน้อย <strong>${PASS_SCORE}/6</strong> คะแนนเพื่อปลดล็อกด่านต่อไป</p></div><div class="rule"><strong>กติกาสำคัญ</strong><p>ถ้าคะแนนไม่ถึงเกณฑ์ ความคืบหน้าทั้งหมดจะถูกล้าง และต้องกลับไปเริ่มด่าน 1 เสมอ</p></div></div></section>
    <section class="map" aria-label="แผนที่แปดด่าน">${STAGES.map((stage,i)=>{
      const done=state.completed.includes(i), active=i===current, locked=i>current;
      return `<article class="stage-card ${done?"done":""} ${active?"current":""} ${locked?"locked":""}" style="--stage:${stage.color}"><div class="stage-no">${done?"✓":stage.id}</div><h3>${stage.title}</h3><div class="en">${stage.english}</div><p>${stage.summary}</p><div class="stage-state">${done?"ผ่านแล้ว":active?"ด่านปัจจุบัน":"🔒 ยังไม่ปลดล็อก"}</div>${active?`<button class="primary stage-start" data-stage="${i}">เริ่มด่าน ${stage.id}</button>`:""}</article>`;
    }).join("")}</section>
  </section></main>`;
  document.querySelectorAll(".stage-start").forEach(btn=>btn.addEventListener("click",()=>startStage(Number(btn.dataset.stage))));
  attachReset();
}

function startStage(i){
  if(i!==state.currentStage || i>=STAGES.length) return;
  stageIndex=i; attempt+=1; questions=makeQuestions(STAGES[i],20260814+i*401+attempt*17); questionIndex=0; selected=null; stageScore=0; view="quiz"; renderQuiz();
}
function renderQuiz(){
  const stage=STAGES[stageIndex], q=questions[questionIndex], correct=correctValue(q), options=makeOptions(q,stage), progress=Math.round(((questionIndex+1)/questions.length)*100);
  app.innerHTML=`<main class="app" style="--stage:${stage.color}"><section class="shell">${renderHeader(`<span class="score">⭐ ${stageScore} คะแนน</span>`)}
    <div class="progress-label"><span>ด่าน ${stage.id}/8 · ข้อ ${questionIndex+1}/6</span><span>${progress}%</span></div><div class="track" role="progressbar" aria-valuemin="1" aria-valuemax="6" aria-valuenow="${questionIndex+1}"><div style="width:${progress}%"></div></div>
    <section class="game"><div class="photo-wrap"><img src="${q.item.image}" alt="ภาพตัวอย่างสำหรับคำถามด่าน ${stage.id} ข้อ ${questionIndex+1}" /><span class="photo-label">ดูภาพให้ละเอียด</span></div>
      <div class="question"><span class="badge">${q.mode==="name"?"ทายชื่อจากภาพ":"ชี้หลักฐานเด่น"}</span><h2>${q.mode==="name"?"ตัวอย่างในภาพนี้คืออะไร?":"ข้อใดอธิบายลักษณะเด่นของตัวอย่างนี้ได้ถูกต้อง?"}</h2><p>เลือกคำตอบที่เหมาะสมที่สุดเพียง 1 ข้อ</p>
      <div class="choices">${options.map((value,i)=>{const cls=selected===null?"":value===correct?"correct":value===selected?"wrong":"";return `<button class="choice ${cls}" data-value="${value}" ${selected===null?"":"disabled"}><b>${LETTERS[i]}</b><span>${optionText(value,q,stage)}</span></button>`;}).join("")}</div>
      <div id="feedback" aria-live="polite">${selected===null?"":`<div class="feedback ${selected===correct?"good":"try"}"><strong>${selected===correct?"ถูกต้อง!":"ยังไม่ถูก"}</strong><p><b>${q.item.thai} (${q.item.english})</b> — ${q.item.clue}</p></div><button class="primary next" id="next">${questionIndex===questions.length-1?"สรุปผลด่าน":"ข้อต่อไป →"}</button>`}</div></div></section>
    <aside class="memory"><strong>เคล็ดจำด่านนี้:</strong> ${stage.memory}</aside>
  </section></main>`;
  document.querySelectorAll(".choice").forEach(btn=>btn.addEventListener("click",()=>choose(btn.dataset.value)));
  document.querySelector("#next")?.addEventListener("click",nextQuestion); attachReset();
}
function choose(value){ if(selected!==null)return; selected=value; if(value===correctValue(questions[questionIndex])) stageScore+=1; renderQuiz(); }
function nextQuestion(){ if(selected===null)return; if(questionIndex===questions.length-1) renderStageResult(); else{questionIndex+=1;selected=null;renderQuiz();window.scrollTo({top:0,behavior:"smooth"});} }

function renderStageResult(){
  view="result"; const stage=STAGES[stageIndex], passed=stageScore>=PASS_SCORE;
  app.innerHTML=`<main class="app" style="--stage:${stage.color}"><section class="result-card"><div class="result-orb">${passed?"✓":"↺"}</div><span class="badge">ด่าน ${stage.id} / 8</span><h1>${passed?"ผ่านด่าน!":"ยังไม่ผ่านด่าน"}</h1><p class="big">${stageScore} / 6 คะแนน</p><p>${passed?`คุณจำแนก ${stage.title} ได้ตามเกณฑ์แล้ว`:`ต้องได้อย่างน้อย ${PASS_SCORE}/6 คะแนน`}</p>${passed?"":`<p class="danger-note"><strong>ตามกติกา:</strong> ความคืบหน้าทั้งหมดจะถูกล้าง และกลับไปเริ่มที่ด่าน 1</p>`}<div class="actions"><button class="primary ${passed?"":"reset-primary"}" id="result-action">${passed?(stageIndex===7?"รับตรานักสืบ":"ไปด่านถัดไป →"):"กลับไปเริ่มด่าน 1"}</button></div></section></main>`;
  document.querySelector("#result-action").addEventListener("click",()=>passed?passStage():resetProgress());
}
function passStage(){
  if(!state.completed.includes(stageIndex)) state.completed.push(stageIndex);
  state.completed.sort((a,b)=>a-b); state.currentStage=stageIndex+1; saveState();
  if(state.currentStage>=STAGES.length) renderComplete(); else renderMap();
}
function resetProgress(){ state={currentStage:0,completed:[]}; saveState(); stageIndex=0; questions=[]; questionIndex=0; selected=null; stageScore=0; renderMap(); window.scrollTo({top:0,behavior:"smooth"}); }
function renderComplete(){
  view="complete";
  app.innerHTML=`<main class="app"><section class="result-card" style="--stage:#168f88"><div class="result-orb">🏆</div><span class="badge">MISSION COMPLETE</span><h1>นักสืบหินและแร่</h1><p class="big">พิชิตครบทั้ง 8 ด่านแล้ว!</p><p>คุณผ่านหินอัคนี หินตะกอน หินแปร และแร่สำคัญจากหลักฐานในภาพ</p><div class="complete-list">${STAGES.map(s=>`<span>✓ ด่าน ${s.id}</span>`).join("")}</div><div class="actions"><button class="primary" id="play-again">เริ่มภารกิจใหม่</button></div></section></main>`;
  document.querySelector("#play-again").addEventListener("click",resetProgress);
}

renderMap();
