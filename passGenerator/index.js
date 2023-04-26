const pass1El = document.getElementById("pass1-el")
const pass2El = document.getElementById("pass2-el")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomChar(){
    let chosen = Math.floor(Math.random() * characters.length)
    return characters[chosen]
}

function generatePass(){
    let pass1 = ""
    let pass2 = ""
    for(let i = 0; i < 15; i++){
        pass1 += randomChar()
        pass2 += randomChar()
    }
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}