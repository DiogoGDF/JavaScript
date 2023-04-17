const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []
let count = 0

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //console.log(myLeads)
    list()
})

function list(){
    ulEl.innerHTML += "<li>"+myLeads[count++]+"</li>"
}