"use strict";

const ROCKS = {
  granite: { thai:"หินแกรนิต", english:"granite", image:"rocks/granite.jpg", type:"intrusive", clue:"สีค่อนข้างอ่อน เห็นผลึกหยาบหลายเม็ดประสานกัน และมักพบควอตซ์" },
  gabbro: { thai:"หินแกบโบร", english:"gabbro", image:"rocks/gabbro.jpg", type:"intrusive", clue:"สีเข้ม แต่ยังเห็นเม็ดผลึกหยาบประสานกันอย่างชัดเจน" },
  basalt: { thai:"หินบะซอลต์", english:"basalt", image:"rocks/basalt.jpg", type:"extrusive", clue:"มีพื้นเนื้อละเอียดสีเข้ม และอาจเห็นผลึกแร่สีขาวขนาดใหญ่ประปราย" },
  obsidian: { thai:"หินออบซิเดียน", english:"obsidian", image:"rocks/obsidian.jpg", type:"extrusive", clue:"มันวาวคล้ายแก้ว ไม่มีผลึกที่มองเห็นชัด และแตกเป็นรอยโค้ง" },
  pumice: { thai:"หินพัมมิซ", english:"pumice", image:"rocks/pumice.jpg", type:"extrusive", clue:"มีรูพรุนจำนวนมาก ผนังฟองบาง สีค่อนข้างอ่อน และน้ำหนักเบา" },
  scoria: { thai:"หินสคอเรีย", english:"scoria", image:"rocks/scoria.jpg", type:"extrusive", clue:"มีรูพรุนผนังหนากว่าพัมมิซ สีเข้มหรือแดงคล้ำ และค่อนข้างหนักกว่า" },
};

const TYPES = {
  intrusive:"หินอัคนีแทรกซอน (intrusive igneous rock)",
  extrusive:"หินอัคนีพุ (extrusive igneous rock)",
  sedimentary:"หินตะกอน (sedimentary rock)",
  metamorphic:"หินแปร (metamorphic rock)",
  mineral:"แร่เดี่ยว (single mineral)",
};

const ROCK_KEYS = Object.keys(ROCKS);
const MODE_LABELS = { name:"ทายชื่อหิน", clue:"ชี้หลักฐาน", type:"จำแนกชนิด" };
const LETTERS = ["A","B","C","D","E"];
const app = document.querySelector("#app");

function seededShuffle(items, seed) {
  const output = [...items];
  let state = seed >>> 0;
  for (let i = output.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function makeBlueprint() {
  const pairs = ROCK_KEYS.flatMap((rock) => ["name","clue","type"].map((mode) => ({ rock, mode })));
  const remaining = seededShuffle([...pairs, ...pairs, ...seededShuffle(pairs, 2569).slice(0, 14)], 13713);
  const arranged = [];
  while (remaining.length) {
    const previousRock = arranged.at(-1)?.rock;
    const nextIndex = remaining.findIndex((item) => item.rock !== previousRock);
    arranged.push(remaining.splice(nextIndex < 0 ? 0 : nextIndex, 1)[0]);
  }
  return arranged;
}

function makeQuestions() {
  return makeBlueprint().map(({rock, mode}, position) => ({
    rock,
    mode,
    prompt: mode === "name"
      ? `ภาพที่ ${position + 1}: หินในภาพนี้คืออะไร?`
      : mode === "clue"
        ? `ภาพที่ ${position + 1}: ข้อใดเป็นหลักฐานที่ช่วยยืนยันชื่อหินในภาพ?`
        : `ภาพที่ ${position + 1}: หินในภาพจัดอยู่ในกลุ่มใด?`,
  }));
}

const QUESTIONS = makeQuestions();
let index = 0;
let selected = null;
let score = 0;
let finished = false;

function currentAnswer(question) {
  return question.mode === "type" ? ROCKS[question.rock].type : question.rock;
}

function makeOptions(question) {
  const correct = currentAnswer(question);
  const seed = 9001 + index * 131;
  const pool = question.mode === "type" ? Object.keys(TYPES) : ROCK_KEYS;
  const distractors = seededShuffle(pool.filter((value) => value !== correct), seed).slice(0, 4);
  return seededShuffle([correct, ...distractors], seed + 97);
}

function optionLabel(question, value) {
  if (question.mode === "name") return `${ROCKS[value].thai} (${ROCKS[value].english})`;
  if (question.mode === "clue") return ROCKS[value].clue;
  return TYPES[value];
}

function explanation(question) {
  const rock = ROCKS[question.rock];
  const name = `${rock.thai} (${rock.english})`;
  if (question.mode === "type") return `${name} เป็น${TYPES[rock.type]} เพราะ ${rock.clue}`;
  return `${name} จำแนกได้จากลักษณะเด่น: ${rock.clue}`;
}

function resultMessage() {
  if (score >= 45) return "ยอดเยี่ยมมาก — คุณจำแนกหินจากภาพและลักษณะเด่นได้แม่นยำ";
  if (score >= 35) return "ทำได้ดี — ลองเล่นซ้ำอีกครั้งเพื่อให้จำชื่อและศัพท์ภาษาอังกฤษได้คล่องขึ้น";
  return "ลองเล่นอีกครั้งได้เลย การพบภาพเดิมในคำถามหลายรูปแบบจะช่วยให้จำได้แม่นขึ้น";
}

function renderFinish() {
  app.innerHTML = `<main class="app"><section class="finish card"><span class="badge">จบด่าน 50</span><h1>นักสืบหินอัคนี!</h1><p class="result">คุณได้ <strong>${score} / 50</strong> คะแนน</p><p>${resultMessage()}</p><button class="primary" id="restart">เล่นใหม่อีกครั้ง</button></section></main>`;
  document.querySelector("#restart").addEventListener("click", restart);
}

function render() {
  if (finished) return renderFinish();
  const question = QUESTIONS[index];
  const rock = ROCKS[question.rock];
  const correct = currentAnswer(question);
  const options = makeOptions(question);
  const progress = Math.round(((index + 1) / QUESTIONS.length) * 100);
  app.innerHTML = `<main class="app"><section class="shell">
    <header><div><p class="eyebrow">VISUAL ROCK LAB · อายุ 13 ปีขึ้นไป</p><h1>นักสืบหินอัคนี <em>50 ด่าน</em></h1><p class="subtitle">มองภาพ → ชี้หลักฐาน → บอกชื่อหิน</p></div><div class="score" aria-label="คะแนนปัจจุบัน">⭐ ${score} คะแนน</div></header>
    <div class="progress-label"><span>ด่าน ${index + 1} / ${QUESTIONS.length}</span><span>${progress}%</span></div>
    <div class="track" role="progressbar" aria-valuemin="1" aria-valuemax="50" aria-valuenow="${index + 1}"><div style="width:${progress}%"></div></div>
    <section class="game card">
      <div class="photo-wrap"><img src="${rock.image}" alt="ภาพหินสำหรับคำถามข้อที่ ${index + 1}" /><span class="photo-label">ดูภาพให้ละเอียด</span></div>
      <div class="question"><span class="badge">${MODE_LABELS[question.mode]}</span><h2>${question.prompt}</h2><p>เลือกคำตอบที่เหมาะสมที่สุดเพียง 1 ข้อ</p>
        <div class="choices">${options.map((option, optionIndex) => {
          const state = selected === null ? "" : option === correct ? "correct" : option === selected ? "wrong" : "";
          return `<button class="choice ${state}" data-value="${option}" ${selected === null ? "" : "disabled"}><b>${LETTERS[optionIndex]}</b><span>${optionLabel(question, option)}</span></button>`;
        }).join("")}</div>
        <div id="feedback" aria-live="polite">${selected === null ? "" : `<div class="feedback ${selected === correct ? "good" : "try"}"><strong>${selected === correct ? "ถูกต้อง!" : "ยังไม่ถูก ลองจำภาพนี้ไว้อีกครั้ง"}</strong><p>${explanation(question)}</p></div><button class="primary next" id="next">${index === QUESTIONS.length - 1 ? "ดูคะแนน" : "ข้อต่อไป →"}</button>`}</div>
      </div>
    </section>
    <aside class="memory"><strong>เคล็ดจำภาพ:</strong> แกรนิต/แกบโบร = ผลึกหยาบ · บะซอลต์ = พื้นเนื้อละเอียด · ออบซิเดียน = คล้ายแก้ว · พัมมิซ/สคอเรีย = รูพรุน</aside>
  </section></main>`;
  document.querySelectorAll(".choice").forEach((button) => button.addEventListener("click", () => choose(button.dataset.value)));
  document.querySelector("#next")?.addEventListener("click", next);
}

function choose(value) {
  if (selected !== null) return;
  selected = value;
  if (value === currentAnswer(QUESTIONS[index])) score += 1;
  render();
}

function next() {
  if (selected === null) return;
  if (index === QUESTIONS.length - 1) finished = true;
  else index += 1;
  selected = null;
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}

function restart() {
  index = 0;
  selected = null;
  score = 0;
  finished = false;
  render();
}

render();
