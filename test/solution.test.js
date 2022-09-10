import { EQUATIOS } from "./parser.test";
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
	// return [0, 0];
}

describe('Reduced form test', () => {
	it(EQUATIOS[0].eq, () => {
		const solutions = getSolution(EQUATIOS[0].eq);

		expect(solutions[0]).toBe(EQUATIOS[0].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[0].solutions.x2);
	});

	it(EQUATIOS[1].eq, () => {
		const solutions = getSolution(EQUATIOS[1].eq);

		expect(solutions[0]).toBe(EQUATIOS[1].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[1].solutions.x2);
	});

	it(EQUATIOS[2].eq, () => {
		const solutions = getSolution(EQUATIOS[2].eq);

		expect(solutions[0]).toBe(EQUATIOS[2].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[2].solutions.x2);
	});

	it(EQUATIOS[3].eq, () => {
		const solutions = getSolution(EQUATIOS[3].eq);

		expect(solutions[0]).toBe(EQUATIOS[3].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[3].solutions.x2);
	});

	it(EQUATIOS[4].eq, () => {
		const solutions = getSolution(EQUATIOS[4].eq);

		expect(solutions[0]).toBe(EQUATIOS[4].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[4].solutions.x2);
	});

	it(EQUATIOS[5].eq, () => {
		const solutions = getSolution(EQUATIOS[5].eq);

		expect(solutions[0]).toBe(EQUATIOS[5].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[5].solutions.x2);
	});

	it(EQUATIOS[6].eq, () => {
		const solutions = getSolution(EQUATIOS[6].eq);

		expect(solutions[0]).toBe(EQUATIOS[6].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[6].solutions.x2);
	});

	it(EQUATIOS[7].eq, () => {
		const solutions = getSolution(EQUATIOS[7].eq);

		expect(solutions[0]).toBe(EQUATIOS[7].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[7].solutions.x2);
	});

	it(EQUATIOS[8].eq, () => {
		const solutions = getSolution(EQUATIOS[8].eq);

		expect(solutions[0]).toBe(EQUATIOS[8].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[8].solutions.x2);
	});

	it(EQUATIOS[9].eq, () => {
		const solutions = getSolution(EQUATIOS[9].eq);

		expect(solutions[0]).toBe(EQUATIOS[9].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[9].solutions.x2);
	});

	it(EQUATIOS[10].eq, () => {
		const solutions = getSolution(EQUATIOS[10].eq);

		expect(solutions[0]).toBe(EQUATIOS[10].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[10].solutions.x2);
	});

	it(EQUATIOS[11].eq, () => {
		const solutions = getSolution(EQUATIOS[11].eq);

		expect(solutions[0]).toBe(EQUATIOS[11].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[11].solutions.x2);
	});

	it(EQUATIOS[12].eq, () => {
		const solutions = getSolution(EQUATIOS[12].eq);

		expect(solutions[0]).toBe(EQUATIOS[12].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[12].solutions.x2);
	});

	it(EQUATIOS[13].eq, () => {
		const solutions = getSolution(EQUATIOS[13].eq);

		expect(solutions[0]).toBe(EQUATIOS[13].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[13].solutions.x2);
	});

	it(EQUATIOS[14].eq, () => {
		const solutions = getSolution(EQUATIOS[14].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[14].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[14].solutions.x2);
	});

	it(EQUATIOS[15].eq, () => {
		const solutions = getSolution(EQUATIOS[15].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[15].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[15].solutions.x2);
	});
	
	it(EQUATIOS[16].eq, () => {
		const solutions = getSolution(EQUATIOS[16].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[16].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[16].solutions.x2);
	});
	
	it(EQUATIOS[17].eq, () => {
		const solutions = getSolution(EQUATIOS[17].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[17].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[17].solutions.x2);
	});
	
	it(EQUATIOS[18].eq, () => {
		const solutions = getSolution(EQUATIOS[18].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[18].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[18].solutions.x2);
	});
	
	it(EQUATIOS[19].eq, () => {
		const solutions = getSolution(EQUATIOS[19].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[19].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[19].solutions.x2);
	});
	
	it(EQUATIOS[20].eq, () => {
		const solutions = getSolution(EQUATIOS[20].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[20].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[20].solutions.x2);
	});
	
	it(EQUATIOS[21].eq, () => {
		const solutions = getSolution(EQUATIOS[21].eq);
	
		expect(solutions[0]).toBe(EQUATIOS[21].solutions.x1);
		expect(solutions[1]).toBe(EQUATIOS[21].solutions.x2);
	});
});