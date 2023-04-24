import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {databaseURL: "https://playground-c1cb0-default-rtdb.firebaseio.com/"};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const historyInDB = ref(database, "historyXP");

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
  const currentDate = new Date();
  const options = {day: '2-digit', month: '2-digit', year: '2-digit'};
  const dateInFormat = currentDate.toLocaleString('en-GB', options);
  const str = `<li>${dateInFormat}: ${atividadeStr} | XP:${xpStr}</li>`;
  const strDb = `${dateInFormat}: ${atividadeStr} | XP:${xpStr}`;
  atividadeEl.value = "";
  xpEl.value = "";
  historico.innerHTML += str;
  push(historyInDB, strDb)
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

function appendItemToHistory(itemValue){
    let itemId = itemValue[0]
    let itemName = itemValue[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemName
    historico.innerHTML += newEl;

    newEl.addEventListener("dblclick", function(){
        let exactLocationOfStoryInDB = ref(database, `shoppingList/${itemId}`)
        remove(exactLocationOfStoryInDB)
    })
}

onValue(historyInDB, function(snapshot){
    if (snapshot.exists()){
        let items = Object.entries(snapshot.val())
        clearList()
        for(let i = 0; i < items.length; i++){
            let currentItem = items[i]
            appendItemToHistory(currentItem)
        }
    }else{
        clearList()
    }
})