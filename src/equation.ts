export const abs = (num: number) => num >= 0 ? num : num * -1;

// нахождения квадратного корня по формуле Герона
export const sqrt = (number: number) => {
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
		return [Infinity];
	} else if (power === 1) {
		return [-1 * c / b];
	}

	if (power === 2 && D >= 0) {
		solution[0] = (-1 * b - sqrt(D)) / (2 * a);
		solution[1] = (-1 * b + sqrt(D)) / (2 * a);
	} else {

	}

	if (solution[1] === solution[0]) {
		solution.pop();
	}

	return solution;
}
