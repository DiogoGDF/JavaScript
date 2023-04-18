import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-3c2e8-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

function clearInputFieldEl(){
    inputFieldEl.value = ""

}

function appendItemToShoppingListEl(itemValue){
    let itemId = itemValue[0]
    let itemName = itemValue[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemName
    shoppingListEl.append(newEl)

    newEl.addEventListener("dblclick", function(){
        let exactLocationOfStoryInDB = ref(database, `shoppingList/${itemId}`)
        remove(exactLocationOfStoryInDB)
    })
}

function clearList(){
    shoppingListEl.innerHTML = ""
}

function addFromInput(){
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearInputFieldEl()
}

addButtonEl.addEventListener("click", addFromInput)
inputFieldEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    //const usrInput = inputEl.value
    addFromInput()
  }
})

onValue(shoppingListInDB, function(snapshot){
    if (snapshot.exists()){
        let items = Object.entries(snapshot.val())
        clearList()
        for(let i = 0; i < items.length; i++){
            let currentItem = items[i]
            appendItemToShoppingListEl(currentItem)
        }
    }else{
        clearList()
    }
})