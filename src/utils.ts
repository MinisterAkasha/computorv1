import {abs, floor, gcd, round} from "./math";

export const decimalToFraction = (value: string | number, limit = 5) => {
    const data = Number(value);

    const intVal = floor(data);

    const fVal = data - intVal;
 
    const pVal = 1000000000;
 
    const gcdVal = gcd(round(fVal * pVal), pVal);

    const num1 = round(fVal * pVal) / gcdVal;
    const deno = pVal / gcdVal;

	if (limit && String(deno).length > limit) {
		return String(value);
	}

	const numerator = (intVal * deno) + num1;
	const needChangeSign = numerator < 0 && deno < 0;
	const nonInteger = needChangeSign ? `${abs(numerator)}/${abs(deno)}` : `${numerator}/${deno}`;

    return deno === 1
		? `${(intVal * deno) + num1}`
		: nonInteger
}
