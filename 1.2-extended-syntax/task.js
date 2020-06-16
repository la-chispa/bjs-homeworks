"use strict";

function getResult(a,b,c) {
	let x = [];
	let discriminant = (b ** 2) - 4 * a * c;

	if (discriminant >= 0) {
		x[0] = (-b + (discriminant ** (1/2))) / (2 * a);
	}
	if (discriminant > 0) {
		x[1] = (-b - (discriminant ** (1/2))) / (2 * a);
	} 

	return x;
}

function getAverageMark(marks) {
	let sum = 0;
	if (marks.length === 0) {
		console.log("Нет оценок — нечего считать.");
		return 0;
	} 
	if (marks.length > 5) {
		marks.splice(5);
		console.log("Слишком много оценок. Считать будем по первым пяти.");
	} 
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	let averageMark = Math.round(sum / marks.length);
	return averageMark;
}

function askDrink(name,dateOfBirthday) {
	let thisDate = new Date();
	let age = thisDate.getFullYear() - dateOfBirthday.getFullYear();
	if (age >= 18) {
		return `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
}