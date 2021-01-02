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

function calculateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
}

calculateSecretNumber();
