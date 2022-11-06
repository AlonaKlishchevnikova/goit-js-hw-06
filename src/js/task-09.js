
const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(event) {
 document.body.style.background = getRandomHexColor(); 
  colorText.textContent = getRandomHexColor();
}
 button.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

