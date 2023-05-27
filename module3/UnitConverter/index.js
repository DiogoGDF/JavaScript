/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// const btn = document.getElementById("btn")
const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

function lengthCv(num){
    const mt = 3.281
    const feet = (num*mt).toFixed(3)
    const meters = (num/mt).toFixed(3)
    const ret = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    length.textContent = ret
}
function volumeCv(num){
    const lt = 3.785
    const gallon = (num/lt).toFixed(3)
    const liter = (num*lt).toFixed(3)
    const ret = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`
    volume.textContent = ret
}
function massCv(num){
    const kgm = 2.204
    const p = (num*kgm).toFixed(3)
    const kg = (num/kgm).toFixed(3)
    const ret = `${num} kilograms = ${p} pounds | ${num} pounds = ${kg} kilograms`
    mass.textContent = ret
}

function convert(){
    const num = input.value
    lengthCv(num)
    volumeCv(num)
    massCv(num)
}