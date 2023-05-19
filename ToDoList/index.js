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

function clearInputField(){
    inputEl.value = ""
}

function clearList(){
    listEl.innerHTML = ``
}

function addToList(item){
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("dblclick", function(){
        let locationInDB = ref(database, `tasks/${itemID}`)
        remove(locationInDB)
    })
    listEl.append(newEl)
}

onValue(tasksDB, function(snapshot){
    let tasksArray = Object.entries(snapshot.val())
    clearList()

    for (let i = 0; i < tasksArray.length; i++){
        let currentItem = tasksArray[i]
        addToList(currentItem)
    }
})

btnEl.addEventListener("click", function(){
    input = inputEl.value
    push(tasksDB, input)
    clearInputField()
})
