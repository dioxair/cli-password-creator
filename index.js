const prompt = require("prompt-sync")({ sigint: true });

console.log("How long should the password be?");

let passwordLength = prompt(">> ");
passwordLength = Number(passwordLength);
