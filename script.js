'use strict'
// 1
document.addEventListener('DOMContentLoaded', function() {
    const drinkSelect = document.getElementById('drink');
    const messageDiv = document.getElementById('message');

    drinkSelect.addEventListener('change', function() {
        let message = '';
        switch (drinkSelect.value) {
            case 'coffee':
                message = 'Ви обрали каву.';
                break;
            case 'tea':
                message = 'Ви обрали чай.';
                break;
            case 'juice':
                message = 'Ви обрали сік.';
                break;
            default:
                message = '';
        }
        messageDiv.textContent = message;
    });
});


// 2
function checkDay() {
    const dayInput = document.getElementById('dayInput').value.trim().toLowerCase();
    const messageDiv = document.getElementById('messageTwo');

    const workDays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця'];
    const weekendDays = ['субота', 'неділя'];

    let messageTwo = '';
    if (workDays.includes(dayInput)) {
        messageTwo = 'Це робочий день.';
    } else if (weekendDays.includes(dayInput)) {
        messageTwo = 'Це вихідний.';
    } else {
        messageTwo = 'Будь ласка, введіть правильний день тижня.';
    }

    messageDiv.textContent = messageTwo;
}


// 3
function determineSeason() {
    const monthValue = parseInt(document.getElementById('monthNumber').value);
    const seasonDiv = document.getElementById('seasonMessage');

    let seasonMessage = '';
    switch (monthValue) {
        case 12:
        case 1:
        case 2:
            seasonMessage = 'Це зима.';
            break;
        case 3:
        case 4:
        case 5:
            seasonMessage = 'Це весна.';
            break;
        case 6:
        case 7:
        case 8:
            seasonMessage = 'Це літо.';
            break;
        case 9:
        case 10:
        case 11:
            seasonMessage = 'Це осінь.';
            break;
        default:
            seasonMessage = 'Будь ласка, введіть правильний номер місяця (1-12).';
    }

    seasonDiv.textContent = seasonMessage;
}


// 4
    function getDaysInMonth() {
    const monthNumber = parseInt(document.getElementById('monthInput').value);
    const messageDiv = document.getElementById('daysMessage');

    let daysMessage = '';
    switch (monthNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysMessage = 'У цьому місяці 31 день.';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysMessage = 'У цьому місяці 30 днів.';
            break;
        case 2:
            daysMessage = 'У цьому місяці 28 або 29 днів (високосний рік).';
            break;
        default:
            daysMessage = 'Будь ласка, введіть правильний номер місяця (1-12).';
    }

    messageDiv.textContent = daysMessage;
}


// 5
    function determineAction() {
    const colorName = document.getElementById('colorInput').value.trim().toLowerCase();
    const messageDiv = document.getElementById('colorMessage');

    let actionMessage = '';
    switch (colorName) {
        case 'червоний':
            actionMessage = 'Стоп';
            break;
        case 'зелений':
            actionMessage = 'Йти';
            break;
        case 'жовтий':
            actionMessage = 'Чекати';
            break;
        default:
            actionMessage = 'Будь ласка, введіть правильну назву кольору (червоний, зелений, жовтий).';
    }

    messageDiv.textContent = actionMessage;
}


// 6
function calculateResult() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const selectedOperation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('resultMessage');

    let resultMessage = '';
    if (isNaN(num1) || isNaN(num2)) {
        resultMessage = 'Будь ласка, введіть обидва числа.';
    } else {
        switch (selectedOperation) {
            case '+':
                resultMessage = `Результат: ${num1 + num2}`;
                break;
            case '-':
                resultMessage = `Результат: ${num1 - num2}`;
                break;
            case '*':
                resultMessage = `Результат: ${num1 * num2}`;
                break;
            case '/':
                if (num2 === 0) {
                    resultMessage = 'Ділення на нуль неможливе!';
                } else {
                    resultMessage = `Результат: ${num1 / num2}`;
                }
                break;
            default:
                resultMessage = 'Будь ласка, виберіть правильну операцію.';
        }
    }

    resultDiv.textContent = resultMessage;
}