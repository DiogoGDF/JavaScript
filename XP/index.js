const progressBar = document.querySelector('.progress-bar');
const levelEl = document.getElementById("level-el");
const testEl = document.getElementById("test");

function updateProgressBar(percentage) {
  progressBar.style.width = percentage + '%';
}

let lvl = 1;
let xp = 1;
let totLvl = 10;
let percentage = xp/totLvl * 100;
updateProgressBar(percentage); 

levelEl.textContent = `Level: ${lvl} (${xp}/${totLvl})`;
testEl.textContent = i;
