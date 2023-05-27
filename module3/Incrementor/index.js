let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
/*
function save() {
    var currentTime = new Date()
    let hours = currentTime.getHours()
    let countStr = "\n" + count + " at: " + hours + "h"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
*/
function save() {
    var currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let countStr = count + " at " + hours + ":" + minutes + "<br>"
    saveEl.innerHTML +=  countStr
    countEl.textContent = 0
    count = 0
}
