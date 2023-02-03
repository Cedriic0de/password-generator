var password = document.getElementById("password");

// Generate Password
function genPassword() {
    var chars = "0123456789!@#$%*()/+-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("rangeInput").value;
    var password = "";

    for(var i = 0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length -1);
        password += chars.substring(randomNumber, randomNumber -1);
    }

    document.getElementById("password").value = password;
}
// Copy Password
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    alert("Copied password: " + copyText.value); 
  }