import { EQUATIOS } from "./data";
import { parser, Parser } from "../src/parcer";
import { generateReducedForm } from "../src/reducedForm";
import { getCoefficients, getPolynomialPower } from "../index";
import { getDiscriminant, getSolutions } from "../src/equation";

const getSolution = (equation) => {
	const parser = new Parser(equation);
	parser.parse();


	const parsedData = parser.getData();
	const polynomialPower = Number(getPolynomialPower(parsedData));
	const coefs = getCoefficients(parser.getData());
	const discriminant = getDiscriminant(coefs);
	return getSolutions(coefs, polynomialPower, discriminant);
}

describe('Reduced form test', () => {
	Object.keys(EQUATIOS).forEach((eqIndex) => {
		it(EQUATIOS[eqIndex].eq, () => {
			const solutions = getSolution(EQUATIOS[eqIndex].eq);

			expect(solutions[0]).toBe(EQUATIOS[eqIndex].solutions.x1);
			expect(solutions[1]).toBe(EQUATIOS[eqIndex].solutions.x2);
		})
	});
});