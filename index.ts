#!/usr/bin/node
"use strict"
import { ParsedDataType, ParsedDataTypeObj, parser } from './src/parcer';
import { abs, Coefficients, getDiscriminant, getSolutions } from "./src/equation";
import { Logger } from "./src/logger";

const getPolynomialPower = (data: ParsedDataType) => {
	const powers = Object.keys(data);

	return powers.length
		? powers.sort((a, b) => +b - +a)[0]
		: 0;
}

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
		return multiplier;
	}

	return `${abs(multiplier)} *`
};

const generateReducedForm = (data: ParsedDataType) => {
    const powers = Object.keys(data);

    let result = powers
		.sort((a, b) => +b - +a)
		.reduce((acc, curr) => {
			const { power, multiplier } = data[curr] as ParsedDataTypeObj;
			const sign = multiplier > 0 ? '+' : '-';

			acc += multiplier ? ` ${sign} ${multiplierToSting(multiplier, power)} ${powerToString(power)}` : '';

			return acc;
    	}, '');

    result += result.length ? ' = 0' : '0 = 0';
    result = result
		.trim()
		.replace(/^[\+]? /g, '')
		.replace(/  /g, ' ');
    
    return result;
}

const getCoefficients = (data: ParsedDataType) => {
	const coef: Coefficients = {a: 0, b: 0, c: 0};

	const powerToCoef = {
		'0': 'c',
		'1': 'b',
		'2': 'a',
	};

	for (const power in data) {
		coef[powerToCoef[power]] = data[power].multiplier;
	}

	return coef;
}

const app = () => {
    const args = process.argv.slice(2);
    parser.parse();

	const parsedData = parser.getData();

	Logger.logReducedForm(generateReducedForm(parsedData));

	const polynomialPower = Number(getPolynomialPower(parsedData));

	Logger.logPolynomialDegree(polynomialPower);

	 if (polynomialPower > 2) {
		 Logger.logTooMushDegree();

		 return;
	 }

	const coefs = getCoefficients(parser.getData());
	Logger.logCoefficients(coefs);

	const discriminant = getDiscriminant(coefs);
	const solution = getSolutions(coefs, polynomialPower, discriminant);

	if (polynomialPower === 2) {
		Logger.logDiscriminant(discriminant);
	}

	Logger.logSolutions(solution);
}

app();

// npx ts-node index.ts
