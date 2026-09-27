const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // for button text
        if (value === "C") {
            // Case 1: Clear button
            currentInput = "";
        } 
        else if (value === "=") {
            // Case 2: Equals button - calculate result
            currentInput = eval(currentInput).toString();
        } 
        else {
            // Case 3: Number ya operator - append karo
            currentInput = currentInput + value;
        }

        display.value = currentInput;
    });
});