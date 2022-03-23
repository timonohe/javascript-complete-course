const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// Gets input from input field
function getUserInputAsNumber() {
    return parseInt(userInput.value);
}

/*
    Generates and writes calculation log
*/
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description); // from vendor file
}


function writeToLog(operationIdentifier, previousResult, operand, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult,
        operand,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInputAsNumber();
    
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }
    
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}