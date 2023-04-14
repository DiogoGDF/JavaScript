let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")
//document.getElementById("num1-el").textContent = num1
//document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

function add(){
    console.log("add")
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    sum.textContent = n1+ " + "+n2 + " = " + (n1 + n2)
}
function subtract(){
    console.log("sub")
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    sum.textContent = n1+ " - "+n2 + " = " + (n1 - n2)
}
function divide(){
    console.log("div")
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    sum.textContent = n1+ " / "+n2 + " = " + (n1 / n2)
}
function multiply(){
    console.log("mult")
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    sum.textContent = n1+ " * "+n2 + " = " + (n1 * n2)
}
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



