#! /usr/bin/env node
//SHABANG


import inquirer from "inquirer";

//Asking Questions from Users through Inquirer

let answers = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one Operator to perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statments if-Else 

if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
}

if (answers.operator === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
}

if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
}

if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
}
