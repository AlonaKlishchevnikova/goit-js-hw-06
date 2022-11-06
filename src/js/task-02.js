const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const elements = ingredients.map(element => 
{
  const createItemEl = document.createElement("li");
  createItemEl.classList.add('item');
  createItemEl.textContent = element;
  return (createItemEl);
})

console.log(elements);
ingredientsListEl.append(...elements);
