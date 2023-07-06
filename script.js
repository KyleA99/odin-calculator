// Never use eval() function.
// Dont return a new Function() that evaluates a string either (potential fo rinsecure data)

let a = 1;
let b = 2;
console.log(a);
console.log(b);

function addVariables(a, b) {
    return a + b;
}
console.log(addVariables(a, b));

function subtractVariables(a, b) {
    return a - b;
}
console.log(subtractVariables(a, b));

function multiplyVariables(a, b) {
    return a * b;
}
console.log(multiplyVariables(a, b));

function divideVariables(a, b) {
    return a / b;
}
console.log(divideVariables(a, b));