// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list= document.querySelector('#ingredients');
// console.log(list)
const liArray=[];
ingredients.forEach(ingredients =>{
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredients;
  liArray.push(item)
});
// console.log(liArray)

list.append(...liArray);

