interface ParsedDataTypeObj {
    power: number;
    multiplier?: number;
    position: boolean;
}

export interface ParsedDataType {
    [key: number]: Omit<ParsedDataTypeObj, 'position'>;
}

enum Signs {
    PLUS = '+',
    MINUS = '-',
    DIVISION = '/',
    MULTIPLICATION = '*',
    EQUALITY = '=',
}

export class Parser {
    args: string;
    data: ParsedDataType;

    static onlyDigit = /^\d+$/g;

    constructor(args: string[]) {
        this.args = this.prepareArgs(args);
        this.data = {};
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

    private setData(index: number, { multiplier, position, ...data }: ParsedDataTypeObj) {
        const calculatedMultiplier = parseFloat((multiplier as unknown as string) || '0');

        this.data[index] = {
            ...data,
            multiplier: (this.data[index]?.multiplier || 0) + (position ? calculatedMultiplier * -1 : calculatedMultiplier),
        };
    }

    private parseSide(side: string, position: boolean) {
        const regexp = /(([+-]?(\d+[\.\d]*))\*|)X(\^[0-9]|)|([-]?\d+[\.\d]*)/gi;

        let result = regexp.exec(side);

        while (result) {
            const match = result[0];

            console.log('match', match);
            

            if (!match.includes('X')) {
                this.setData(0, {
                    power: 0,
                    position,
                    multiplier: match as any,
                });
            } else {
                const sortedVar = match.split(Signs.MULTIPLICATION).sort((a: string) => a.match(Parser.onlyDigit) ? 1 : -1);

                const multiplier = sortedVar.length === 1 ? 1 : sortedVar[1] as any;
                const power = this.getPower(sortedVar[0]);
                
                this.setData(power, {
                    power,
                    multiplier,
                    position,
                })
            }

            result = regexp.exec(side);
        }
    }

    getData() {
        return this.data;
    }

    parse(): void {
        const splitedByEquality = this.args.split(Signs.EQUALITY);
        const leftSide = splitedByEquality[0];
        const rightSide = splitedByEquality[1];

        this.parseSide(leftSide, false);
        this.parseSide(rightSide, true);
    }
}

export const parser = new Parser(process.argv.slice(2));