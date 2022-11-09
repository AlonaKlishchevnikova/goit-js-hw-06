const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  body.style.backgroundColor = randomColor; 
  colorText.textContent = randomColor;
}

 button.addEventListener("click", getRandomHexColor);
 