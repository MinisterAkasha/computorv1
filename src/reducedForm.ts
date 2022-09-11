import {abs} from "./math";
import {ParsedDataType, ParsedDataTypeObj} from "./parcer";
import {decimalToFraction} from "./utils";

const powerToString = (power: number) => {
	if (power > 1) {
		return `X^${power}`;
	} else if (power === 1) {
		return 'X'
	}

	return '';
};

const multiplierToSting = (multiplier: number, power: number) => {
	if (multiplier === 1 && power) {
		return ''
	} else if (multiplier && !power) {
		return abs(multiplier);
	}

	return `${abs(multiplier)} *`
};

export const generateReducedForm = (data: ParsedDataType) => {
	const powers = Object.keys(data);

	let result = powers
		.sort((a, b) => +b - +a)
		.reduce((acc, curr) => {
			const { power, multiplier } = data[curr] as ParsedDataTypeObj;
			const sign = multiplier > 0 ? '+' : '-';

			acc += multiplier ? `${sign} ${multiplierToSting(multiplier, power)} ${powerToString(power)} ` : '';

			return acc;
		}, '');

	result += result.length ? ' = 0' : '0 = 0';
	result = result
		.replace(/^[+]? /g, '')
		.replace(/^[\-] /g, '-')
		.replace(/ +/gi, ' ')
		.trim()

	return result;
}