// 

function setUp() {
	
	var playerOneRandomNumber = Math.floor(Math.random() * 6) + 1;

	var playerTwoRandomNumber = Math.floor(Math.random() * 6) + 1;
	
	
	var playerOneDiceImage = "images/dice"+playerOneRandomNumber+".png";
	
	var playerTwoDiceImage = "images/dice"+playerTwoRandomNumber+".png";


	document.querySelector(".img1").setAttribute("src", playerOneDiceImage);

	document.querySelector(".img2").setAttribute("src", playerTwoDiceImage);

	playerOneName = document.querySelectorAll(".dice p")[0]

	playerTwoName = document.querySelectorAll(".dice p")[1]
	playerOneName.style.backgroundColor = "white";
	playerTwoName.style.backgroundColor = "white";

// selecting the H1
	header = document.querySelector(".container h1");

	if (playerOneRandomNumber > playerTwoRandomNumber){

	header.textContent="player 1 WINS!!!"
	playerOneName.style.backgroundColor = "rgb(66, 255, 66)";
	playerTwoName.style.backgroundColor = "rgb(255, 75, 75)";

	} else if (playerOneRandomNumber < playerTwoRandomNumber){

		header.textContent="player 2 WINS!!!"
		playerOneName.style.backgroundColor = "rgb(255, 75, 75)";
		playerTwoName.style.backgroundColor = "rgb(66, 255, 66)";
	}
	else if (playerOneRandomNumber === playerTwoRandomNumber)(

		header.textContent="Draw"

	)

}



var playBtn = document.querySelector(".button").addEventListener("click", play)
console.log(playerOneRandomNumber);

function play() {
for (var i = 0; i < 7; i++) {
	setTimeout((i) => {

		

	}, 1000);
	setUp();

}
	


}














































/* to genrate a random number from 1 - 6*/
// 	const randomNumberOne = Math.floor(Math.random() * 6) + 1;
// 	const firstDiceImage = "images/dice" + randomNumberOne + ".png";
// 	document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// 	/*second dice*/
//     const randomNumberTwo = Math.floor(Math.random() * 6) + 1;
// 	const secondDiceImage = "images/dice" +randomNumberTwo+ ".png";
// 	document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);
	

// 	if (randomNumberOne === randomNumberTwo){ 
// 		document.querySelector("h1").textContent = "This is a DRAW!!!";
// 	}
// 	else  if (randomNumberOne > randomNumberTwo){ 
// 		document.querySelector("h1").textContent ="Player 2 WINS!!!";
// 	}

// 	else if (randomNumberOne < randomNumberTwo){
// 		document.querySelector("h1").textContent ="Player 1 WINS!!!";
// 	}
