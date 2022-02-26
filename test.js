const { stringLength, reverseString, makeCamelCase} = require("./stringFunction.js")
const calculatorFunction = require("./calculatorFunction.js")

//Task 1
describe('Checking string length', () => {
    test('Check length of string', () => {
        expect(stringLength("charlesene")).toBe(10)
    })

    test('Check if string length is lower than 1', () => {
        expect(()=> stringLength('')).toThrow("String size inconsistency");
    });

    test('Check if string length is greater than 10', () => {
        expect(()=> stringLength('stringstring')).toThrow("String size inconsistency");
    });
})

//Task 2
describe('check if strings are reversed', () => {
    test('Check if string is reversed', () => {
        expect(reverseString('string')).toBe('gnirts')
    });
    test('Check if string is reversed', () => {
        expect(reverseString('charles')).toBe('selrahc')
    });
})

//Task 3
let caculating = new calculatorFunction;

describe('Calculator chcker', () => {
    describe("Addition check", () => {
        test('Check if number correctly added', () => {
            expect(caculating.add(2, 3)).toBe(5)
        })

        test('Check if number correctly added', () => {
            expect(caculating.add(10, 34)).toBe(44)
        })

        test('Check if number correctly added', () => {
            expect(caculating.add(6, 4)).toBe(10)
        })
    })

    describe("Subtraction check", () => {
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 2)).toBe(1)
        })
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 3)).toBe(0)
        })
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 10)).toBe(-7)
        })
    })

    describe("Multiplication check", () => {
        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(3, 2)).toBe(6)
        })

        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(5, 2)).toBe(10)
        })

        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(10, 2)).toBe(20)
        })
    })

    describe("Deviding check", () => {
        test('Check if number correctly divided', () => {
            expect(caculating.divide(10, 2)).toBe(5)
        })
        test('Check if number correctly divided', () => {
            expect(caculating.divide(20, 2)).toBe(10)
        })
        test('Check if number correctly divided', () => {
            expect(caculating.divide(30, 2)).toBe(15)
        })
    })
})

//Task 4
test('Change to camel case function', () => {
    expect(makeCamelCase("gOvERnMenT")).toBe("Government")
})