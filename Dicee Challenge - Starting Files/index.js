var randomNUmber1 = (Math.floor(Math.random()*6)) + 1;
// console.log(randomNUmber);
switch (randomNUmber1) {
    case 1 : document.querySelector(".img1").setAttribute("src","images/dice1.png");
             break;
    case 2 : document.querySelector(".img1").setAttribute("src","images/dice2.png");
             break;
    case 3 : document.querySelector(".img1").setAttribute("src","images/dice3.png");
             break;
    case 4 : document.querySelector(".img1").setAttribute("src","images/dice4.png");
             break;
    case 5 : document.querySelector(".img1").setAttribute("src","images/dice5.png");
             break;
    case 6 : document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

var randomNUmber2 = (Math.floor(Math.random()*6)) + 1;
// console.log(randomNUmber);
switch (randomNUmber2) {
    case 1 : document.querySelector(".img2").setAttribute("src","images/dice1.png");
             break;
    case 2 : document.querySelector(".img2").setAttribute("src","images/dice2.png");
             break;
    case 3 : document.querySelector(".img2").setAttribute("src","images/dice3.png");
             break;
    case 4 : document.querySelector(".img2").setAttribute("src","images/dice4.png");
             break;
    case 5 : document.querySelector(".img2").setAttribute("src","images/dice5.png");
             break;
    case 6 : document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(randomNUmber1 > randomNUmber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if(randomNUmber1 < randomNUmber2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}