"use strict";

// Задача 1
function getSolutions(a, b, c) {
	let D = Math.pow(b, 2) - 4 * a * c;
	let x = [];

	if (D >= 0) {
		x[0] = (-b + Math.sqrt(D)) / (2 * a);
	}
	if (D > 0) {
		x[1] = (-b - Math.sqrt(D)) / (2 * a);
	}

	return {D: D, roots: x};
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);

	if (result.roots.length === 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	}
	if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	}
	if (result.roots.length === 2) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(1, -8, 12);
showSolutionsMessage(2, 4, 2);

// Задача 2
function getAverageScore(data) {
	let outputData = {};
	let sum = 0;
	let counter = 0;
	for (let subject in data) {
		outputData[subject] = getAverageMark(data[subject]);
	}
	for (let subject in outputData) {
		sum += outputData[subject];
		counter++;
	}
	outputData.average = sum / counter;
	if (isNaN(outputData.average)) {
		outputData.average = 0;
	}
	return outputData;
}

function getAverageMark(marks) {
	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	let result = sum / marks.length;
	if (isNaN(result)) {
		result = 0;
	}
	return result;
}

console.log(getAverageScore({
	algebra : [4, 5, 5, 4],
    geometry : [2, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4]	
}));


// Задача 3
function getPersonData(secretData) {
	return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)}
}

function getDecodedValue(secret) {
	return (secret === 1) ? 'Эмильо' : 'Родриго';
}

console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));





















