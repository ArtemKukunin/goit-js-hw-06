// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// // В результаті, в консолі будуть виведені наступні повідомлення.


const allItems = document.querySelectorAll(".item");
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;

  let firstTitleElements = element.querySelectorAll("li");
  let secondTitleElemnts = firstTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${secondTitleElemnts}`);
});
