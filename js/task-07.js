// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputChange = document.querySelector("input#font-size-control");
const abracadabra = document.querySelector("span#text");

inputChange.addEventListener("input", (e) => {
abracadabra.style.fontSize = `${e.target.value}px`;
});