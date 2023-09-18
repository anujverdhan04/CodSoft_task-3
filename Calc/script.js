let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

let memory = 0;
let isNegation = false;

function toggleNegation() {
    if (display.value === '') {
        isNegation = !isNegation;
        if (isNegation) {
            display.value = '-';
        } else {
            display.value = '';
        }
    } else if (display.value === '-') {
        isNegation = false;
        display.value = '';
    } else {
        isNegation = !isNegation;
        display.value = '-' + display.value;
    }
}

function memoryAdd() {
    if (!isNaN(display.value)) {
        memory += parseFloat(display.value);
    }
}

function memorySubtract() {
    if (!isNaN(display.value)) {
        memory -= parseFloat(display.value);
    }
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

function openParenthesis() {
    appendToDisplay('(');
}

function closeParenthesis() {
    appendToDisplay(')');
}

let history = [];

function calculateResult() {
    try {
        let expression = display.value;
        expression = expression.replace('^2', '**2');
        expression = expression.replace('^3', '**3');
        expression = expression.replace('%', '/100');
        expression = expression.replace('³√', 'Math.cbrt');
        expression = expression.replace('√', 'Math.sqrt');
        let result = eval(expression);
        display.value = result;
        // Store the calculation in history
        history.push(expression + ' = ' + result);
    } catch (error) {
        display.value = 'Error';
    }
}

function showHistory() {
    alert('Calculation History:\n\n' + history.join('\n'));
}





