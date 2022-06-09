const prompt = require("prompt-sync")({ sigint: true });
let Spinner = require("cli-spinner").Spinner;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const clipboard = require("copy-paste");

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
  generatedPassword = getPassword();
  let spinner = new Spinner("Generating password %s");
  spinner.setSpinnerString("|/-\\");
  spinner.start();

  await delay(3000);
  spinner.stop();

  console.log(`\n\nHere's your generated password: ${generatedPassword}`);

  console.log("\n\nShould I copy the password to your clipboard? (y/n)");

  decision = prompt(">> ");

  if (decision === "y") {
    let spinner = new Spinner("Copying to clipboard %s");
    spinner.setSpinnerString("|/-\\");
    spinner.start();

    await delay(2000);
    clipboard.copy(generatedPassword);

    spinner.stop();
    process.exit(0);
  } else {
    console.log("\n Ok! I wont copy it to the clipboard!");
    process.exit(0);
  }
}

loadingSpin();
