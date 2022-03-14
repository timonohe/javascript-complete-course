const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputAsNumber() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
}

function add() {
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);