let numA="", numB="", operator="", temp="";
const display = document.querySelector('#display');
const prev = document.querySelector('#prev');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multiply');
const divid = document.querySelector('#divide');
const equal = document.querySelector('#last');
const decimal = document.querySelector('#decimal');
const del = document.querySelector('#del');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percentage');

clear.addEventListener('click', () => {
    temp = "";
    numA = "";
    numB = "";
    operator = "";
    display.textContent = temp;
    prev.textContent = "";
});

del.addEventListener('click', () => {
    temp = temp.toString().slice(0, -1);
    display.textContent = temp;
});

decimal.addEventListener('click', () => {
    if (!temp.includes(".")){
        temp += ".";
        display.textContent = temp;
    }
});

plus.addEventListener('click', () => {
    numA = temp;
    temp = "";
    operator = "+";
    display.textContent = temp;
    if(numA !== "") prev.textContent = numA+operator;
});

minus.addEventListener('click', () => {
    numA = temp;
    temp = "";
    operator = "-";
    display.textContent = temp;
    if(numA !== "") prev.textContent = numA+operator;
});

multi.addEventListener('click', () => {
    numA = temp;
    temp = "";
    operator = "*";
    display.textContent = temp;
    if(numA !== "") prev.textContent = numA+operator;
});

divid.addEventListener('click', () => {
    numA = temp;
    temp = "";
    operator = "/";
    display.textContent = temp;
    if(numA !== "") prev.textContent = numA+operator;
});

equal.addEventListener('click', () => {
    numB = temp;
    if (operator === "/" && numB == 0)
    {
        display.textContent = "ERROR";
        
    }
    else
    {
        temp = operate(Number(numA), Number(numB), operator);
        operator = "";
        prev.textContent = "";
        if (temp.toString().includes("."))
        {
            display.textContent = temp.toFixed(9);
            console.log("ee");
        }
        else
        {
            display.textContent = temp;

        }
    }
});


one.addEventListener('click', () => {
    temp += "1";
    display.textContent = temp;
});

two.addEventListener('click', () => {
    temp += "2";
    display.textContent = temp;
});

three.addEventListener('click', () => {
    temp += "3";
    display.textContent = temp;
});

four.addEventListener('click', () => {
    temp += "4";
    display.textContent = temp;
});

five.addEventListener('click', () => {
    temp += "5";
    display.textContent = temp;
});

six.addEventListener('click', () => {
    temp += "6";
    display.textContent = temp;
});

seven.addEventListener('click', () => {
    temp += "7";
    display.textContent = temp;
});

eight.addEventListener('click', () => {
    temp += "8";
    display.textContent = temp;
});

nine.addEventListener('click', () => {
    temp += "9";
    display.textContent = temp;
});

zero.addEventListener('click', () => {
    temp += "0";
    display.textContent = temp;
});


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
            return "";
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

