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

// Arithmatic Operations
function enableDecimal() {
        numbers[10].disabled = false;
}

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
    if (currentValue.length >= 9) {
        numbers.forEach(button => button.disabled = true)
    }
    current.textContent += this.textContent;
    currentValue = current.textContent;
}

function operate() {
    if (currentValue !== null) {
        previous.textContent = `${currentValue} ${this.dataset.operation}`;
        operation = this.dataset.operation;
        previousValue = currentValue
        current.textContent = '';
        currentValue = '';
        enableDecimal();
    }
}

function enter() {
    if (previousValue === '' || previousValue === null) {
        previousValue = '';
        return;
    } else if (operation === '+' && currentValue !== '') {
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
    enableDecimal()
}
    if (currentValue.length < 9) {
        numbers.forEach(button => button.disabled = false)
    }
}

function allClear() {
    numbers.forEach(button => button.disabled = false);
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
backButton.addEventListener('click', backSpace);
enterButton.addEventListener('click', enter);