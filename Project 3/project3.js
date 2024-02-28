const buttons = document.querySelectorAll('.btn input');
const Input = document.querySelector('#display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        
        if (!isNaN(value)) {
            currentNumber += value;
            Input.value = currentNumber;
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = value;
        }
        else if (value === '=') {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousNumber) + parseFloat(currentNumber);
                    break;
                case '-':
                    result = parseFloat(previousNumber) - parseFloat(currentNumber);
                    break;
                case '*':
                    result = parseFloat(previousNumber) * parseFloat(currentNumber);
                    break;
                case '/':
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                    break;
                default:
                    result = 'Error';
            }
            Input.value = result;
            currentNumber = result;
            previousNumber = '';
            operator = '';
        }
        else if (value === 'C') {
            Input.value = '';
            currentNumber = '';
            previousNumber = '';
            operator = '';
        }
    });
});
const typed = new Typed('.ChangingText', 
{
   strings: ['In Seconds', 'Efficiently', 'Accurately'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});