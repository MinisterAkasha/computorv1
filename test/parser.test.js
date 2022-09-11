import { Parser } from '../src/parcer';
import {EQUATIOS} from "./data";

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

describe('Parser tests', () => {

    test(EQUATIOS[0].eq, () => {
      parserTestTemplate(EQUATIOS[0].eq,
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

    test(EQUATIOS[1].eq, () => {
        parserTestTemplate(EQUATIOS[1].eq,
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

    test(EQUATIOS[2].eq, () => {
        parserTestTemplate(EQUATIOS[2].eq,
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

    test(EQUATIOS[3].eq, () => {
        parserTestTemplate(EQUATIOS[3].eq,
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

    test(EQUATIOS[4].eq, () => {
        parserTestTemplate(EQUATIOS[4].eq,
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

    test(EQUATIOS[5].eq, () => {
        parserTestTemplate(EQUATIOS[5].eq,
            {
                power2: {
                    power: 2,
                    multiplier: 1,
                }
            }
      )
    })

    test(EQUATIOS[6].eq, () => {
        parserTestTemplate(EQUATIOS[6].eq,
            {}
      )
    })

    test(EQUATIOS[7].eq, () => {
        parserTestTemplate(EQUATIOS[7].eq,
            {}
      )
    })

    test(EQUATIOS[8].eq, () => {
        parserTestTemplate(EQUATIOS[8].eq,
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

    test(EQUATIOS[9].eq, () => {
        parserTestTemplate(EQUATIOS[9].eq,
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

    test(EQUATIOS[10].eq, () => {
        parserTestTemplate(EQUATIOS[10].eq,
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

    test(EQUATIOS[11].eq, () => {
        parserTestTemplate(EQUATIOS[11].eq,
            {}
      )
    })

    test(EQUATIOS[12].eq, () => {
        parserTestTemplate(EQUATIOS[12].eq,
            {}
      )
    })

    test(EQUATIOS[13].eq, () => {
        parserTestTemplate(EQUATIOS[13].eq,
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

    test(EQUATIOS[14].eq, () => {
        parserTestTemplate(EQUATIOS[14].eq,
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

	test(EQUATIOS[15].eq, () => {
		parserTestTemplate(EQUATIOS[15].eq,
			{}
		)
	})

	test(EQUATIOS[16].eq, () => {
		parserTestTemplate(EQUATIOS[16].eq,
			{}
		)
	})

	test(EQUATIOS[17].eq, () => {
		parserTestTemplate(EQUATIOS[17].eq,
			{}
		)
	})

	test(EQUATIOS[18].eq, () => {
		parserTestTemplate(EQUATIOS[18].eq,
			{}
		)
	})

	test(EQUATIOS[19].eq, () => {
		parserTestTemplate(EQUATIOS[19].eq,
			{
				power0: {
					power: 0,
					multiplier: 10,
				}
			}
		)
	})

	test(EQUATIOS[20].eq, () => {
		parserTestTemplate(EQUATIOS[20].eq,
			{}
		)
	})

	test(EQUATIOS[21].eq, () => {
		parserTestTemplate(EQUATIOS[21].eq,
			{
				power1: {
					power: 1,
					multiplier: -32,
				}
			}
		)
	})

	test(EQUATIOS[22].eq, () => {
		parserTestTemplate(EQUATIOS[22].eq,
			{
				power0: {
					power: 0,
					multiplier: 12,
				},
				power1: {
					power: 1,
					multiplier: -84,
				},
				power2: {
					power: 2,
					multiplier: 1,
				}
			}
		)
	})

	test(EQUATIOS[23].eq, () => {
		parserTestTemplate(EQUATIOS[23].eq,
			{
				power0: {
					power: 0,
					multiplier: 12.76,
				},
				power1: {
					power: 1,
					multiplier: -84.245,
				},
				power2: {
					power: 2,
					multiplier: 0.32,
				}
			}
		)
	})

});