
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0

const displayCounter = document.querySelector('#value')
const btnMinus = document.querySelector('button[data-action="decrement"]')
const btnPlus = document.querySelector('button[data-action="increment"]')

btnMinus.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

btnPlus.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})
