const displayValuesArray = [];
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";

const screen = document.querySelector("#screen");
const screenContent = document.createElement("div");
const displayContent = screenContent.textContent;
screenContent.classList.add("screenContent");
screenContent.textContent = initializeEventListeners();
screen.appendChild(screenContent);
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
 * Validates whether the provided values are valid numbers.
 * @param {...(number | string)} numbers - The values to be validated.
 * @throws {Error} Throws an error if any of the provided values is not a valid number.
 */
function validateNumbers(...numbers) {
    numbers.forEach(number => {
        if (typeof number !== "number" || isNaN(number)) {
            alert("Invalid number");
            throw new Error("Invalid number");
        }
    });
}

/**
 * Adds two numbers together and returns the result.
 * @param {number} firstNumber - The first number to be added. Can be an integer or floating-point number.
 * @param {number} secondNumber - The second number to be added. Can be an integer or floating-point number.
 * @returns {number} The sum of the two numbers.
 */
function addOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber + secondNumber;
}

/**
 * Subtracts the second number from the first number and returns the result.
 * @param {number} firstNumber - The number from which the second number will be subtracted. Can be an integer or floating-point number.
 * @param {number} secondNumber - The number to be subtracted. Can be an integer or floating-point number.
 * @returns {number} The result of subtracting the second number from the first number.
 */
function subtractOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber - secondNumber;
}

/**
 * Multiplies two numbers together and returns the result.
 * @param {number} firstNumber - The first number to be multiplied. Can be an integer or floating-point number.
 * @param {number} secondNumber - The second number to be multiplied. Can be an integer or floating-point number.
 * @returns {number} The product of the two numbers.
 */
function multiplyOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber * secondNumber;
}

/**
 * Divides the first number by the second number and returns the result.
 * @param {number} firstNumber - The number to be divided. Can be an integer or floating-point number.
 * @param {number} secondNumber - The number by which the first number will be divided. Can be an integer or floating-point number.
 * @returns {number} The result of dividing the first number by the second number.
 */
function divideOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);
    return firstNumber / secondNumber;
}

/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {number} firstNumber - The first number operated on. Can be an integer or floating-point number.
 * @param {number} secondNumber - The second number operated on. Can be an integer or floating-point number.
 * @param {string} currentOperator - The arithmetic operator.
 * @returns {number} The result of the arithmetic operation.
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
        // disableCalculateButton(extractedNumbers);
    } else if (value === "=") {
        const displayContent = screenContent.textContent;
        const values = displayContent.split(currentOperator);
        if (values.length !== 2) {
            return;
        }

        const firstNumber = parseFloat(values[0]);
        const secondNumber = parseFloat(values[1]);
        const result = initializeOperation(firstNumber, secondNumber, currentOperator);
        const roundedResult = roundResult(result);
        screenContent.textContent = roundedResult;

        document.getElementById("add-button").disabled = false;
        document.getElementById("subtract-button").disabled = false;
        document.getElementById("multiply-button").disabled = false;
        document.getElementById("divide-button").disabled = false;
        document.getElementById("decimal-button").disabled = false;
        
        // After the calculation is complete, call disableCalculateButton
        disableCalculateButton(extractedNumbers);
    } else {
        // If it's a digit or decimal point, call disableCalculateButton
        disableCalculateButton(extractNumbersBeforeAndAfterSymbol(screenContent.textContent, currentOperator));
    }
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} number - The number to be rounded. Can be an integer or floating-point number.
 * @returns {number} The rounded number.
 */
function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearScreen);
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

const backspaceButton = document.getElementById("backspace-button");
backspaceButton.addEventListener("click", deleteCharacter);
/**
 * Slices off the right-most character.
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

const extractedNumbers = extractNumbersBeforeAndAfterSymbol(displayContent, currentOperator);

function extractNumbersBeforeAndAfterSymbol(displayContent, currentOperator) {
    let numbersBeforeOperator;
    let numbersAfterOperator;

    const parts = displayContent.split(currentOperator);

    if (!currentOperator) {
        numbersBeforeOperator = displayContent;
        // console.log(numbersBeforeOperator);
    } else {
        numbersBeforeOperator = parseInt(parts[0], 10);
        // console.log(numbersBeforeOperator);
    }

    if (currentOperator) {
        numbersAfterOperator = parseInt(parts[1], 10);
        // console.log(numbersAfterOperator);
    } else {
        numbersAfterOperator = null;
    }
        
    // Validates they are numbers
    if (!isNaN(numbersBeforeOperator) && !isNaN(numbersAfterOperator)) {
        return {
            numbersBefore: numbersBeforeOperator,
            numbersAfter: numbersAfterOperator
        };
    }
    return null;
}
// numbersBeforeOperator and numbersAfterOperator works
// try console logging with lines 234, 238, 260, and 261 to see behavior.







// this doesnt work, i dont think.
function disableCalculateButton(extractedNumbers) {
    if (extractedNumbers) {
        document.getElementById("calculate-button").disabled = false;
        console.log("Numbers before symbol:", extractedNumbers.numbersBefore);
        console.log("Numbers after symbol:", extractedNumbers.numbersAfter);
        console.log()
    } else {
        document.getElementById("calculate-button").disabled = true;
        console.log("Symbol not found or invalid numbers.");
    }
}
disableCalculateButton(extractedNumbers);