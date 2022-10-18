const throttle = require(`lodash.throttle`);

const form = document.querySelector('.feedback-form');
const emailLabel = document.querySelector('input');
const messageLabel = document.querySelector('textarea');

form.addEventListener('input', throttle(inputData, 500));

function inputData() {
    const data = {
        email: emailLabel.value,
        message: messageLabel.value,
    };
    localStorage.setItem(`feedback-form-state`, JSON.stringify(data));
}
if (localStorage === " ") {
    emailLabel.value = JSON.parse(localStorage.getItem(`feedback-form-state`)).email;
    messageLabel.value = JSON.parse(localStorage.getItem(`feedback-form-state`)).message;
}
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const { elements: { email, message }, } = e.currentTarget;
    if (email.value === `` || message.value === ``) {
        return alert(`Please complete all fields!`);
    } else {
        console.log(`email: "${email.value}", message: "${message.value}"`);
        e.currentTarget.reset();
        localStorage.removeItem(`feedback-form-state`);
    }
}