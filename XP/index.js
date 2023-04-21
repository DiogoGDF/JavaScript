const progressBar = document.querySelector('.progress-bar');
const levelEl = document.getElementById("level-el");
const testEl = document.getElementById("test");
const atividadeEl = document.getElementById("atividade-el");
const xpEl = document.getElementById("xp-el");
const historico = document.getElementById("historico");
const log = document.getElementById("log");

function updateProgressBar(percentage) {
  progressBar.style.width = percentage + '%';
}

let lvl = 1;
let xp = 1;
let totLvl = 10;
let percentage = xp/totLvl * 100;
updateProgressBar(percentage); 

levelEl.textContent = `Level: ${lvl} (${xp}/${totLvl})`;
//testEl.textContent = i;

function cadastrar(){
  const atividadeStr = atividadeEl.value;
  const xpStr = xpEl.value;
  const str = `<li>${atividadeStr} | XP:${xpStr}</li>`;
  atividadeEl.value = "";
  xpEl.value = "";
  historico.innerHTML += str
}

log.addEventListener("click", function(event){
  event.preventDefault();
  cadastrar();
});
xpEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cadastrar();
  }
});
