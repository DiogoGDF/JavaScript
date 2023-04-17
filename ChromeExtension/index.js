const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []
//let count = 0

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
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