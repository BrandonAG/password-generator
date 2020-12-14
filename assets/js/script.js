// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
var uppercase_chars = lowercase_chars.toUpperCase();
var numeric_chars = "0123456789";
var special_chars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = ""
  var available_chars = "";
  var password_length = window.prompt("Length of password? (minimum: 8; maximum: 128)")
  while (true) {
    if (isNaN(password_length) || password_length < 8 || password_length > 128) {
      password_length = window.prompt("Invalid length. Please enter a password length greater than 0 and less than 129.")
    }
    break
  }
  var lowercase_select = window.confirm("Include lowercase characters?");
  var uppercase_select = window.confirm("Include uppercase characters?");
  var numeric_select = window.confirm("Include numeric characters?");
  var special_select = window.confirm("Include special characters?")
  if (lowercase_select) {
    available_chars = available_chars.concat(lowercase_chars)
  }
  if (uppercase_select) {
    available_chars = available_chars.concat(uppercase_chars)
  }
  if (numeric_select) {
    available_chars = available_chars.concat(numeric_chars)
  }
  if (special_select) {
    available_chars = available_chars.concat(special_chars)
  }
  alert("Selected Options\nTotal Characters: " + password_length +
        "\nLowercase Characters Enabled: " +lowercase_select +
        "\nUppercase Characters Enabled: " + uppercase_select +
        "\nNumeric Characters Enabled: " + numeric_select +
        "\nSpecial Characters Enabled: " + special_select);
  if (available_chars.length < 1) {
    window.alert("No character options selected. Please choose at least 1 character type.");
    return "Must choose at least 1 character type."
  }
  for (var x = 0; x < password_length; x++) {
    var new_char = available_chars[Math.floor(Math.random() * available_chars.length)]
    password = password.concat(new_char)
  }
  return password
}