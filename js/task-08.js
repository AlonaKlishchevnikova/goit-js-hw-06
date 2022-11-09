const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const inputs = document.querySelectorAll('input');
 
inputs.forEach(input => {
    if (input.value.trim() === '') { 
    alert("Всі поля мають бути заповнені")
    }

   else {const formData = new FormData(event.currentTarget);
    console.log(formData);
    formData.forEach((value, name) => {
    console.log(name);
    console.log(value);})} 
    })
    
     event.preventDefault();
    event.target.reset(); 
}