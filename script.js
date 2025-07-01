const display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if (!isNaN(lastChar) || lastChar === '.') {
        display.innerText += operator;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) || event.key === '.') {
        appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendOperator(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
