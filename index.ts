#!/usr/bin/node
"use strict"
import { ParsedDataType, parser } from './src/parcer';

const toPositive = (num: number) => num > 0 ? num : num * -1;

const generateReducedForm = (data: ParsedDataType) => {
    const powers = Object.keys(data);

    let result = powers.reduce((acc, curr) => {
        const { power, multiplier } = data[curr];
        const sign = multiplier > 0 ? '+' : '-';

        acc += multiplier ? ` ${sign} ${toPositive(multiplier)} * X^${power}` : '';

        return acc;
    }, '');

    result += ' = 0'
    result = result.trim().replace(/^[\+]? /g, '');
    
    return result;
}

const app = () => {
    const args = process.argv.slice(2);
    const a = parser.parse();

    console.log('data', parser.getData());
    
    // console.log(generateReducedForm(parser.getData()))


}

app();

// npx ts-node index.ts
