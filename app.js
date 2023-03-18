const submitBtn = document.querySelector(".btn-submit");
const passwordInput = document.getElementById("password");
const rangeInput = document.getElementById("rangeInput");
const btnCopy = document.querySelector(".btn-copy");
const strength = document.querySelector(".strength");

// Event Listeners
btnCopy.addEventListener("click", copyPassword);
submitBtn.addEventListener("click", genPassword);

// Generate Password
function genPassword() {
    const chars = "0123456789!@#$%*/+-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = rangeInput.value;
    let password = "";

    for(let i = 1; i <= passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    passwordInput.value = password;

    if(password.length <= 5){
        strength.innerHTML = "Password too short, change length";
        strength.style.color = "red";
    } else {
        strength.innerHTML = "Password is strong";
        strength.style.color = "#2be4a0";
    }
}
// Copy Password
function copyPassword() {
    let copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    alert(`Copied password: ${copyText.value}`); 
  }