// Variables
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const acButton = document.querySelector('[data-ac]');
const clearButton = document.querySelector('[data-clear]');
const enterButton = document.querySelector('#enter');
const previous = document.querySelector('#previous');
const current = document.querySelector('p#current');
let currentValue = '';
let previousValue = '';
let operation;
let result;

// Arithmatic Operations
function add(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (a + b);
}

function subtract(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (a - b);
}

function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (a * b);
}

function divide(a,b) {
    if (parseFloat(b) === 0) {
        return 'ERROR';
    }
    a = parseFloat(a);
    b = parseFloat(b);
    return (a / b);
}

// Calculator Functions
function workingValue() {
    if (currentValue.includes('.')) {
        numbers[10].disabled = true;
    }
    if (currentValue.length > 9) {
        numbers.forEach(button => {
            button.disabled = true;
        })
    }
    current.textContent += this.textContent;
    currentValue = current.textContent;
}

function operate() {
    if (currentValue !== null) {
        previous.textContent = `${currentValue} ${this.dataset.operation}`;
        operation = this.dataset.operation;
        previousValue = currentValue
        clearCurrent();
        currentValue = '';
        numbers[10].disabled = false;
    }
}

function enter() {
    if (operation === '+' && currentValue !== '') {
        result = add(previousValue,currentValue);
        previous.textContent = result;
        current.textContent = '';
    } else if (operation === '-' && currentValue !== '') {
        result = subtract(previousValue,currentValue);
        previous.textContent = result;
        current.textContent = '';
    } else if (operation === '*' && currentValue !== '') {
        result = multiply(previousValue,currentValue);
        previous.textContent = result;
        current.textContent = '';
    } else if (operation === '/' && currentValue !== '') {
        result = divide(previousValue,currentValue);
        previous.textContent = result;
        current.textContent = '';
    }
    previousValue = previous.textContent;
    currentValue = previousValue;
    previousValue = '';
    operation = '';
    numbers[10].disabled = false
}

function clearCurrent() {
    numbers[10].disabled = false
    currentValue = '';
    current.textContent = '';
}

function allClear() {
    numbers[10].disabled = false;
    currentValue = '';
    current.textContent = '';
    previousValue = '';
    previous.textContent = '';
    operation = '';
}

// Listeners
numbers.forEach(button => {
    button.addEventListener('click', workingValue)
});

operators.forEach(button => {
    button.addEventListener('click', operate)
});
acButton.addEventListener('click', allClear);
clearButton.addEventListener('click', clearCurrent);
enterButton.addEventListener('click', enter);