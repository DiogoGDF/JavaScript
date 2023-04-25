function plus(n, which){
    let element = document.getElementById(which);
    element.textContent = (n + parseInt(element.textContent));
}

function reset(){
    document.getElementById('home').textContent = 0
    document.getElementById('guest').textContent = 0
}