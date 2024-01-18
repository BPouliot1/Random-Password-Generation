//Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var symbolsChars = "!@#$%^&*()_+-=";
let password = "";
let allowedChars = "";

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
  var passwordLength = window.prompt("Please insert password length between 8-128");
  if(typeof passwordLength === "number") {
  }
    if(passwordLength < 8 || passwordLength > 128) {
  passwordLength = 8;
  window.alert("no acceptable number chosen, using default number");
    } else {
      var passwordLength = passwordLengthInput;
      return;
    }
  
generateBtn.addEventListener("click", writePassword,);

  writePassword(password);
  console.log("Write password: ${password}");

var upperCase = window.confirm("Use Uppercase letters");
if(upperCase) {
  window.alert("Uppercase letters included");
}else{
  window.alert("Uppercase letters not included");
}
var lowerCase = window.confirm("Use Lowercase letters");
if(lowerCase) {
  window.alert("Lowercase letters included");
}else{
  window.alert("Lowercase letters not included");
}

var numbers = window.confirm("Use Numbers");
if(numbers) {
  window.alert("Numbers included");
}else{
  window.alert("Numbers not included");
}

var symbols = window.confirm("Use Symbols");
if(symbols) {
  window.alert("Symbols included");
}else{
  window.alert("Symbols not included");
}

console.log("user selection = " + userSelection);
if (userSelection.length === 0)
return;

  for(let i = 0; i < length; i ++){
    var randomIndex = Math.floor(Math.random() * userSelection);
    var random = userSelection.charAt(randomIndex);
  }}
