"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

	if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}
	if (isNaN(contribution)) {
		return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
	}
	if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
	}

	let loanBody = amount - contribution;
	let term = (date.getFullYear() - new Date().getFullYear()) * 12 - (new Date().getMonth() - date.getMonth());
	let percentPart = (percent / 100) / 12;

	let payment = loanBody * (percentPart + percentPart / (Math.pow((1 + percentPart), term) - 1));
	let totalAmount = payment * term;
	console.log(parseFloat(totalAmount.toFixed(2)));

    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
	if (!name || name === null || name === undefined) {
		name = "Аноним";
	}
	return `Привет, мир! Меня зовут ${name}`;
}