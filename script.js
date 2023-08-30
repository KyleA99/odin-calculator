let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";
let value = "";
const displayValuesArray = [];

const screen = document.querySelector("#screen");
const screenContent = document.createElement("div");
screenContent.classList.add("screenContent");
screenContent.textContent = initializeEventListeners();
screen.appendChild(screenContent);

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearScreen);

const backspaceButton = document.getElementById("backspace-button");
backspaceButton.addEventListener("click", deleteCharacter);

/**
 * Sets event listeners to assign values to buttons.
 */
function initializeEventListeners() {
    const buttons = [
        { id: "zero-button", value: 0 },
        { id: "one-button", value: 1 },
        { id: "two-button", value: 2 },
        { id: "three-button", value: 3 },
        { id: "four-button", value: 4 },
        { id: "five-button", value: 5 },
        { id: "six-button", value: 6 },
        { id: "seven-button", value: 7 },
        { id: "eight-button", value: 8 },
        { id: "nine-button", value: 9 },
        { id: "add-button", value: "+" },
        { id: "subtract-button", value: "-" },
        { id: "multiply-button", value: "*" },
        { id: "divide-button", value: "÷" },
        { id: "calculate-button", value: "=" },
        { id: "decimal-button", value: "." }
    ];

    buttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        buttonElement.addEventListener("click", function() {
            if (button.value === ".") {
                displayValue(".");
                disableDecimalButton(".");
            } else {
                displayValue(button.value);
            }
        });
    });
}

/**
 * Adds two numbers together and returns the result.
 * @param {number: integer || floating-point} firstNumber - The first number to be added.
 * @param {number: integer || floating-point} secondNumber - The second number to be added.
 * @returns {number: integer || floating-point} The sum of the two numbers.
 */
function addOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber + secondNumber;
}

/**
 * Subtracts the second number from the first number and returns the result.
 * @param {number: integer || floating-point} firstNumber -  The number from which the second number will be subtracted.
 * @param {number: integer || floating-point} secondNumber - The number to be subtracted.
 * @returns {number: integer || floating-point} The result of subtracting the second number from the first number.
 */
function subtractOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber - secondNumber;
}

/**
 * Multiplies two numbers together and returns the result.
 * @param {number: integer || floating-point} firstNumber - The first number to be multiplied.
 * @param {number: integer || floating-point} secondNumber - The second number to be multiplied.
 * @returns {number: integer || floating-point} The product of the two numbers.
 */
function multiplyOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber * secondNumber;
}

/**
 * Divides the first number by the second number and returns the result.
 * @param {number: integer || floating-point} firstNumber - The number to be divided.
 * @param {number: integer || floating-point} secondNumber - The number by which the first number will be divided.
 * @returns {number: integer || floating-point} The result of dividing the first number by the second number.
 */
function divideOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber / secondNumber;
}

// Add documentation
function validateNumbers(...numbers) {
    numbers.forEach(number => {
        if (typeof number !== 'number' || isNaN(number)) {
            alert("Invalid number");
            throw new Error("Invalid number");
        }
    });
}

/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {number: integer || floating-point} firstNumber - The first number operated on.
 * @param {number: integer || floating-point} secondNumber - The second number operated on.
 * @param {string} currentOperator - The arithmetic operator.
 * @returns {number: integer || floating-point} The result of the arithmetic operation.
 */
function initializeOperation(firstNumber, secondNumber, currentOperator) {
    try {
        if (currentOperator === "+") {
            return addOperands(firstNumber, secondNumber);
        } else if (currentOperator === "-") {
            return subtractOperands(firstNumber, secondNumber);
        } else if (currentOperator === "*") {
            return multiplyOperands(firstNumber, secondNumber);
        } else if (currentOperator === "÷") {
            if (secondNumber === 0) {
                throw new Error("Division by zero");
            }
            return divideOperands(firstNumber, secondNumber);
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
}

/**
 * Updates the content displayed on the screen and pushes the value to displayValuesArray.
 * @param {string} value - The digit or character to be displayed on the screen.
 */
function displayValue(value) {
    screenContent.textContent += value;
    displayValuesArray.push(screenContent.textContent);

    if (value === "+" || value === "-" || value === "*" || value === "÷") {
        currentOperator = value;
        document.getElementById("add-button").disabled = true;
        document.getElementById("subtract-button").disabled = true;
        document.getElementById("multiply-button").disabled = true;
        document.getElementById("divide-button").disabled = true;
        disableDecimalButton(value);
    } else if (value === "=") {
        const displayContent = screenContent.textContent;
        // Splits displayContent into an array comprised of substrings of value, split by the currentOperator
        const values = displayContent.split(currentOperator);
        // Ensures values has a length !==2 (e.g. two numbers separated by the currentOperator)
        if (values.length !== 2) {
            return;
        }

        // Converts the two array substrings to a floating point number
        const firstNumber = parseFloat(values[0]);
        const secondNumber = parseFloat(values[1]);
        // Calls initializeOperation() to execute arithmetic operations and rounds the result to three decimal places
        const result = (Math.round(initializeOperation(firstNumber, secondNumber, currentOperator) * 1000) / 1000);
        screenContent.textContent = result;

        document.getElementById("add-button").disabled = false;
        document.getElementById("subtract-button").disabled = false;
        document.getElementById("multiply-button").disabled = false;
        document.getElementById("divide-button").disabled = false;
        document.getElementById("decimal-button").disabled = false;
    }
}

/**
 * Clears screen and resets variables and arrays.
 */
function clearScreen() {
    screenContent.textContent = "";
    displayValuesArray.length = 0;
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = "";
    isFirstNumberDecimal = false;
    isSecondNumberDecimal = false;
}

/**
 * Slices off right-most character.
 */
function deleteCharacter() {
    let content = screenContent.textContent;

    if (content.length > 0) {
        // Remove the last character from the content by slicing content to be from beginning (0) to the second-to-last characer (-1)
        content = content.slice(0, -1);

        screenContent.textContent = content;
        displayValuesArray.push(screenContent.textContent);
    }
}

/**
 * Disables or enables the decimal button based on the given value.
 * @param {string} value - The value to determine if the decimal button should be disabled.
 */
function disableDecimalButton(value) {
    if (value === ".") {
        document.getElementById("decimal-button").disabled = true;
    } else if (value === "+" || value === "-" || value === "*" || value === "÷" || value === "=") {
        document.getElementById("decimal-button").disabled = false;
    }
}