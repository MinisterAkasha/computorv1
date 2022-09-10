export const abs = (num: number) => num >= 0 ? num : num * -1;

const getComplexPart = (b: number, a: number) => {
	const divider = 2 * a;

	return parseFloat(((-1 * b) / divider).toFixed(7));
}

const getRealPart = (D: number, a: number) => {
	const divider = 2 * a;

	return abs((sqrt(abs(D)) / divider)).toFixed(5);
}

// нахождения квадратного корня по формуле Герона
export const sqrt = (number: number) => {
	if (number === 0) {
		return number;
	}

	let x;
	let x1 = number / 2;

	do {
		x = x1;
		x1 = (x + (number / x)) / 2;
	} while (x !== x1);

	return x;
}

export interface Coefficients {
	a: number;
	b: number;
	c: number;
}

export const getDiscriminant = ({a, b, c}: Coefficients) => b ** 2 - 4 * a * c;

export const getSolutions = ({a, b, c}: Coefficients, power: number, D?: number) => {
	const solution = [];

	if (power === 0) {
		return [c === 0 ? Infinity : -Infinity];
	} else if (power === 1) {
		return [-1 * c / b];
	}

	if (power === 2 && D >= 0) {
		solution[0] = String(parseFloat(((-1 * b - sqrt(D)) / (2 * a)).toFixed(5)));
		solution[1] = String(parseFloat(((-1 * b + sqrt(D)) / (2 * a)).toFixed(5)));
	} else {
		solution[0] = `${getComplexPart(b, a)} - ${getRealPart(D, a)} * i`;
		solution[1] = `${getComplexPart(b, a)} + ${getRealPart(D, a)} * i`;
	}

	if (solution[1] === solution[0]) {
		solution.shift();
	}

	return solution;
}
