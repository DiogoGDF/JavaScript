function plus(n, which){
    let element = document.getElementById(which);
    element.textContent = (n + parseInt(element.textContent));
}