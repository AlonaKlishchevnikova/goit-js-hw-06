function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]'); 
const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

function createBoxes(amount) {
  this.amount = Number(inputEl.value);
  const elemSize = 30;
  let elem = '';
  let colectionElements = [];
  for (let i = 0; i < this.amount; i += 1){
    let size = elemSize + i * 10;
    elem = document.createElement('div');
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.width = size + 'px';
    elem.style.height = size + 'px';
    colectionElements.push(elem);
  }
  
  divEl.append(...colectionElements);
 
}
 function destroyDivEl() {
   boxes.innerHTML = ""; 
   inputEl.value = '';
    
 }
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyDivEl);

