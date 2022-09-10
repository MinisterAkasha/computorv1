import {Coefficients} from "./equation";

export enum ELogType {
	POSITIVE_DISCRIMINANT= 'Discriminant is strictly positive =',
	NEGATIVE_DISCRIMINANT= 'Discriminant is strictly negative =',
	ZERO_DISCRIMINANT = 'Discriminant is equal zero',
	TWO_SOLUTIONS = 'The two solutions are:',
	ONLY_SOLUTION = 'The only solutions is:',
	INFINITY_SOLUTIONS = 'Each real number is a solution',
	NO_SOLUTION = 'This polynomial has no solutions',
	REDUCED_FORM = 'Reduced form: ',
	TOO_MUCH_DEGREE = 'The polynomial degree is strictly greater than 2, I can\'t solve.',
	RIGHT_DEGREE = 'Polynomial degree: ',
	COEFFICIENTS = 'The coefficient of the polynomial: ',
}

export class Logger {
	private log;
	private table;

	constructor() {
		this.log = process.env.NODE_ENV === 'test' ? () => {} : console.log;
		this.table = process.env.NODE_ENV === 'test' ? () => {} : console.table;
	}

	logReducedForm(form: string) {
		this.log(ELogType.REDUCED_FORM, form);
	}

	logPolynomialDegree(power: number) {
		this.log(ELogType.RIGHT_DEGREE, power);
	}

	logTooMushDegree() {
		this.log(ELogType.TOO_MUCH_DEGREE);
	}

	logCoefficients({a, b, c}: Coefficients) {
		this.log(ELogType.COEFFICIENTS);
		this.table([
			{
				coefficient: 'a',
				value: a
			},
			{
				coefficient: 'b',
				value: b
			},
			{
				coefficient: 'c',
				value: c
			}
		]);
	}

	logDiscriminant(discriminant: number) {
		if (discriminant > 0) {
			this.log(ELogType.POSITIVE_DISCRIMINANT, discriminant)
		} else if (discriminant === 0) {
			this.log(ELogType.ZERO_DISCRIMINANT);
		} else {
			this.log(ELogType.NEGATIVE_DISCRIMINANT, discriminant);
		}
	}

	logSolutions(solutions: Array<string | number>) {
		const solutionCount = solutions.length;

		if (solutions[0] === Infinity) {
			this.log(ELogType.INFINITY_SOLUTIONS);

			return;
		} else if (solutions[0] === -Infinity) {
			this.log(ELogType.NO_SOLUTION);

			return;
		}

		if (solutionCount === 1) {
			this.log(ELogType.ONLY_SOLUTION);
			this.log(solutions[0]);

			return;
		}

		this.log(ELogType.TWO_SOLUTIONS);
		solutions.forEach((solution) => {
			this.log(solution);
		})
	}

	logError(error: any) {
		this.log('Error:', error);
	}
};

export const logger = new Logger();