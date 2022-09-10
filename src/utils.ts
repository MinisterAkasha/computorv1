// Greatest Common Divisor
const gcd =(a: number,b: number) => {
    if (a == 0)
        return b;
    else if (b == 0)
        return a;
    if (a < b)
        return gcd(a, b % a);
    else
        return gcd(b, a % b);
}

export const decimalToFraction = (num: string | number) => {
    const data = Number(num);

    const intVal = Math.floor(data);
 
    const fVal = data - intVal;
 
    const pVal = 1000000000;
 
    const gcdVal = gcd(Math.round(fVal * pVal), pVal);
 
    const num1 = Math.round(fVal * pVal) / gcdVal;
    const deno = pVal / gcdVal;

    return deno === 1 ? `${(intVal * deno) + num1}` : `(${(intVal * deno) + num1}/${deno})`
}
