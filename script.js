//functions for calculator operations

const add = (a, b) => (a + b);

const subtract = (a, b) => (a - b);

const multiply = (a, b) => (a * b);

const divide = (a, b) => (a / b);

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
and displayNum is a string of the text content of the 
number buttons */

const numList = document.querySelectorAll('.number');

const inputDisplay = document.querySelector('.lowtext');

const decimal = document.querySelector('.decimal');

let displayNum = '';

let aNumber = null;

let operatorInput = '';

let bNumber = null;

let answer = null;

let isDecimal = false;

/*The following forEach loop, loops over each button in the numList
and assigns a string value of the button number to the displayNum
string, then that string is displayed on the calculator's text content
and lastly the displayNum is converted to a number and stored in the 
number placeholder variable. */

numList.forEach(button => {
    button.addEventListener('click', (e) => {
        if(isDecimal === true && button.textContent === '.') {
            return alert('Can only enter one decimal.');
        }

        if(operatorInput !== '') {
            displayNum = displayNum + button.textContent;
            inputDisplay.textContent = displayNum;
            bNumber = parseFloat(displayNum);
        } else {
            displayNum = displayNum + button.textContent;
            inputDisplay.textContent = displayNum;
            aNumber = parseFloat(displayNum);
        }

        if(displayNum.length > 14) {
            return alert('Input number can be no larger than 15 digits!');
        }
    });
});

decimal.addEventListener('click', (e) => {
    isDecimal = true;
});

//operator functions

const operatorList = document.querySelectorAll('.operator');

const topDisplay = document.querySelector('.hightext');

operatorList.forEach(button => {
    button.addEventListener('click', (e) => {
        if(operatorInput !== null && aNumber !== null && bNumber !== null) {
            answer = operate(aNumber, bNumber, operatorInput);
            inputDisplay.textContent = `${answer}`;
            topDisplay.textContent = `${answer} ${button.textContent}`;
            aNumber = answer;
            answer = null;
            bNumber = null;
            isDecimal = false;
            displayNum = '';
            operatorInput = button.textContent;
        }
        
        if(bNumber !== null) {
            operatorInput = button.textContent;
            topDisplay.textContent = `${aNumber} ${operatorInput}`;
        } else if(operatorInput === '' && aNumber !== null){
            operatorInput = button.textContent;
            topDisplay.textContent = `${aNumber} ${operatorInput}`;
            inputDisplay.textContent = '';
            displayNum = '';
            isDecimal = false;
        }
    });
});

//equals functions

const equalsSign = document.querySelector('.equals');

equalsSign.addEventListener('click', (e) => {
    topDisplay.textContent = `${aNumber} ${operatorInput} ${bNumber} ${equalsSign.textContent}`;
    answer = operate(aNumber, bNumber, operatorInput);
    inputDisplay.textContent = `${answer}`;
    isDecimal = false;
    aNumber = null;
    bNumber = null;
    operatorInput = '';
    displayNum = '';
});

//backspace function

const backSpace = document.querySelector('.delete');

backSpace.addEventListener('click', (e) => {
    if(displayNum.length > 0) {
        displayNum = displayNum.slice(0, displayNum.length - 1);
        inputDisplay.textContent = `${displayNum}`;
    }

    if(topDisplay.textContent.includes(`${aNumber}`) === true) {
        bNumber = parseFloat(displayNum);
    } else {
        aNumber = parseFloat(displayNum);
    }
});

/*clearScreen even listener takes the reference to the button element
with class clear and when that button is clicked resets the textContent
on the whole display of the calculator screen, the displayNum variable
and the number variable */

const clearScreen = document.querySelector('.clear');

clearScreen.addEventListener('click', (e) => {
    inputDisplay.textContent = '';
    topDisplay.textContent = '';
    displayNum = '';
    operatorInput = '';
    aNumber = null;
    bNumber = null;
    isDecimal = false;
});