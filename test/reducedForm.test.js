import { EQUATIOS } from "./parser.test";
import {parser, Parser} from "../src/parcer";
import { generateReducedForm } from "../src/reducedForm";

const getReducedForm = (equation) => {
	const parser = new Parser(equation);
	parser.parse();

	return generateReducedForm(parser.getData());
}

describe('Reduced form test', () => {
	it(EQUATIOS[0].eq, () => {
		expect(getReducedForm(EQUATIOS[0].eq)).toBe(EQUATIOS[0].rf);
	});

	it(EQUATIOS[1].eq, () => {
		expect(getReducedForm(EQUATIOS[1].eq)).toBe(EQUATIOS[1].rf);
	});

	it(EQUATIOS[2].eq, () => {
		expect(getReducedForm(EQUATIOS[2].eq)).toBe(EQUATIOS[2].rf);
	});

	it(EQUATIOS[3].eq, () => {
		expect(getReducedForm(EQUATIOS[3].eq)).toBe(EQUATIOS[3].rf);
	});

	it(EQUATIOS[4].eq, () => {
		expect(getReducedForm(EQUATIOS[4].eq)).toBe(EQUATIOS[4].rf);
	});

	it(EQUATIOS[5].eq, () => {
		expect(getReducedForm(EQUATIOS[5].eq)).toBe(EQUATIOS[5].rf);
	});

	it(EQUATIOS[6].eq, () => {
		expect(getReducedForm(EQUATIOS[6].eq)).toBe(EQUATIOS[6].rf);
	});

	it(EQUATIOS[7].eq, () => {
		expect(getReducedForm(EQUATIOS[7].eq)).toBe(EQUATIOS[7].rf);
	});

	it(EQUATIOS[8].eq, () => {
		expect(getReducedForm(EQUATIOS[8].eq)).toBe(EQUATIOS[8].rf);
	});

	it(EQUATIOS[9].eq, () => {
		expect(getReducedForm(EQUATIOS[9].eq)).toBe(EQUATIOS[9].rf);
	});

	it(EQUATIOS[10].eq, () => {
		expect(getReducedForm(EQUATIOS[10].eq)).toBe(EQUATIOS[10].rf);
	});

	it(EQUATIOS[11].eq, () => {
		expect(getReducedForm(EQUATIOS[11].eq)).toBe(EQUATIOS[11].rf);
	});

	it(EQUATIOS[12].eq, () => {
		expect(getReducedForm(EQUATIOS[12].eq)).toBe(EQUATIOS[12].rf);
	});

	it(EQUATIOS[14].eq, () => {
		expect(getReducedForm(EQUATIOS[14].eq)).toBe(EQUATIOS[14].rf);
	});

	it(EQUATIOS[15].eq, () => {
		expect(getReducedForm(EQUATIOS[15].eq)).toBe(EQUATIOS[15].rf);
	});

	it(EQUATIOS[16].eq, () => {
		expect(getReducedForm(EQUATIOS[16].eq)).toBe(EQUATIOS[16].rf);
	});

	it(EQUATIOS[17].eq, () => {
		expect(getReducedForm(EQUATIOS[17].eq)).toBe(EQUATIOS[17].rf);
	});

	it(EQUATIOS[18].eq, () => {
		expect(getReducedForm(EQUATIOS[18].eq)).toBe(EQUATIOS[18].rf);
	});

	it(EQUATIOS[19].eq, () => {
		expect(getReducedForm(EQUATIOS[19].eq)).toBe(EQUATIOS[19].rf);
	});

	it(EQUATIOS[20].eq, () => {
		expect(getReducedForm(EQUATIOS[20].eq)).toBe(EQUATIOS[20].rf);
	});

	it(EQUATIOS[21].eq, () => {
		expect(getReducedForm(EQUATIOS[21].eq)).toBe(EQUATIOS[21].rf);
	});
});