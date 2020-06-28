// Задача 1
parseCount = (data) => {
	if (isNaN(Number.parseInt(data))){
       throw new Error('Невалидное значение');
	} 
	return Number.parseInt(data);
}

validateCount = (data) => {
    try {
        const resultParse = parseCount(data);
        return resultParse;
    } catch(e) {
        return e;
    }
}


// Задача 2
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
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
		if (a + b <= c || b + c <= a || a + c <= b) {
			throw new Error('Треугольник с такими сторонами не существует');
		} else {
			const triangle = new Triangle(a, b, c);
			return triangle;
		}
	} catch(e) {
		const triangle = {};
		triangle.getArea = function() {
			return 'Ошибка! Треугольник не существует';
		}
		triangle.getPerimeter = function() {
			return 'Ошибка! Треугольник не существует';
		}
		return triangle;
	}
}