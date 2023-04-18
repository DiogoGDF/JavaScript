import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    //shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let newEl = document.createElement("li")
    newEl.textContent = itemValue[1]
    shoppingListEl.append(newEl)
}

function clearList(){
    shoppingListEl.innerHTML = ""
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearInputFieldEl()
})

onValue(shoppingListInDB, function(snapshot){
    let items = Object.entries(snapshot.val())
    clearList()
    for(let i = 0; i < items.length; i++){
        let currentItem = items[i]
        appendItemToShoppingListEl(currentItem)
    }
})