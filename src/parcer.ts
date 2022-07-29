const last1 = require('./utils/last');

interface IParces {
    args: string;
    parse(): void;
}

type SignType = '-' | '+';
enum EqualityRelativePosition {
    AFTER = 'AFTER',
    BEFORE = 'BEFORE',
}

interface PreParsedDataType {
    value: string;
    position: boolean;
}

interface ParsedDataType {
    // [key: number]: {
        power: number;
        sign: '-' | '+',
        multiplier?: number;
        divider?: number;
        position: boolean;
    // };
}

enum Signs {
    PLUS = '+',
    MINUS = '-',
    DIVISION = '/',
    MULTIPLICATION = '*',
    EQUALITY = '=',
}

class Parser {
    args: string;

    constructor(args: string[]) {
        this.args = this.prepareArgs(args);
    }

    private prepareArgs(args: string | string[]) {
        let result = '';

        if (Array.isArray(args)) {
            result = args.join('');
        } else {
            result = args;
        }

        return result.replace(/\s/gi, '');
    }

    private getPower(variable: string): number {
        return variable.includes('^') ? parseInt(variable.slice(2)) : 1;
    }

    parse(): void {
        const regexp = /([-]?\d+[\.\d]*)|(\*|\+|\/|\-|\=)|(X(\^\d|))/gi;

        let stack: string[] = [];
        const data: any[] = [];
        const aaaa: ParsedDataType[] = [];

        let foundEqualitySign = false;
        let isVariable = false;
        let result = regexp.exec(this.args);

        console.log(this.args.split(`^`).join(`**`));

        while (result) {
            const match = result[0];
            console.log( `Найдено ${result[0]} на позиции ${result.index}` );

            data.push(match);

            // if (match.includes('X')) {
            //     isVariable = true;
            // }

            // if (match === Signs.PLUS || match === Signs.MINUS || !isNaN(parseInt(match))) {
                // stack.push(match);
            // }



            // if (stack.length === 2) {
            //     const a = parseFloat(stack.join(''));
            //     stack.length = 0;

            //     if (!isNaN(a)) {
            //         const b: ParsedDataType = {
            //             power: 0,
            //             position: foundEqualitySign,
            //             sign: a > 0 ? '+' : '-',
            //             multiplier: a,
            //         };
            //         data[data.length] = b;
            //     }
            // }

            // if (result[0] === Signs.EQUALITY) {
            //     foundEqualitySign = true;
            // }

            result = regexp.exec(this.args);
        }

        for (let i = 0; i < data.length - 1; i++) {
            if (data[i] === Signs.EQUALITY) {
                foundEqualitySign = true;
            }

            if (!isNaN(parseFloat(data[i])) && ![Signs.MULTIPLICATION, Signs.DIVISION].includes(data[i + 1]) ) {
                aaaa.push({
                    power: 0,
                    sign: '+',
                    position: foundEqualitySign,
                    multiplier: data[i],
                })
            }
        }

        console.log('data', data);
        console.log('aaaa', aaaa);
        
    }
}

module.exports = new Parser(process.argv.slice(2));