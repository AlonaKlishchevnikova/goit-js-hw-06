 const input = document.querySelector('#name-input');
const result = document.querySelector('#name-output');
input.addEventListener('input', (event) => {
    result.textContent = "Anonymous";
     const inputValue = event.target.value;
    if (inputValue) { result.textContent = inputValue; }
        });



   

