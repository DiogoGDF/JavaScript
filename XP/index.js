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
const dateEl = document.getElementById("date-el");
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
    let day;
    let month;
    let year;
    if(dateEl.value !== ""){
      let dateArr = dateEl.value.split('-');
      day = dateArr[2];
      month = dateArr[1];
      year = dateArr[0];
    } else {
      const currentDate = new Date();
      day = currentDate.getDate().toString().padStart(2, '0');
      month = currentDate.getMonth().toString().padStart(2, '0');
      year = currentDate.getFullYear();
    }
    const activityDate = `${day}-${month}-${year}`
    const strDb = `${activityDate}|${activityStr}|${xpStr}`;
    activityEl.value = "";
    xpEl.value = "";
    push(historyInDB, strDb);
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