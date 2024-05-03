#! /usr/bin/env node

import inquirer from "inquirer";
let mybalance = 10000; // Dollar
let myPin = 1234;
let pinAnswere = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
//  12345 === 1234 = False
if (pinAnswere.pin === myPin) {
    console.log("correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operations",
        message: "please select one option",
        type: "list",
        choices: ["withDraw", "checkBalance"],
    }
]);
console.log(operationAns);
if (operationAns.operations === "withDraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    // =, -= , +=
    mybalance -= amountAns.amount;
    console.log("my remaining balance is: " + mybalance);
}
else if (operationAns.operations === "checkBalance") {
    console.log("Your balance is : " + mybalance);
}
;
