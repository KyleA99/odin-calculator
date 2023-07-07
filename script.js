// Never use eval() function.
// Dont return a new Function() that evaluates a string either (potential fo rinsecure data)

let firstNumber = 10;
let secondNumber = 3;
let operator = ["+", "-", "*", "/"];

function addVariables(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// console.log(addVariables(firstNumber, secondNumber));

function subtractVariables(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// console.log(subtractVariables(firstNumber, secondNumber));

function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// console.log(multiplyVariables(firstNumber, secondNumber));

function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// console.log(divideVariables(firstNumber, secondNumber));

function operate(firstNumber, secondNumber) {
    let operator = "+";

    if (operator === "+") {
        return addVariables(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtractVariables(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiplyVariables(firstNumber, secondNumber);
    } else {
        return divideVariables(firstNumber, secondNumber);
    }
}
console.log(operate(firstNumber, secondNumber));