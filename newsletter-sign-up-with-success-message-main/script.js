const enterEmail = document.getElementById('email');
const enterEmailWorng = document.getElementById('emailred');
const formAll = document.getElementById('form');
const enterEmailBox = document.getElementById('enteremailbox');

const validateEmail = () => {
    const emailTypeValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!enterEmail.value.match(emailTypeValid)) {
        enterEmailWorng.innerHTML = 'Incorrect Email Format';
        enterEmail.classList.add('emailValidate');
        return false;
    } else {
        enterEmailWorng.innerHTML = '';
        enterEmail.classList.remove('emailValidate');
        return true;
    }
};

const signInBox = document.getElementById('bigbox');
const successBox = document.getElementById('successbox');
const customerEmail = document.getElementById('customeremail');

const submitSuccess = (e) => {
    e.preventDefault();

    if (validateEmail()) {
        signInBox.style.display = 'none';
        successBox.style.display = 'flex';
        customerEmail.textContent = enterEmail.value;
    }
};

formAll.addEventListener('submit', submitSuccess);

const returnButton = document.getElementById('dismissBtn');

const returnToSignIn = (e) => {
    e.preventDefault();
    if (successBox.style.display === 'flex') {
        successBox.style.display = 'none';
        signInBox.style.display = 'flex';
        enterEmail.value = '';
    }
};
returnButton.addEventListener('click', returnToSignIn);
