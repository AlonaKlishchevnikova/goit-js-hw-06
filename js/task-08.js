const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    if (input.value.trim() === '') { 
    alert("Всі поля мають бути заповнені")
    }
})
    event.preventDefault();
    event.target.reset(); 
    const formData = new FormData(event.currentTarget);
}