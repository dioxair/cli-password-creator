const prompt = require("prompt-sync")({ sigint: true });

console.log("How long should the password be?");

let passwordLength = prompt(">> ");
passwordLength = Number(passwordLength);

function getPassword() {
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    password += values.charAt(
      Math.floor(Math.random() * Math.floor(values.length - 1))
    );
  }

  return password;
}
