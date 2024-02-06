const calculator = require('./calculator');

test('sum of two numbers', () => {
    let a = 10;
    let b = 15;

    expect(calculator.sum(a, b)).toBe(25);
});

test('subtraction of two numbers', () => {
    let a = 8;
    let b = 4;

    expect(calculator.subtraction(a, b)).toBe(4);
});

test('division of two numbers', () => {
    let a = 30;
    let b = 2;

    expect(calculator.division(a, b)).toBe(15);
});

test('multiplication of two numbers', () => {
    let a = 9;
    let b = 3;

    expect(calculator.multiplication(a, b)).toBe(27);
});