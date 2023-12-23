let numA, numB, operator;

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        
        case "-":
            return subtract(a, b);
            break;
        
        case "*":
            return multiply(a, b);
            break;
        
        case "/":
            return divide(a, b);
            break;

        default:
            return "Invalid";
            break;
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

console.log(add(11, 14));
console.log(add(11.5, 13.5));
console.log(subtract(11, 14));
console.log(subtract(11.5, 13.5));
console.log(multiply(11, 14));
console.log(multiply(11.5, 13.5));
console.log(divide(11, 14));
console.log(divide(11.5, 13.5));
