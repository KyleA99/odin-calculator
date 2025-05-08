const displayValuesArray = [];
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";
let numbersBeforeOperator;
let numbersAfterOperator;
let decimalAdded = false;

const screen = document.querySelector("#screen");
const screenContent = document.createElement("div");
screenContent.classList.add("screenContent");
screenContent.textContent = "";
screen.appendChild(screenContent);

setupButtonEventListeners();

document.getElementById("clear-button").addEventListener("click", clearCalculatorScreen);
document.getElementById("backspace-button").addEventListener("click", deleteLastCharacterFromScreen);

/**
 * Sets event listeners to assign values to buttons.
 */
function setupButtonEventListeners() {
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
                appendToScreenAndPushToArray(".");
                toggleDecimalButtonState();
                updateCalculateButtonState();
                extractNumbersAroundOperator(screenContent.textContent, currentOperator);
            } else {
                appendToScreenAndPushToArray(button.value);
                updateCalculateButtonState();
                extractNumbersAroundOperator(screenContent.textContent, currentOperator);
            }
        });
    });
}



/**
 * Validates whether the provided values are valid numbers.
 * @param {...(number | string)} numbers - The values to be validated.
 * @throws {Error} Throws an error if any of the provided values are not a valid number.
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
 * @param {number} firstNumber - Integer or floating-point number.
 * @param {number} secondNumber - Integer or floating-point number.
 * @returns {number} The sum of the two numbers.
 */
function addOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);

    return firstNumber + secondNumber;
}



/**
 * Subtracts the second number from the first number and returns the result.
 * @param {number} firstNumber - Integer or floating-point number.
 * @param {number} secondNumber - Integer or floating-point number.
 * @returns {number} The result of subtracting the second number from the first number.
 */
function subtractOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);

    return firstNumber - secondNumber;
}



/**
 * Multiplies two numbers together and returns the result.
 * @param {number} firstNumber - Integer or floating-point number.
 * @param {number} secondNumber - Integer or floating-point number.
 * @returns {number} The product of the two numbers.
 */
function multiplyOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);

    return firstNumber * secondNumber;
}



/**
 * Divides the first number by the second number and returns the result.
 * @param {number} firstNumber - Integer or floating-point number.
 * @param {number} secondNumber - Integer or floating-point number.
 * @returns {number} The result of dividing the first number by the second number.
 */
function divideOperands(firstNumber, secondNumber) {
    validateNumbers(firstNumber, secondNumber);

    return firstNumber / secondNumber;
}



/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {number} firstNumber - Integer or floating-point number.
 * @param {number} secondNumber - Integer or floating-point number.
 * @param {string} currentOperator - The arithmetic operator.
 * @returns {number} The result of the arithmetic operation.
 */
function initializeOperation(firstNumber, secondNumber, currentOperator) {
    try {
        switch (currentOperator) {
            case "+":
                return addOperands(firstNumber, secondNumber);
            case "-":
                return subtractOperands(firstNumber, secondNumber);
            case "*":
                return multiplyOperands(firstNumber, secondNumber);
            case "÷":
                if (secondNumber === 0) {
                    throw new Error("Division by zero");
                }
                return divideOperands(firstNumber, secondNumber);
            default:
                throw new Error("Invalid operator");
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
}



/**
 * Updates the content displayed on the screen and pushes the value to displayValuesArray.
 * @param {string} value - The digit or character to be displayed on the screen.
 */
function appendToScreenAndPushToArray(value) {
    screenContent.textContent += value;

    deleteLeadingZeroFromScreen();
    
    limitScreenLength();

    displayValuesArray.push(screenContent.textContent);

    if (value === "+" || value === "-" || value === "*" || value === "÷") {
        currentOperator = value;
        document.getElementById("add-button").disabled = true;
        document.getElementById("subtract-button").disabled = true;
        document.getElementById("multiply-button").disabled = true;
        document.getElementById("divide-button").disabled = true;
        toggleDecimalButtonState();
        extractNumbersAroundOperator(screenContent.textContent, currentOperator);
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
        
        extractNumbersAroundOperator(screenContent.textContent, currentOperator);
    } else {
        updateCalculateButtonState();
        if (!isNaN(value)) {
            const currentContent = screenContent.textContent;
            const indexOfOperator = currentContent.lastIndexOf(currentOperator);
            if (indexOfOperator !== -1) {
                numbersAfterOperator = parseFloat(currentContent.substring(indexOfOperator + 1), 10);
            }
        }
    }
}



/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} number - Integer or floating-point number.
 * @returns {number} The rounded number.
 */
function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}



/**
 * Clears screen and resets variables and arrays.
 */
function clearCalculatorScreen() {
    screenContent.textContent = "";
    displayValuesArray.length = 0;
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = "";
    isFirstNumberDecimal = false;
    isSecondNumberDecimal = false;
}



/**
 * Slices off the right-most character.
 */
function deleteLastCharacterFromScreen() {
    let content = screenContent.textContent;

    if (content.length > 0) {
        content = content.slice(0, -1);

        screenContent.textContent = content;
        displayValuesArray.push(screenContent.textContent);
    }
}



/**
 * Removes leading 0 values from our screenContent.
 */
function deleteLeadingZeroFromScreen() {
    let content = screenContent.textContent;

    if (content.length > 1 && content.charAt(0) == 0) {
        content = content.slice(1);

        screenContent.textContent = content;
    }
}



/**
 * Extracts numbers before and after the specified operator from the display content.
 *
 * @param {string} displayContent - The content displayed on the screen.
 * @param {string} currentOperator - The current operator (e.g., "+", "-", "*", "÷").
 * @returns {object|null} An object containing `numbersBefore` and `numbersAfter`, or `null` if the extraction fails.
 */
function extractNumbersAroundOperator(displayContent, currentOperator) {
    const parts = displayContent.split(currentOperator);

    if (!currentOperator) {
        numbersBeforeOperator = displayContent;
    } else {
        numbersBeforeOperator = parseFloat(parts[0], 10);
    }

    if (currentOperator) {
        numbersAfterOperator = parseFloat(parts[1], 10);
    } else {
        numbersAfterOperator = null;
    }

    if (!isNaN(numbersBeforeOperator) && !isNaN(numbersAfterOperator)) {
        return {
            numbersBefore: numbersBeforeOperator,
            numbersAfter: numbersAfterOperator
        };
    }
    
    return null;
}



/**
 * Disables the "Calculate" button based on the validity of the operator and numbers.
 */
function updateCalculateButtonState() {
    const isOperatorValid = (currentOperator) && (currentOperator !== "=");
    const isFirstNumberValid = !isNaN(numbersBeforeOperator);
    const isSecondNumberValid = !isNaN(numbersAfterOperator);
    
    if (isOperatorValid && isFirstNumberValid && isSecondNumberValid) {
        document.getElementById("calculate-button").disabled = false;
    } else {
        document.getElementById("calculate-button").disabled = true;
    }
}
updateCalculateButtonState();



/**
 * Limits the number of characters allowed on the screen to be 24.
 */
function limitScreenLength() {
    let content = screenContent.textContent;

    if (content.length > 24) {
        deleteLastCharacterFromScreen();
    }
}



/**
 * Prevents each firstNumber and secondNumber from containing more than one decimal character.
 */
function toggleDecimalButtonState() {
    const operators = ["+", "-", "*", "÷"];
    const content = screenContent.textContent;

    let lastOperatorIndex = -1;

    // Find last occurring operator to identify the current number
    for (let operator of operators) {
        const index = content.lastIndexOf(operator);
        if (index > lastOperatorIndex) {
            lastOperatorIndex = index;
        }
    }

    const currentNumber = content.slice(lastOperatorIndex + 1);

    const hasDecimal = currentNumber.includes(".");
    document.getElementById("decimal-button").disabled = hasDecimal;
}

// also the solved answer on the screen should be cleared if i press a number button after
    // e.g. 5 x 2 = 10. i press 3 and it makes it 103
// operator buttons stay disabled if i already click one (cant even use negative values because of this)
// break up code into separate files based off logic