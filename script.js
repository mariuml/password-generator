// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Global variables

var passwordLength;
var lowercaseBoolean;
var uppercaseBoolean;
var numericCharactersBoolean;
var specialCharactersBoolean;
var randomPasswordArray = [];
var randomArraySelection;

// Function to prompt user for password options - objects
function getPasswordOptions() {
  passwordLength = prompt("How many characters do you need in the password?"); 

  if (passwordLength <= 10 || passwordLength >= 64) {
    alert("Password must be between 10-64 characters");
    passwordLength = prompt("How many characters do you need in the password?");
  }

  lowercaseBoolean = confirm(
    "Does your password have to contain lowercase letters?"
  );
  uppercaseBoolean = confirm(
    "Does your password have to contain uppercase letters?"
  );
  numericCharactersBoolean = confirm(
    "Does your password have to contain numeric characters?"
  );
  specialCharactersBoolean = confirm(
    "Does your password have to contain special characters?"
  );
  
  // if statement to choose at least one character type - loops while all conditions are false
// BUG: While loop logic does not work
  
if 
(
  (lowercaseBoolean === false &&
    uppercaseBoolean === false &&
    numericCharactersBoolean === false &&
    specialCharactersBoolean === false) 
) 
  {
    alert("Please select at least one character type");
    return null;
  
  }
}


// Function for getting a random element from an array

function getRandom(arr) {
  // Get a random number between 0-total length of the given array
  var arrayNumber = Math.floor(Math.random() * (arr.length - 0) + 0);
  // Use the random number to find the index in that array
  randomArraySelection = arr[arrayNumber];
  return randomArraySelection;

}


// MAIN FUNCTION: GENERATES PASSWORD (on click)
function generatePassword() {
  getPasswordOptions();
  // Use password options to create a new array that fulfils the criteria
  // for loop for the length of the password - go through all criteria and add to an array (.map?)

  for (i = 0; i < passwordLength; i++) {
    if (randomPasswordArray.length >= passwordLength){
  break;}
    
    if (lowercaseBoolean) {
      randomPasswordArray.push(getRandom(lowerCasedCharacters));
      
      if (uppercaseBoolean) {
        randomPasswordArray.push(getRandom(upperCasedCharacters));
        
      }
      if (numericCharactersBoolean) {
        randomPasswordArray.push(getRandom(numericCharacters));

      }
      if (specialCharactersBoolean) {
        randomPasswordArray.push(getRandom(specialCharacters));
      }
    }

  }
};

// DO NOT TOUCH - ALREADY WORKING CODE

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// DO NOT TOUCH - ALREADY WORKING CODE

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPasswordArray.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
