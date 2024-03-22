#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { name: "first_number", type: "number", message: "ENTER YOUR FIRST NUMBER" },
    {
        name: "second_number",
        type: "number",
        message: "enter your second number",
    },
    {
        message: "select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.first_number + answer.second_number);
}
else if (answer.operator === "substraction") {
    console.log(answer.first_number - answer.second_number);
}
else if (answer.operator === "multiplication") {
    console.log(answer.first_number * answer.second_number);
}
else if (answer.operator === "division") {
    console.log(answer.first_number / answer.second_number);
}
else {
    ("please select correct operator");
}
