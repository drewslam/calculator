// Variables
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const acButton = document.querySelector('[data-ac]');
const backButton = document.querySelector('[data-clear]');
const enterButton = document.querySelector('#enter');
const previous = document.querySelector('p#previous');
const current = document.querySelector('p#current');
let currentValue = '';
let previousValue = '';
let operation;
let result;

// Editing Functions
const enableDecimal = () => numbers[10].disabled = false;
const disableDecimal = () => numbers[10].disabled = true;
const clearCurrentValue = () => {
    current.textContent = '';
    currentValue = '';
}
const enableButtons = () => numbers.forEach(button => button.disabled = false);
const disableButtons = () => numbers.forEach(button => button.disabled = true);

// Arithmatic Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'ERROR' : (a / b);

// Calculator Functions
function workingValue() {
    if (currentValue.includes('.')) {
        disableDecimal();
    }
    if (currentValue.length >= 9) {
        disableButtons();
    }
    current.textContent += this.textContent;
    currentValue = current.textContent;
}

function arithmaticOperator() {
    if (currentValue !== null) {
        previous.textContent = `${currentValue} ${this.dataset.operation}`;
        operation = this.dataset.operation;
        previousValue = currentValue
        clearCurrentValue();
        enableButtons();
    }
}

function enter() {
    if (previousValue === '' || previousValue === null) {
        previous.textContent = '';
        return;
    } else if (currentValue !== '') {
        previousValue = parseFloat(previousValue);
        currentValue = parseFloat(currentValue);
        if (operation === '+') {
            result = add(previousValue, currentValue);
        } else if (operation === '-') {
            result = subtract(previousValue, currentValue);
        } else if (operation === '*') {
            result = multiply(previousValue, currentValue);
        } else if (operation === '/') {
            result = divide(previousValue, currentValue);
        }
        previous.textContent = result;
        current.textContent = '';
    } else if (operation === '' || operation === null) {
        return;
    }
    previousValue = previous.textContent;
    currentValue = previous.textContent;
    previousValue = '';
    operation = '';
    enableDecimal();
}

function backSpace() {
    current.textContent = currentValue.slice(0, currentValue.length - 1);
    currentValue = current.textContent;
    if (!currentValue.indexOf('.')) {
        enableDecimal();
    }
    if (currentValue.length < 9) {
        enableButtons();
    }
}

function allClear() {
    enableButtons();
    clearCurrentValue();
    previousValue = '';
    previous.textContent = '';
    operation = '';
}

// Listeners
numbers.forEach(button => {
    button.addEventListener('click', workingValue);
});

operators.forEach(button => {
    button.addEventListener('click', arithmaticOperator);
});
acButton.addEventListener('click', allClear);
backButton.addEventListener('click', backSpace);
enterButton.addEventListener('click', enter);