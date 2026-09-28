const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";

function handleInput(value){
    if(value === "C"){
        currentInput = "";
    }
    else if (value === "="){
        currentInput = eval(currentInput).toString();
    }
    else{
        currentInput = currentInput + value;
    }
    display.value = currentInput; // har case ke baad screen update hoti hai.
}

// button to add from function
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button.textContent);
    });
});

document.addEventListener('keydown', (event) =>{
    // connect key to handle
    const key = event.key;

    if("0123456789+-*/.".includes(key)){
        handleInput(key);
    }
    else if(key === "Enter" || key === "="){
        event.preventDefault(); // focused button dobara click na ho
        handleInput("=");
    }
    else if(key === "Backspace"){
        currentInput = currentInput.slice(0,-1); // last character hta do
        display.value = currentInput;
    }
    else if(key === "Escape" || key === "c" || key ==="C"){
        handleInput("C");
    }
});