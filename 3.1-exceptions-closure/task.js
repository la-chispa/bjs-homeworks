// Задача 1
parseCount = (data) => {
	const value = Number.parseInt(data); 
	if (isNaN(value)) {
       throw new Error('Невалидное значение');
	} 
	return value;
}

validateCount = (data) => {
    try {
        return parseCount(data);
    } catch(e) {
        return e;
    }
}


// Задача 2
class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || b + c <= a || a + c <= b) {
			throw new Error('Треугольник с такими сторонами не существует');
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {			
		const p = this.getPerimeter() / 2;
		let s = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
		return parseFloat(s);
	}
}

function getTriangle(a, b, c) {
	try {
		return (new Triangle(a, b, c));
	} catch(e) {
		return {
			getArea: function() {return 'Ошибка! Треугольник не существует'},
			getPerimeter: function() {return 'Ошибка! Треугольник не существует'}
			// Со стрелочными функциями вылетает синтаксическая ошибка. 
			//Вариант блочный ↓
			// getArea: function = () => {return 'Ошибка! Треугольник не существует'},
			// getPerimeter: function = () => {return 'Ошибка! Треугольник не существует'}
			//Вариант краткий ↓
			// getArea: function = () => 'Ошибка! Треугольник не существует',
			// getPerimeter: function = () => 'Ошибка! Треугольник не существует'
		
		}
	}
}