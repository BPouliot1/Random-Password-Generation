// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=";
  let password = "";
  let allowedChars = "";
  letpassword = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if(length <= 0){
    return "(password length must be at least 8)"
   }
   if(allowedChars.length === 0){
    return "(password length must be at least 1)"
   }
   for(let i = 0; i < length; i ++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];

   }
  return password;
}

const passwordLength = 10
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
writePassword(password);
console.log("Write password: ${password}");
