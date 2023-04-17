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
    myLeads.push(`<li>${inputEl.value}</li>`)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    list()
}

function list(){
    let lista = ""
    for(let i = 0; i < myLeads.length; i++)
        lista += myLeads[i]
    ulEl.innerHTML = lista
}