let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "dice" + randomNumber1 + ".png";

let dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "dice" + randomNumber2 + ".png";

let dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2) { 
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}