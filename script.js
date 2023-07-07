// Never use eval() function.
// Dont return a new Function() that evaluates a string either (potential fo rinsecure data)

let firstNumber = "";
let secondNumber = "";
let operator = ["+", "-", "*", "/"];

function addVariables(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// console.log(addVariables(a, b));

function subtractVariables(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// console.log(subtractVariables(a, b));

function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// console.log(multiplyVariables(a, b));

function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// console.log(divideVariables(a, b));