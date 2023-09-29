const membership = document.forms['form']['text'];
const password = document.forms['form']['password'];
const errUID = document.getElementById('wrongUID');
const errPassword = document.getElementById('wrongPass');

//This will trigger the input element in our HTML
membership.addEventListener('input', errMemID);
password.addEventListener('input', errorPassword);

//Function for onsubmit Validation()

function validation() {
    if (membership.value.length < 9) {
        membership.style.border = '1px solid red'
        errUID.style.display = 'block';
        membership.focus();
        return false
    }

    if (password.value.length < 10 ) {
        password.style.border = '1px solid red'
        errPassword.style.display = 'block'
        password.focus();
        return false;
    }
}

function errMemID() {
    if (membership.value.length >= 8) {
        membership.style.border = '1px solid lightgray';
        errUID.style.display = 'none';
        return true;
    }
}

function errorPassword() {
    if (password.value.length >= 10) {
        password.style.border = '1px solid lightgray';
        errPassword.style.display = 'none';
        return true;
    }
}