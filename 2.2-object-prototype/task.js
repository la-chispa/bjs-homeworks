'use strict';

String.prototype.isPalindrome = function() {
	let phrase = this.toLowerCase().split('');
	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] === ' ') {
			phrase.splice(i, 1);
		}
	}
	let counter = 0;
	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] === phrase[(phrase.length - 1) - i]) {
			counter++;
		}
	}
	if (counter === phrase.length) {
		return true;
	} else {
		return false;
	}	
}


function getAverageMark(marks) {
	let sum = 0;
	for (let mark of marks) {
		sum += mark;
	}
	let average = sum / marks.length;
	if (isNaN(average)) {
		average = 0;
	}
	return Math.round(average);
}

function checkBirthday(birthday) {
	let age = (new Date().getTime() - Date.parse(birthday)) / 31557600000;
	return (age > 18) ? true : false;
}