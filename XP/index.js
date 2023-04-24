import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {databaseURL: "https://playground-c1cb0-default-rtdb.firebaseio.com/"};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const historyInDB = ref(database, "historyXP");

const progressBar = document.querySelector('.progress-bar');
const levelEl = document.getElementById("level-el");
const activityEl = document.getElementById("activity-el");
const xpEl = document.getElementById("xp-el");
const historyEl = document.getElementById("history-el");
const log = document.getElementById("log");

let lvl = 1;
let xp = 1;
let totLvl = 10000;
let percentage = xp/totLvl * 100;

function updateProgressBar() {
  percentage = xp/totLvl * 100;
  progressBar.style.width = percentage + '%';
  levelEl.textContent = `Level: ${lvl} (${xp}/${totLvl})`;
}
updateProgressBar(); 


function register(){
  const activityStr = activityEl.value;
  const xpStr = xpEl.value;
  if (activityStr !== "" && xpStr !== ""){
    const currentDate = new Date();
    const options = {day: '2-digit', month: '2-digit', year: '2-digit'};
    const dateInFormat = currentDate.toLocaleString('en-GB', options);
    const strDb = `${dateInFormat}|${activityStr}|${xpStr}`;
    activityEl.value = "";
    xpEl.value = "";
    push(historyInDB, strDb)
  }
}

log.addEventListener("click", function(event){
  event.preventDefault();
  register();
});
xpEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    register();
  }
});

function appendItemToHistory(itemValue){
    let itemId = itemValue[0]
    let itemName = itemValue[1]
    let arrItem = itemName.split('|');
    xp += parseInt(arrItem[2]);
    updateProgressBar();
    let newEl = document.createElement("li")
    newEl.textContent = itemName
    historyEl.append(newEl);

    newEl.addEventListener("dblclick", function(){
        let exactLocationOfStoryInDB = ref(database, `historyXP/${itemId}`)
        remove(exactLocationOfStoryInDB)
        location.reload();
    })
}

function clearList(){
  historyEl.innerHTML = "";
}

onValue(historyInDB, function(snapshot){
    if (snapshot.exists()){
        let items = Object.entries(snapshot.val());
        clearList()
        for(let i = 0; i < items.length; i++){
            let currentItem = items[i]
            appendItemToHistory(currentItem)
        }
    }else{
        clearList()
    }
})