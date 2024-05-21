#! /usr/bin/env node

//Number Guessing Game

import inquirer from "inquirer";

const computerMove = Math.floor(Math.random() * 5 + 1);

const result = await inquirer.prompt([
  {
    name: "userMove",
    type: "number",
    message: "Please enter a number between 1 to 5",
  },
]);

if (result.userMove === computerMove) {
  console.log("Congratulation! You enter Correct Number :)");
} else {
  console.log("Sorry, you enter wrong number :(");
}