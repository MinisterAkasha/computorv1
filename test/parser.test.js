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
    0: {
		eq: '-534 - 4.2 * X^2 + 3 * X + 500 = 4 * X^2 + 2.5 * X',
	    rf: '-8.2 * X^2 + 0.5 * X - 34 = 0',
	    solutions: {
			x1: '0.0304878 - 2.03603 * i',
		    x2: '0.0304878 + 2.03603 * i',
	    },
    },
    1: {
		eq: '10 * X^2 + X^1 + 15 * X^0 = 0',
	    rf: '10 * X^2 + X + 15 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    2: {
		eq: 'X^2 + X^1 + X^0 = 0',
	    rf: 'X^2 + X + 1 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    3: {
		eq: '5 * X^2 + 10 * X^1 + 15 * X^0 = 0',
	    rf: '5 * X^2 + 10 * X + 15 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    4: {
		eq: '5 * X^2 + 10 * X^1 + 15 = 0',
	    rf: '5 * X^2 + 10 * X + 15 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    5: {
		eq: 'X^2 + 10 = 10',
	    rf: 'X^2 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    6: {
		eq: '10 = 10',
	    rf: '0 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    7: {
		eq: '10 * X^0 = 10 * X^0',
	    rf: '0 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    8: {
		eq: '2 * X^2 - 3 * X^1 - 10 * X^0 = -2 * X^2 + 5 * X^1 + 10 * X^0',
	    rf: '4 * X^2 - 8 * X - 20 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    9: {
		eq: '2 * X^2 - 3 * X - 10 = -2 * X^2 + 5 * X + 10',
	    rf: '4 * X^2 - 8 * X - 20 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    10: {
		eq: '- 10 * X - 3 * X^2 - 3 = 0',
	    rf: '-3 * X^2 - 10 * X - 3 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    11: {
		eq: '0 * X - 0 * X^2 - 0 = 0',
	    rf: '0 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    12: {
		eq: '- 0 * X - 0 * X^2 - 0 = 0',
	    rf: '0 = 0',
	    solutions: {
		    x1: 0,
		    x2: 0,
	    },
    },
    13: {
		eq: '0 = 10.34 * X^2 - 4.6 * X + 1.1',
	    rf: '-10.34 * X^2 + 4.6 * X - 1.1 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
    14: {
		eq: '0 = 10.3 * X^2 - 4.6 * X - 0.1 + 10.4',
	    rf: '-10.3 * X^2 + 4.6 * X - 10.3 = 0',
	    solutions: {
			x1: 0,
		    x2: 0,
	    },
    },
	15: {
		eq: '10 * X = 10 * X',
		rf: '0 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	16: {
		eq: '10 * X - 10 = 10 * X - 10',
		rf: '0 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	17: {
		eq: '15 * X^2 - 10 * X - 10 = 15 * X^2 - 10 * X - 10',
		rf: '0 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	18: {
		eq: '10 = 10',
		rf: '0 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	19: {
		eq: '10 = 0',
		rf: '10 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	20: {
		eq: '10 * X^0 = 10 * X^0',
		rf: '0 = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
	21: {
		eq: '100 * X^2 - 16 * X + 1 = 100 * X^2 + 16 * X + 1',
		rf: '-32 * X = 0',
		solutions: {
			x1: 0,
		    x2: 0,
	    },
	},
};

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

});