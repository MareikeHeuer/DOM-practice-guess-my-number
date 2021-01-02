'use strict';

// Game logic
// Check if user input is number - if npt change message to : not valid. try again
// Check if input is secretNumber - change message to you won
// Check it input is bigger than secretNumber - change message to too high
// Check if input is smaller than secretNumber - change message to too low

// Decrease score by 1 whenever user input is wrong
// When score reaches 0, change message to you lost and display 0
// Set highscore and display new highscore when user wins

// if user won
// change body background color to green and increase size of secretNumber field

// Select again button and add EventListener - restore all variables like at the beginning of the gama

// Calculate a secretNumber (Between 1 and 20)
// Display secretNumber in console
// Add eventListener to check button and display user input in the console
// The user input has to be converted to a number

let secretNumber = 0;
let score = 20;

function calculateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
}

calculateSecretNumber();

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess < 1 || guess > 20) {
    displayMessage('⛔️ Invalid! Try again with a number between 1 and 20!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You won!');
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('📈 Too high!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost!');
      displayScore(0);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost!');
      displayScore(0);
    }
  }
});
