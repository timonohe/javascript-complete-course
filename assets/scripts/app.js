const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const enteredNumber = parseInt(userInput.value);
    const description = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, description);
}

addBtn.addEventListener('click', add);