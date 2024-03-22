#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a number 
// 2) User input for guessing number
// 3) compare user input with computer generate number and show result
//const randomNumber =13;
// const randomNumber= maths.random()
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Can you guess the number?",
    }]);
if (answer.userGuessNumber === RandomNumber) {
    console.log("Congratulation!! Your Answer Is right");
}
else {
    console.log("Opps! Your Answer Is wrong");
}
