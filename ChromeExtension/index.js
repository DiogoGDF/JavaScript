const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const deleteMessage = document.getElementById("delete-message")
let myLeads = []
let clicked = false

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    list()
}

inputBtn.addEventListener("click", addToList)
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addToList();
  }
});

//deleteBtn.addEventListener("click", function(){})
deleteBtn.addEventListener("click", function(){
    if(!clicked){
        deleteBtn.classList.add("clicked")
        deleteMessage.textContent = "Click again to delete all"
        clicked = true
    }else{
        deleteBtn.classList.remove("clicked")
        deleteMessage.textContent = ""
        localStorage.clear();
        myLeads = [];
        list();
        clicked = false
    }
})

function addToList(){
    let listItem
    const usrInput = inputEl.value
    if (usrInput.startsWith("http") || usrInput.startsWith("https") || usrInput.startsWith("www.")) {
        listItem = `<li><a href='${usrInput}' target='_blank' rel='external'>${usrInput}</a></li>`
    } else {
        listItem = `<li>${usrInput}</li>`
    }
    myLeads.push(listItem)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    list()
}

function list(){
    const lista = myLeads.join("")
    ulEl.innerHTML = lista
}