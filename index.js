var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomDiceSrc = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomDiceSrc2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
if(randomNumber2 === randomNumber1){
    document.querySelector("h1").textContent = "Draw";
}