// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.



// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.




const input = document.querySelector('#validation-input')
console.log(input.getAttribute('data-length'))
input.addEventListener('blur', event => {
   
	if (input.value.length === Number(input.dataset.length)) {
		input.classList.add('valid')
	
			input.classList.remove('invalid')
		
	} else {
		
			input.classList.remove('valid')
		
		input.classList.add('invalid')
	}


})
console.log(input)


// const input = document.querySelector('#validation-input')
// console.log(input.getAttribute('data-length'))
// input.addEventListener('blur', event => {
   
// 	if (input.value.length === Number(input.dataset.length)) {
// 		input.classList.add('valid')
// 		if (input.classList.contains('invalid')) {
// 			input.classList.remove('invalid')
// 		}
// 	} else {
// 		if (input.classList.contains('valid')) {
// 			input.classList.remove('valid')
// 		}
// 		input.classList.add('invalid')
// 	}
//     event.preventDefault();

// })
// console.log(input)