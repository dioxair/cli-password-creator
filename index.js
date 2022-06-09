const prompt = require("prompt-sync")({ sigint: true });
let Spinner = require("cli-spinner").Spinner;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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

async function loadingSpin() {
  let spinner = new Spinner("Generating password %s");
  spinner.setSpinnerString("|/-\\");
  spinner.start();

  await delay(3000);
  spinner.stop();

  console.log(`\n\nHere's your generated password: ${getPassword()}`);
}

loadingSpin();
