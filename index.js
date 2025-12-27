let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let copyEl = document.querySelector('span');
let alertEl = document.querySelector('.alert');

function createPassword() {
    let password = "";
    let passwordLength = 15;
    let char ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let index = 0; index < passwordLength; index++) {

        let randomChar = Math.floor(Math.random() * char.length);
        password += char.substring(randomChar, randomChar + 1);
    }   
    inputEl.value = password;
    alertEl.innerText = inputEl.value + " Copied!";
}

buttonEl.addEventListener('click', () => {createPassword()});

copyEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
      alertEl.classList.remove("active");
      setTimeout(() => {
        alertEl.classList.add("active");
      }, 2000);
    } else{
        alertEl.classList.remove("active");
        alertEl.innerText = "Generate a password   first!";
      setTimeout(() => {
        alertEl.classList.add("active");
      }, 2000);
    }
});

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
