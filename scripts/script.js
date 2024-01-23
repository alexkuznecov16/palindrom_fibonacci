// Менеджерская (основная) функция, создающая переменные, отправляющая переменные на проверку, выводящая результат
const mainFunction = () => {
	const userChoose = document.querySelector('input[name="userChoose"]:checked').value; // Выбор пользователя (Палиндром или Фибоначчи)
	const userValue = document.getElementById('userValue').value; // Введенное значение пользователя
	const resultArea = document.getElementById('textArea'); // Поле для вывода результата
	const checkResult = checkFunction(userChoose, userValue); // переменная, которая отправляет выбор и значение на проверку
	if (!checkResult[0]) {
		resultArea.style.color = 'red'; // в поле для результата текст становится красным
		resultArea.innerHTML = checkResult[1]; // вывод ответа
	} else {
		resultArea.style.color = 'green'; // в поле для результата текст становится зеленым
		resultArea.innerHTML = checkResult[1]; // вывод ответа
	}
};

// Функция, проверяющая введенное значение пользователя и выбор
const checkFunction = (choose, value) => {
	let result; // переменная для результата
	if (!choose || !value) {
		result = [false, '>> Invalid data.'];
	} else if (choose == 'Fibonacci' && isNaN(value)) {
		result = [false, '>> Invalid data: Def. of Fibonacci can working only with numbers.']; // Проверяет, является значение типом чисел (для работы с числами)
	} else if (choose == 'Fibonacci' && value <= 0) {
		result = [false, '>> Invalid data: Value cannot be less than 1.']; // Проверяет, является ли значение положительным
	} else if (choose == 'Fibonacci' && value) {
		let value2 = parseInt(value); // переводим input значение строку в целое число
		if (value2 > 1500) {
			result = [false, 'Invalid data: Value cannot be bigger than 1500'];
		} else {
			let seq = [0, 1]; // Массив последовательности
			// Пока true (проверка: последнее + предпоследнее число последовательности меньше или равны лимиту)
			while (seq[seq.length - 1] + seq[seq.length - 2] <= value) {
				let next = seq[seq.length - 1] + seq[seq.length - 2]; // следующее число получается благодаря сложению последнего и предпоследнего числа в массиве чисел
				seq.push(next); // добавляем в массив последовательности следующее число
			}
			result = [true, `>> Valid data: ${seq}`];
		}
	} else if (choose == 'Palindrom' && value) {
		// введенное значение пользователя переводим в нижний регистр для того, чтобы не было проблем с регистром.
		const finalValue = value.toLowerCase().split('').reverse().join(''); // переводим значение пользователя в нижний регистр, перебираем каждый элемент, переворачиваем, с помощью метода .join() - переводим все элементы массива в одну строку
		if (finalValue == value.toLowerCase()) {
			result = [true, '>> Valid data: It is a Palindrom.'];
		} else {
			result = [false, '>> Invalid data: It is not a Palindrom.'];
		}
	}
	return result; // возвращаем результат в основную функцию
};
