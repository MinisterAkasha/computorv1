#!/usr/bin/node
"use strict"
import { ParsedDataType, parser } from './src/parcer';
import { Coefficients, getDiscriminant, getSolutions } from "./src/equation";
import { logger } from "./src/logger";
import { generateReducedForm } from "./src/reducedForm";
import { decimalToFraction } from './src/utils';

export const getPolynomialPower = (data: ParsedDataType) => {
	const powers = Object.keys(data);

	return powers.length
		? powers.sort((a, b) => +b - +a)[0]
		: 0;
}

export const getCoefficients = (data: ParsedDataType) => {
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
	try {
		parser.parse();
	} catch (error) {
		logger.logError(error);
		return;
	}
    

	const parsedData = parser.getData();

	logger.logReducedForm(generateReducedForm(parsedData));

	const polynomialPower = Number(getPolynomialPower(parsedData));

	logger.logPolynomialDegree(polynomialPower);

	 if (polynomialPower > 2) {
		 logger.logTooMushDegree();

		 return;
	 }

	const coefs = getCoefficients(parsedData);
	logger.logCoefficients(coefs);

	const discriminant = getDiscriminant(coefs);
	const solution = getSolutions(coefs, polynomialPower, discriminant);

	if (polynomialPower === 2) {
		logger.logDiscriminant(discriminant);
	}

	logger.logSolutions(solution);
}

console.log(decimalToFraction(4.5));

// app();

// npx ts-node index.ts
// npm start -- "..."
