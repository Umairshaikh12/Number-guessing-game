#! /usr/bin/env node


import inquirer from "inquirer"

// computer will generate a random number . done
// user input for guessing number . done
//compare user num with computer generated num . done


const randomnumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([

{ name: "userguessednumber", 
  type: "number",
  message: "Please guess a number between 1-10: ",
},
]);

if(answers.userguessednumber === randomnumber){
    console.log("congratulation you guessed right number.");
} else {
    console.log("you guessed wrong number");
}; 
