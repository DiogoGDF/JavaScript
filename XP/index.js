const progressBar = document.querySelector('.progress-bar');
const levelEl = document.getElementById("level-el");
const testEl = document.getElementById("test");

function updateProgressBar(percentage) {
  progressBar.style.width = percentage + '%';
}

let lvl = 20;
let xp = 154;
let totLvl = 1000;
let percentage = xp/totLvl;
percentage = percentage * 100;
updateProgressBar(percentage); 

levelEl.textContent = `Level: ${lvl} (${xp}/${totLvl})`;
testEl.textContent = i;
