const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []
let count = 0

inputBtn.addEventListener("click", addToList)
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addToList();
  }
});

function addToList(){
    myLeads.push("<li>" + inputEl.value + "</li>")
    inputEl.value = ""
    list()
}

function list(){
    ulEl.innerHTML += myLeads[count++]
}