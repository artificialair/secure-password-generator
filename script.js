// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "1234567890"
var specialCharacters = "!\"#$%&'()*+,-./\\:;<=>?@[\]^_`{|}~"

function generatePassword() {
  var password = "";

  var lengthInput = 12;

  var validCharacters = lowercaseLetters;

  while (password.length < lengthInput) {
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
