document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['form'];

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Perform your form validation here
      const isValid = validateForm();

      if (isValid) {
        // Display the success alert and reset the form
        document.getElementById('success-alert').style.display = 'block';
        form.reset();
      }
    });
  });


// Form validation
function validateForm() {
    const fullName = document.forms['form']['fullName'];
    const fullName2 = document.forms['form']['fullName2'];
    const address = document.forms['form']['address'];
    const email = document.forms['form']['email'];

    const fullName_error = document.getElementById('fullName_error');
    const fullName_error2 = document.getElementById('fullName_error2');
    const address_Error = document.getElementById('address_Error'); // Correct the ID
    const email_error = document.getElementById('email_error');

    let isValid = true;

    // First Name
    if (fullName.value.length < 2) {
        fullName.style.border = "1px solid red";
        fullName_error.style.display = "block";
        fullName.focus();
        isValid = false;
    } else {
        fullName.style.border = "1px solid silver";
        fullName_error.style.display = "none";
    }

    // Last Name
    if (fullName2.value.length < 2) {
        fullName2.style.border = "1px solid red";
        fullName_error2.style.display = "block";
        fullName2.focus();
        isValid = false;
    } else {
        fullName2.style.border = "1px solid silver";
        fullName_error2.style.display = "none";
    }

    // Address
    if (address.value.length < 10) {
        address.style.border = "1px solid red";
        address_Error.style.display = "block";
        address.focus();
        isValid = false;
    } else {
        address.style.border = "1px solid silver";
        address_Error.style.display = "none";
    }

    // Email
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        isValid = false;
    } else {
        email.style.border = "1px solid lightgray";
        email_error.style.display = "none";
    }
    
    return isValid; // Return false if any validation fails, preventing form submission
}