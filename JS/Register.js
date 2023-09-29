function validateForm() {
    const fullName = document.forms['form']['fullName'];
    const email = document.forms['form']['email'];
    const password = document.forms['form']['password'];
    const password2 = document.forms['form']['password2'];

    const fullName_error = document.getElementById('fullName_error');
    const email_error = document.getElementById('email_error');
    const pass_error = document.getElementById('pass_error');
    const pass2_error = document.getElementById('pass2_error');

    let isValid = true;

    if (fullName.value.length < 6) {
        fullName.style.border = "1px solid red";
        fullName_error.style.display = "block";
        fullName.focus();
        isValid = false;
    } else {
        fullName.style.border = "1px solid silver";
        fullName_error.style.display = "none";
    }

    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        isValid = false;
    } else {
        email.style.border = "1px solid lightgray";
        email_error.style.display = "none";
    }

    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        isValid = false;
    } else {
        password.style.border = "1px solid lightgray";
        pass_error.style.display = "none";
    }

    if (password.value !== password2.value) {
        password2.style.border = "1px solid red";
        pass2_error.style.display = "block";
        password2.focus();
        isValid = false;
    } else {
        password2.style.border = "1px solid lightgray";
        pass2_error.style.display = "none";
    }

    return isValid;
}