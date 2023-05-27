const home = document.getElementById('home')
const guest = document.getElementById('guest')
const homeScore = document.getElementsByClassName('scoreH')
const guestScore = document.getElementsByClassName('scoreG')

function plus(n, which){
    let element = document.getElementById(which);
    element.textContent = (n + parseInt(element.textContent));
    leader();
}

function reset(){
    home.textContent = 0;
    guest.textContent = 0;
    leader();
}

function leader(){
    let n1 = home.textContent;
    let n2 = guest.textContent;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(n1 > n2){
        homeScore[0].classList.add('highlight');
        guestScore[0].classList.remove('highlight');
    }else if(n2 > n1){
        guestScore[0].classList.add('highlight');
        homeScore[0].classList.remove('highlight');
    } else {
        homeScore[0].classList.remove('highlight');
        guestScore[0].classList.remove('highlight');
    }
}