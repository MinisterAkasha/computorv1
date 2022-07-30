import { Parser } from '../src/parcer';

const parserTestTemplate = (equation, power0, power1, power2) => {
    const parser = new Parser(equation);
    parser.parse();
    const parsedData = parser.getData();
    
    expect(parsedData).toEqual(setExpectedData(power0, power1, power2))
}

const setExpectedData = (power0, power1, power2) => {
    return {
        0: power0,
        1: power1,
        2: power2,
    }
}

describe('Parser tests', () => {

    test('-534 - 4.2 * X^2 + 3 * X + 500 = 4 * X^2 + 2.5 * X', () => {
      parserTestTemplate('-534 - 4.2 * X^2 + 3 * X + 500 = 4 * X^2 + 2.5 * X', 
            {
                power: 0,
                multiplier: -34,
            }, 
            {
                power: 1,
                multiplier: 0.5,
            },
            {
                power: 2,
                multiplier: -8.2,
            }
        )
    });

    test('10 * X^2 + X^1 + 15 * X^0 = 0', () => {
        parserTestTemplate('10 * X^2 + X^1 + 15 * X^0 = 0',
          {
              power: 0,
              multiplier: 15,
          }, 
          {
              power: 1,
              multiplier: 1,
          },
          {
              power: 2,
              multiplier: 10,
          }
      )
    })

    test('X^2 + X^1 + X^0 = 0', () => {
        parserTestTemplate('X^2 + X^1 + X^0 = 0',
          {
              power: 0,
              multiplier: 1,
          }, 
          {
              power: 1,
              multiplier: 0,
          },
          {
              power: 2,
              multiplier: 0,
          }
      )
    })


});