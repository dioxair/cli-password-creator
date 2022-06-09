#!/usr/bin/env node

import inquirer from "inquirer";
import Spinner from "cli-spinner";
const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // await.sleep in js when
import clipboard from "copy-paste";

console.log("How long should the password be?");

let passwordLength = "";

const passwordLengthPrompt = await inquirer.prompt({
  name: "password_length",
  type: "input",
  message: ">> ",
  default() {
    return 25;
  },
});

passwordLength = passwordLengthPrompt.password_length;
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
  let generatedPassword = getPassword();
  let spinner = new Spinner.Spinner("Generating password %s");
  spinner.setSpinnerString("|/-\\");
  spinner.start();

  await delay(3000);
  spinner.stop();

  console.log(`\n\nHere's your generated password: ${generatedPassword}`);

  console.log("\n\nShould I copy the password to your clipboard? (y/n)");

  const decision = await inquirer.prompt({
    name: "decision",
    type: "input",
    message: ">> ",
    default() {
      return "y";
    },
  });

  if (decision.decision === "y") {
    let spinner = new Spinner.Spinner("Copying to clipboard %s");
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
