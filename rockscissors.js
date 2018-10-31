var userScore = 0;
var computerScore = 0;
var userDisplay = document.querySelector("#userscore");
var computerDisplay = document.querySelector("#computerscore");
var buttons = document.querySelectorAll(".button");
var choiceMade = document.querySelector(".result");

var playChoices = ['rock', 'paper', 'scissors'];
var userChoice = '';
var computerChoice = playChoices[Math.floor(Math.random() * playChoices.length)];

buttons[0].addEventListener("click", function() {
	userChoice = playChoices[0];
	computerChoice = playChoices[Math.floor(Math.random() * playChoices.length)];
	console.log(userChoice);
	console.log(computerChoice);
	if (computerChoice === playChoices[1]) {
		computerScore += 1;
		computerDisplay.textContent = computerScore;
		choiceMade.textContent = "Computer Wins!";

	} else if (computerChoice === playChoices[0]) {
		choiceMade.textContent = "You hit the same choice!";
	} else {
		userScore += 1;
		userDisplay.textContent = userScore;
		choiceMade.textContent = "Human Wins!";
	}
});

buttons[1].addEventListener("click", function() {
	userChoice = playChoices[1];
	computerChoice = playChoices[Math.floor(Math.random() * playChoices.length)];
	console.log(userChoice);
	console.log(computerChoice);
	if (computerChoice === playChoices[0]) {
		userScore += 1;
		userDisplay.textContent = userScore;
		choiceMade.textContent = "Human Wins!";

	} else if (computerChoice === playChoices[1]) {
		choiceMade.textContent = "You hit the same choice!";
	} else {
		computerScore += 1;
		computerDisplay.textContent = computerScore;
		choiceMade.textContent = "Computer Wins!";
	}

});

buttons[2].addEventListener("click", function() {
	userChoice = playChoices[2];
	computerChoice = playChoices[Math.floor(Math.random() * playChoices.length)];
	console.log(userChoice);
	console.log(computerChoice);
	if (computerChoice === playChoices[0]) {
		computerScore += 1;
		computerDisplay.textContent = computerScore;
		choiceMade.textContent = "Computer Wins!";

	} else if (computerChoice === playChoices[1]) {
		userScore += 1;
		userDisplay.textContent = userScore;
		choiceMade.textContent = "Human Wins!";
	} else {
		choiceMade.textContent = "You hit the same choice!";

	}

});