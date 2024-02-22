const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    // supppose error required form doesn't submit
    // if error required
    if (!validateInputs()) {
        e.preventDefault();
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    // check error
    let success = true;

    // username validate
    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // email validate
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        success = false;
    } else {
        setSuccess(email);
    }

    // password validate
    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        success = false;
    } else {
        setSuccess(password);
    }

    // confirm password validate
    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm Password is required');
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Password does not match');
        success = false;
    } else {
        setSuccess(cpassword);
    }

    return success;
}

// element - password,msg - pw is required
function setError(element, message) {
    // error showing box parent
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;

    // add error message 
    inputGroup.classList.add('error');
    // suppose error msg shows we want remove the success msg
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    // error showing box parent
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    // error remove
    errorElement.innerText = '';

    // add success 
    inputGroup.classList.add('success');
    // remove the error msg
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}