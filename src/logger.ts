export enum ELogType {
	POSITIVE_DISCRIMINANT= 'Discriminant is strictly positive, the two solutions are:',
	ZERO_DISCRIMINANT = 'Discriminant is equal zero, the only solutions is:',
	REDUCED_FORM = 'Reduced form: ',
	TOO_MUCH_DEGREE = 'The polynomial degree is strictly greater than 2, I can\'t solve.',
	RIGHT_DEGREE = 'Polynomial degree: ',
}

export const Logger = {
	logReducedForm: (form: string) => {
		console.log(ELogType.REDUCED_FORM, form);
	},
	logPolynomialDegree: (power: string) => {
		console.log(ELogType.RIGHT_DEGREE, power);
	},
	logTooMushDegree: () => {
		console.log(ELogType.TOO_MUCH_DEGREE);
	}
};