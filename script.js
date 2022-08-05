//functions for calculator operations

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
    } else if(operator === 'x') {
        const product = multiply(a, b);
        return product;
    } else if(operator === '÷') {
        const quotient = divide(a, b);
        return quotient;
    }
};

/*Variable numList is a nodelist of all of the buttons
that display a number, input display is the first portion
of numbers displayed on the calculators that denote the input,
number is a placeholder variable that converts the displayed
number to a number value and displayNum is a string of the 
text content of the number buttons */

const numList = document.querySelectorAll('.number');

const inputDisplay = document.querySelector('.lowtext');

let number = null;

let displayNum = '';

/*The following forEach loop, loops over each button in the numList
and assigns a string value of the button number to the displayNum
string, then that string is displayed on the calculator's text content
and lastly the displayNum is converted to a number and stored in the 
number placeholder variable. */

numList.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNum = displayNum + button.textContent;
        inputDisplay.textContent = displayNum;
        number = parseInt(displayNum);
        if(displayNum.length > 14) {
            alert('Input number can be no larger than 14 digits!');
            return;
        }
    });
});

//operator functions

// const operatorList = document.querySelectorAll('.operator');

// const topDisplay = document.querySelectorAll('.hightext');

// operatorList.forEach(button => {
//     button.addEventListener('click', (e) => {
        
//     });
// });

/*clearScreen even listener takes the reference to the button element
with class clear and when that button is clicked resets the textContent
on the whole display of the calculator screen, the displayNum variable
and the number variable */

const clearScreen = document.querySelector('.clear');

clearScreen.addEventListener('click', (e) => {
    inputDisplay.textContent = '';
    topDisplay.textContent = '';
    displayNum = '';
    number = null;
});