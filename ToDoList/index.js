import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-c1cb0-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const tasksDB = ref(database, "tasks")

const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("endo-list")
let input = ""
let list = ``

function clearInputField(){
    inputEl.value = ""
}

function clearList(){
    list = ``
}

function addToList(item){
    list += `<li>${item}</li>`
}

onValue(tasksDB, function(snapshot){
    let tasksArray = Object.entries(snapshot.val())
    clearList()

    for (let i = 0; i < tasksArray.length; i++){
        let currentItem = tasksArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        addToList(currentItemValue)
    }
    listEl.innerHTML = list
})

btnEl.addEventListener("click", function(){
    input = inputEl.value
    push(tasksDB, input)
    clearInputField()
    //addToList(input)
})
