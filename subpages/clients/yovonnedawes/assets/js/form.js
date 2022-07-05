const PASSWORD_TEXT = document.querySelector('.password-container span');
const PASSWORD_INPUT = document.querySelector('.password-container input');
const PASSWORD_ERROR = document.querySelector('.error');
const PASSWORD_FORM = document.querySelector('.password-form');

PASSWORD_INPUT.addEventListener('focus', () => {
    PASSWORD_TEXT.classList.remove('move-down');
    PASSWORD_TEXT.classList.add('move-up');
});
PASSWORD_INPUT.addEventListener('blur', () => {
    if (PASSWORD_INPUT.value.length === 0) {
        PASSWORD_TEXT.classList.remove('move-up');
        PASSWORD_TEXT.classList.add('move-down');
    }
});

function handlePasswordSubmit(e) {
    e.preventDefault();
    const passwordContent = PASSWORD_INPUT.value;
    const passwordValid = passwordContent && passwordContent.length > 0;

    if (!passwordValid) {
        PASSWORD_ERROR.textContent = "plese enter a password";
        return false;
    }

    // From index.js
    getData(PASSWORD_INPUT.value);
}
