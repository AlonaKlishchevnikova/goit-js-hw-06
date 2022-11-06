let counterValue = 0;
const refs = {
decrementButton: document.querySelector('button[ data-action = decrement]'),
incrementButton: document.querySelector('button[ data-action = increment]'),
}

let valueEl = document.querySelector('#value');

const handleDecrementClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
refs.decrementButton.addEventListener('click', handleDecrementClick);

const handleIncrementClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
refs.incrementButton.addEventListener('click', handleIncrementClick);