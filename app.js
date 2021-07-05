// Variables
// const buttons = document.querySelectorAll('.button');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const enter = document.getElementById('enter');
const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const inputDisplay = document.getElementById('input')
const resultDisplay = document.getElementById('result')

// Basic Arithmetic Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'ERROR';
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Event Listeners
zero.addEventListener('click', () => console.log(0));
one.addEventListener('click', () => console.log(1));
two.addEventListener('click', () => console.log(2));
three.addEventListener('click', () => console.log(3));
four.addEventListener('click', () => console.log(4));
five.addEventListener('click', () => console.log(5));
six.addEventListener('click', () => console.log(6));
seven.addEventListener('click', () => console.log(7));
eight.addEventListener('click', () => console.log(8));
nine.addEventListener('click', () => console.log(9));