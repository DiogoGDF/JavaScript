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
let dates = []

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
      month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      year = currentDate.getFullYear();
    }
    const activityDate = `${year}-${month}-${day}`
    const strDb = `${activityDate}|${activityStr}|${xpStr}`;
    activityEl.value = "";
    xpEl.value = "";
    dateEl.value = "";
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

function findDate(date){
  let low = 0;
  let high = dates.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (dates[mid] === date) {
      return -1;
    } else if (dates[mid] > date) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

function appendItemToHistory(itemValue){
  let itemId = itemValue[0]
  let itemName = itemValue[1]
  let arrItem = itemName.split('|');
  const activityDate = arrItem[0];
  const activityName = arrItem[1];
  const activityXP = arrItem[2];
  xp += parseInt(activityXP);
  updateProgressBar();
  const index = findDate(activityDate);
  if(index !== -1)
    dates.splice(index, 0, activityDate)

  const existingDateEl = document.querySelector(`#history-section h3[data-date='${activityDate}']`);
  if (!existingDateEl) {
    let newDateEl = document.createElement("h3");
    newDateEl.setAttribute('data-date', activityDate);
    newDateEl.textContent = activityDate;
    historyEl.append(newDateEl);
  } else {
    // If an existing date element is found, move it to the correct position
    const dateEls = document.querySelectorAll('#history-section h3');
    for (let i = 0; i < dateEls.length; i++) {
      if (dateEls[i] === existingDateEl) {
        if (index < i) {
          historyEl.insertBefore(existingDateEl, dateEls[index].previousElementSibling);
        } else if (index > i) {
          historyEl.insertBefore(existingDateEl, dateEls[index].nextElementSibling);
        }
        break;
      }
    }
  }
  const ulEl = existingDateEl ? existingDateEl.nextElementSibling : historyEl.lastElementChild;
  if (ulEl) {
    let newEl = document.createElement("li");
    newEl.textContent = `${activityName} | XP: ${activityXP}`
    ulEl.append(newEl);
  //let newEl = document.createElement("li");
  //newEl.textContent = `${activityName} | XP: ${activityXP}`
  //ulEl.append(newEl);
  //const ulEl = historyEl.children[index + 1].querySelector('ul');
  //let newEl = document.createElement("li")
  //let newDateEl = document.createElement("h3");
  //newDateEl.textContent = activityDate;
  //newEl.textContent = `${activityName} | XP: ${activityXP}`
  //historyEl.append(newDateEl);
  //historyEl.append(newEl);
  //console.log(dates)

  newEl.addEventListener("dblclick", function(){
    let exactLocationOfStoryInDB = ref(database, `historyXP/${itemId}`)
    remove(exactLocationOfStoryInDB)
    location.reload();
  })
  }
}

function clearList(){
  historyEl.innerHTML = "";
  dates = [];
  const dateEls = document.querySelectorAll('#history-section h3');
  dateEls.forEach(el => el.remove());
}

function start(){

}

onValue(historyInDB, function(snapshot){
  if (snapshot.exists()){
    let items = Object.entries(snapshot.val());
    clearList()
    for(let i = 0; i < items.length; i++){
        let currentItem = items[i]
        //document.addEventListener("DOMContentLoaded", function(){appendItemToHistory(currentItem)});
        appendItemToHistory(currentItem);
    }
  }else{
    clearList()
  }
})