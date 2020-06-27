// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix = () => this.state = this.state * 1.5;

	set state(newState) {
		(newState < 0) ? this._state = 0 :
		(newState > 100) ? this._state = 100 : this._state = newState;
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class ScienceBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'science';
	}
}

// Задача 2
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook (book) {
		(book.state > 30) ? this.books.push(book) : console.log('Разве можно так обращаться с книгами?');
	}

	findBookBy (type, value) {
		const found = this.books.find(book => book[type] === value);
		if (found !== undefined) {
			return found;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		const foundBookIndex = this.books.findIndex(book => book.name === bookName);
		let foundBook = 0;
		if (foundBookIndex !== -1) {
			foundBook = this.books[foundBookIndex];
			this.books.splice(foundBookIndex, 1);
			return foundBook;
		} else {
			return null;
		}
	}
}

const library = new Library('Библиотека для детей в возрасте от 0 до 100 лет');
library.addBook(new DetectiveBook('Стиг Ларсон', 'Девушка с татуировкой дракона', 2009, 624));
library.addBook(new FantasticBook('Аркадий и Борис Стругацкие', 'Понедельник начинается в субботу', 1965, 320));
library.addBook(new Magazine('Мурзилка', 1924, 60));
library.addBook(new PrintEditionItem('Судовой журнал', 2000, 102));
library.addBook(new ScienceBook('Карл Саган', 'Мир, полный демонов', 1995, 457));
library.addBook(new ScienceBook('Роберт Сапольски', 'Кто мы такие? Гены, наше тело, общество', 2018, 290));
library.addBook(new NovelBook('Олег Куваев', 'Территория', 1975, 284));
library.addBook(new FantasticBook('Анджей Сапковский', 'Последнее желание', 1993, 640));

console.log(library.findBookBy('name', 'Оно'));
console.log(library.findBookBy('releaseDate', 1965));

console.log('Количество книг до выдачи: ' + library.books.length);
library.giveBookByName('Кто мы такие? Гены, наше тело, общество');
console.log('Количество книг после выдачи: ' + library.books.length);

console.log('Количество книг до выдачи: ' + library.books.length);
const witcher = library.giveBookByName('Последнее желание');
console.log(witcher);
console.log('Количество книг после выдачи: ' + library.books.length);

witcher.state = 26;
console.log('Количество книг до добавления: ' + library.books.length);
library.addBook(witcher);
console.log('Количество книг после добавления: ' + library.books.length);
witcher.fix();
console.log(witcher.state);
console.log('Количество книг до добавления: ' + library.books.length);
library.addBook(witcher);
console.log('Количество книг после добавления: ' + library.books.length);

// Задача 3
class StudentLog {
	constructor(studentName) {
		this.studentName = studentName;
		this.grades = {};
	}

	getName = () => this.studentName;

	addGrade(grade, subject) {
		if (Math.round(grade) >= 1 && Math.round(grade) <= 5) {
			(this.grades[subject]) ? this.grades[subject].push(grade) : this.grades[subject] = [grade];
		} else {
			console.log(`Вы пытались поставить оценку "${grade}" по предмету ${subject}.\nНе надо так.\nСтавьте только числа от 1 до 5.`);
		}
		if (this.grades[subject] === undefined) {
			return 0;
		} else {
			return this.grades[subject].length;
		}
	}

	getAverageBySubject(subject) {
		if (this.grades[subject]) {
			let sum = 0;
			for (let grade in this.grades[subject]) {
				sum += this.grades[subject][grade];
			}
			return sum / this.grades[subject].length;
		} else {
			return 0;
		}
	}	

	getTotalAverage() {
		let subjectSum = {};
		let totalSum = 0;
		let counter = 0;

		for (let subject in this.grades) {
			subjectSum[subject] = this.getAverageBySubject(subject);
		}

		for (let key in subjectSum) {
			totalSum += subjectSum[key];
			counter++;
		}

		if (totalSum === 0) {
			return 0;
		} else {
			return totalSum / counter;
		}
	}
}

const studentLog = new StudentLog('Джордж Уизли');
console.log(studentLog.getName());
studentLog.addGrade(0, 'potions');
studentLog.addGrade(4, 'potions');
studentLog.addGrade(5, 'transfiguration');
studentLog.addGrade(2, 'transfiguration');
studentLog.addGrade(3, 'сharms');
studentLog.addGrade(2, 'potions');
studentLog.addGrade(5, 'сharms');
studentLog.addGrade(1, 'potions');
studentLog.addGrade(6, 'сharms');
studentLog.addGrade('отвратительно!', 'potions');
studentLog.addGrade(3, 'transfiguration');

console.log(studentLog.getAverageBySubject('geometry'));
console.log(studentLog.getAverageBySubject('potions'));

console.log(studentLog.getTotalAverage());


















