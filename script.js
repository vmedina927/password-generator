// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`','{', '|', '}', '~', '`'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Function that will give user options and conditional statements which meet requirements in the criteria.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length of at least 8 characters and no more than 128 characters");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var askUpperCase = confirm("Do you want your password to include uppercase letters?");
    var askLowerCase = confirm("Do you want your password to include lowercase letters?");
    
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askSpecial: askSpecial,
      askUpperCase: askUpperCase,
      askLowerCase: askLowerCase,
      
    }

    if ((length , 8)||(length > 128))
    alert("Choose character between 8 and 128");
    else if ((!askNumbers)&&(!askSpecial)&&(!askUpperCase)&&(!askLowerCase))
    alert("Must chose at least one character.");
    else
    isValid = true;

  }
  while(!isValid);
  return responses;
}

// Function will come together with user response and creates results which will give a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }

  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
  
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }

  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }

  console.log(finalPassword)
  
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);