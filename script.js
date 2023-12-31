// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of your password (between 8 and 128 characters):"));
  
  if ((isNaN)(length) || length < 8 || length > 128) {

    alert("Please enter a valid length between 8 and 128.");
    return getPasswordOptions();
  }
  var isLowercase = confirm("Do you wish to include lowercase characters?");
  var isUppercase = confirm("Do you wish to include uppercase characters?");
  var isNumeric = confirm("Do you wish to include numeric characters?");
  var isSpecial = confirm("Do you wish to include special characters?");

  if (!(isLowercase || isUppercase || isNumeric || isSpecial)) {
    alert("You must select at least one character type.");
    
    return getPasswordOptions();
  }
  return {
    length,
    isLowercase,
    isUppercase,
    isNumeric,
    isSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomCharacter = Math.floor(Math.random() * arr.length);
  return arr[randomCharacter];
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var allCharacters = [];

  if (passwordOptions.isLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (passwordOptions.isUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }
  if (passwordOptions.isNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (passwordOptions.isSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  var generatedPassword = "";
    for (var i = 0; i < passwordOptions.length; i++) {
      var randomChar = getRandom(allCharacters);
      generatedPassword += randomChar;
    }
  
    return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);