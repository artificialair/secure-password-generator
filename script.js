// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "1234567890"
var specialCharacters = "!\"#$%&'()*+,-./\\:;<=>?@[\]^_`{|}~"

function generatePassword() {
  var password = "";

  var passwordLength;
  // !passwordLength returns true only if the password length is not null
  while (!passwordLength) {
    var lengthInput = prompt("How long would you like your password to be?");

    // If the cancel button is clicked, we want to cancel the password generating process.
    if (lengthInput === null) {
      return;
    }

    // If anything other than a number is entered, returns a unique error message. (I'm sure there are more appropriate ways to do this.)
    if (lengthInput !== parseInt(lengthInput)) {
      alert("You must input a valid number!")
      continue;
    }

    // Length checks
    if (lengthInput < 8) {
      alert("That is too short!");
      continue;
    }
    if (lengthInput > 128) {
      alert("That is too long!");
      continue;
    }

    passwordLength = lengthInput;
  }

  var validCharacters = "";

  while (password.length < passwordLength) {
    var randomCharacter = Math.floor(Math.random() * validCharacters.length)
    password += validCharacters[randomCharacter]
  }
  
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
