export const abs = (num: number) => num >= 0 ? num : num * -1;

export const floor = (value: number) => {
	const num = abs(value);

	const hasFractionalPart = String(num).includes('.');
	let rounded = num;

	if (hasFractionalPart) {
		rounded = Number(num.toFixed(1).slice(0, 1));
	}

	return value < 0 ? (rounded * -1) - 1 : rounded;
}

export const round = (value: number) => {
	const num = abs(value);

	const rounded = Number(num.toFixed(0));

	return num !== value ? rounded * -1 : rounded;
}

// Greatest Common Divisor
export const gcd = (a, b) => {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
}