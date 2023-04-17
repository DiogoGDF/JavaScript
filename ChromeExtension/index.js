const tabBtn = document.getElementById("tab-btn")
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

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        addToList(tabs[0].url)
    })

})
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const usrInput = inputEl.value
    addToList(usrInput);
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

function addToList(newItem){
    let listItem
    if (newItem.startsWith("http") || newItem.startsWith("https") || newItem.startsWith("www.")) {
        listItem = `<li><a href='${newItem}' target='_blank' rel='external'>${newItem}</a></li>`
    } else {
        listItem = `<li>${newItem}</li>`
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