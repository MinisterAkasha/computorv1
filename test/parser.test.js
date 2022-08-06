import { Parser } from '../src/parcer';

const parserTestTemplate = (equation, {power0, power1, power2}) => {
    const parser = new Parser(equation);
    parser.parse();
    const parsedData = parser.getData();
    
    expect(parsedData).toEqual(setExpectedData({power0, power1, power2}))
}

const setExpectedData = ({ power0, power1, power2 }) => {
    return {
        0: power0,
        1: power1,
        2: power2,
    }
}

export const EQUATIOS = {
    0: '-534 - 4.2 * X^2 + 3 * X + 500 = 4 * X^2 + 2.5 * X',
    1: '10 * X^2 + X^1 + 15 * X^0 = 0',
    2: 'X^2 + X^1 + X^0 = 0',
    3: '5 * X^2 + 10 * X^1 + 15 * X^0 = 0',
    4: '5 * X^2 + 10 * X^1 + 15 = 0',
    5: 'X^2 + 10 = 10',
    6: '10 = 10',
    7: '10 * X^0 = 10 * X^0',
    8: '2 * X^2 - 3 * X^1 - 10 * X^0 = -2 * X^2 + 5 * X^1 + 10 * X^0',
    9: '2 * X^2 - 3 * X - 10 = -2 * X^2 + 5 * X + 10',
    10: '- 10 * X - 3 * X^2 - 3 = 0',
    11: '0 * X - 0 * X^2 - 0 = 0',
    12: '- 0 * X - 0 * X^2 - 0 = 0',
    13: '0 = 10.34 * X^2 - 4.6 * X + 1.1',
    14: '0 = 10.3 * X^2 - 4.6 * X - 0.1 + 10.4',
	15: '10 * X = 10 * X',
	16: '10 * X - 10 = 10 * X - 10',
	17: '15 * X^2 - 10 * X - 10 = 15 * X^2 - 10 * X - 10',
	18: '10 = 10',
	19: '10 = 0',
	20: '10 * X^0 = 10 * X^0',
	21: '100 * X^2 - 16 * X + 1 = 100 * X^2 + 16 * X + 1',
};

describe('Parser tests', () => {

    test(EQUATIOS[0], () => {
      parserTestTemplate(EQUATIOS[0],
        {
            power0: {
                power: 0,
                multiplier: -34,
            }, 
            power1: {
                power: 1,
                multiplier: 0.5,
            },
            power2: {
                power: 2,
                multiplier: -8.2,
            }
        }
        )
    });

    test(EQUATIOS[1], () => {
        parserTestTemplate(EQUATIOS[1],
            {
                power0: {
                    power: 0,
                    multiplier: 15,
                }, 
                power1: {
                    power: 1,
                    multiplier: 1,
                },
                power2: {
                    power: 2,
                    multiplier: 10,
                }
            }
      )
    })

    test(EQUATIOS[2], () => {
        parserTestTemplate(EQUATIOS[2],
            {
                power0: {
                    power: 0,
                    multiplier: 1,
                }, 
                power1: {
                    power: 1,
                    multiplier: 1,
                },
                power2: {
                    power: 2,
                    multiplier: 1,
                }
            }
      )
    })

    test(EQUATIOS[3], () => {
        parserTestTemplate(EQUATIOS[3],
            {
                power0: {
                    power: 0,
                    multiplier: 15,
                }, 
                power1: {
                    power: 1,
                    multiplier: 10,
                },
                power2: {
                    power: 2,
                    multiplier: 5,
                }
            }
      )
    })

    test(EQUATIOS[4], () => {
        parserTestTemplate(EQUATIOS[4],
            {
                power0: {
                    power: 0,
                    multiplier: 15,
                }, 
                power1: {
                    power: 1,
                    multiplier: 10,
                },
                power2: {
                    power: 2,
                    multiplier: 5,
                }
            }
      )
    })

    test(EQUATIOS[5], () => {
        parserTestTemplate(EQUATIOS[5],
            {
                power2: {
                    power: 2,
                    multiplier: 1,
                }
            }
      )
    })

    test(EQUATIOS[6], () => {
        parserTestTemplate(EQUATIOS[6],
            {}
      )
    })

    test(EQUATIOS[7], () => {
        parserTestTemplate(EQUATIOS[7],
            {}
      )
    })
    
    test(EQUATIOS[8], () => {
        parserTestTemplate(EQUATIOS[8],
            {
                power0: {
                    power: 0,
                    multiplier: -20,
                }, 
                power1: {
                    power: 1,
                    multiplier: -8,
                },
                power2: {
                    power: 2,
                    multiplier: 4,
                }
            }
      )
    })

    test(EQUATIOS[9], () => {
        parserTestTemplate(EQUATIOS[9],
            {
                power0: {
                    power: 0,
                    multiplier: -20,
                }, 
                power1: {
                    power: 1,
                    multiplier: -8,
                },
                power2: {
                    power: 2,
                    multiplier: 4,
                }
            }
      )
    })

    test(EQUATIOS[10], () => {
        parserTestTemplate(EQUATIOS[10],
            {
                power0: {
                    power: 0,
                    multiplier: -3,
                }, 
                power1: {
                    power: 1,
                    multiplier: -10,
                },
                power2: {
                    power: 2,
                    multiplier: -3,
                }
            }
      )
    })
    
    test(EQUATIOS[11], () => {
        parserTestTemplate(EQUATIOS[11],
            {}
      )
    })

    test(EQUATIOS[12], () => {
        parserTestTemplate(EQUATIOS[12],
            {}
      )
    })

    test(EQUATIOS[13], () => {
        parserTestTemplate(EQUATIOS[13],
            {
                power0: {
                    power: 0,
                    multiplier: -1.1,
                }, 
                power1: {
                    power: 1,
                    multiplier: 4.6,
                },
                power2: {
                    power: 2,
                    multiplier: -10.34,
                }
            }
      )
    })

    test(EQUATIOS[14], () => {
        parserTestTemplate(EQUATIOS[14],
            {
                power0: {
                    power: 0,
                    multiplier: -10.3,
                }, 
                power1: {
                    power: 1,
                    multiplier: 4.6,
                },
                power2: {
                    power: 2,
                    multiplier: -10.3,
                }
            }
      )
    })

	test(EQUATIOS[15], () => {
		parserTestTemplate(EQUATIOS[15],
			{}
		)
	})

	test(EQUATIOS[16], () => {
		parserTestTemplate(EQUATIOS[16],
			{}
		)
	})

	test(EQUATIOS[17], () => {
		parserTestTemplate(EQUATIOS[17],
			{}
		)
	})

	test(EQUATIOS[18], () => {
		parserTestTemplate(EQUATIOS[18],
			{}
		)
	})

	test(EQUATIOS[19], () => {
		parserTestTemplate(EQUATIOS[19],
			{
				power0: {
					power: 0,
					multiplier: 10,
				}
			}
		)
	})

	test(EQUATIOS[20], () => {
		parserTestTemplate(EQUATIOS[20],
			{}
		)
	})

	test(EQUATIOS[21], () => {
		parserTestTemplate(EQUATIOS[21],
			{
				power1: {
					power: 1,
					multiplier: -32,
				}
			}
		)
	})

});