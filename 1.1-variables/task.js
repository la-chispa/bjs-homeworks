function averageMark(a, g, p) {
	
    let algebra = a;
    let geography = g;
    let physics = p;
    let averageMark = Math.round((algebra + geography + physics) / 3);
    
	return averageMark;
}

function sayHello(userName) {
	
    let myName = userName;
    let sayHello = `Привет, мир! Меня зовут ${myName}`;

    
	return sayHello;
}

function calculateFormula() {
    
	let x = 2;
	let y = 22;
	let z = 0;
	let result = x * y + 5 * z + x - 1;

    
    return result;
}
