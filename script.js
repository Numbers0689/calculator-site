let numA, numB, operator;
const display = document.querySelector('#display');
const one = document.querySelector('.num.1');

one.addEventListener('click', () => {
    display.textContent = "1";
    console.log("works");
})

display.textContent = "455435";

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        
        case "-":
            return subtract(a, b);
        
        case "*":
            return multiply(a, b);
        
        case "/":
            return divide(a, b);

        default:
            return "Invalid";
    }
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

// console.log(add(11, 14));
// console.log(add(11.5, 13.5));
// console.log(subtract(11, 14));
// console.log(subtract(11.5, 13.5));
// console.log(multiply(11, 14));
// console.log(multiply(11.5, 13.5));
// console.log(divide(11, 14));
// console.log(divide(11.5, 13.5));
