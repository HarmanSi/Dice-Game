

function playGame(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomImageSource = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Harry Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Leo loses! 🚩";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
}


var button = document.getElementsByTagName("button");

button[0].setAttribute('onClick', "playGame()");
