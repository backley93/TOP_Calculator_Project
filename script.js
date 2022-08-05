const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(a, b, operator) {
    if(operator === '+') {
       const sum = add(a, b);
       return sum;
    } else if(operator === '-') {
       const difference = subtract(a, b);
       return difference;
    } else if(operator === '*') {
        const product = multiply(a, b);
        return product;
    } else if(operator === '/') {
        const quotient = divide(a, b);
        return quotient;
    }
};