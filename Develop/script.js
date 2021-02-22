//Array of characters that random genertor will choose from
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]


// Write generated password to the #password input
function writePassword() {

  //Creates loop
  while (true) {
    //Must be a numeric character
    var passwordLength = parseInt(prompt("Please provide character length between 8-128"));
    //Must meet special criteria to continue to confirm windows
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please enter numeric character between 8 and 128");
    } else {
      break
    }
  }

  //Confirm windows for password criteria
  var confirmLower = confirm("Select OK to include lowercase characters / Select cancel to exclude lowercase characters")
  var confirmUpper = confirm("Select OK to include uppercase characters / Select cancel to exclude uppercase characters")
  var confirmNumeric = confirm("Select OK to include numeric characters / Select cancel to exclude numeric characters")
  var confirmSpecial = confirm("Select OK to include special characters / Select cancel to exclude special characters")

  //Checks to make sure selection was made, if it was not, then restarts function
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Must select at least one option");
    return;
  }

  //Joins confirm windows with empty array if the selection was true
  var characterChoice = []
  if (confirmLower) characterChoice = characterChoice.concat(lowerCase)
  if (confirmUpper) characterChoice = characterChoice.concat(upperCase)
  if (confirmNumeric) characterChoice = characterChoice.concat(numeric)
  if (confirmSpecial) characterChoice = characterChoice.concat(specialCharacters)

  //Creates randomly generated password and stores it in empty array
  var generatePassword = []
  for (var i = 0; i < passwordLength; i++)
    generatePassword = generatePassword + characterChoice[Math.floor(Math.random() * characterChoice.length)]

  //Links variables to allow interaction between HTML and JS
  var password = generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);