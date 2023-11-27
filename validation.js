function validateUsername(username) {
    // Your username validation logic
    return username.length >= 3 && username.length <= 15;
}

function validateEmail(email) {
    // Your email validation logic
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
}

function validatePasswordLength(password, min, max) {
    // Your password length validation logic
    return password.length >= min && password.length <= max;
}

function validatePasswordMatch(password1, password2) {
    // Your password match validation logic
    return password1 === password2;
}

module.exports = {
    validateUsername,
    validateEmail,
    validatePasswordLength,
    validatePasswordMatch,
};
