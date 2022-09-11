import { EQUATIOS } from "./data";
import { parser, Parser } from "../src/parcer";
import { generateReducedForm } from "../src/reducedForm";

const getReducedForm = (equation) => {
	const parser = new Parser(equation);
	parser.parse();

	return generateReducedForm(parser.getData());
}

describe('Reduced form test', () => {
	Object.keys(EQUATIOS).forEach((eqIndex) => {
		it(EQUATIOS[eqIndex].eq, () => {
			expect(getReducedForm(EQUATIOS[eqIndex].eq)).toBe(EQUATIOS[eqIndex].rf);
		})
	});
});