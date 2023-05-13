import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-c1cb0-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsmentsDB = ref(database, "endorsments")

const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("endo-list")
let input = ""

function clearInputField(){
    inputEl.value = ""
}

function clearList(){
    listEl.innerHTML = ""
}

function addToList(item){
    listEl.innerHTML += `<li>${item}</li>`
}

onValue(endorsmentsDB, function(snapshot){
    let endorsementsArray = Object.values(snapshot.val())
    clearList()
    for (let i = 0; i < endorsementsArray.length; i++){
        addToList(endorsementsArray[i])
    }
})

btnEl.addEventListener("click", function(){
    input = inputEl.value
    push(endorsmentsDB, input)
    clearInputField()
    //addToList(input)
})
