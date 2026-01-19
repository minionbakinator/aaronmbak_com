// Basic interactivity for the tutorial
const demoBtn = document.getElementById('demo-btn');
const demoTarget = document.getElementById('demo-target');

if (demoBtn && demoTarget) {
    demoBtn.addEventListener('click', function () {
        // Change color to a random blue/green shade
        const hue = Math.floor(Math.random() * 60) + 180; // 180-240 (Cyans/Blues)
        demoTarget.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        demoTarget.textContent = "I changed color!";
    });
}

// --- JS Tutorial Page Logic ---

// 1. Variable Demo
const nameBtn = document.getElementById('nameBtn');
if (nameBtn) {
    nameBtn.addEventListener('click', function () {
        const nameInput = document.getElementById('nameInput').value;
        const nameOutput = document.getElementById('nameOutput');
        // 'nameInput' here is a variable holding the text
        if (nameInput) {
            nameOutput.textContent = "Saved variable: " + nameInput;
        } else {
            nameOutput.textContent = "Please type a name first!";
        }
    });
}

// 2. Function Demo
const funcBtn = document.getElementById('funcBtn');
function sayHello() {
    alert("Hello! You ran the function.");
}
if (funcBtn) {
    // We are passing the function name 'sayHello' to be run on click
    funcBtn.addEventListener('click', sayHello);
}

// 3. Logic Demo
const numBtn = document.getElementById('numBtn');
if (numBtn) {
    numBtn.addEventListener('click', function () {
        // Convert the input string to a number
        const number = Number(document.getElementById('numInput').value);
        const output = document.getElementById('numOutput');

        // This is the IF/ELSE logic
        if (number > 10) {
            output.textContent = "Result: That is a big number!";
            output.style.color = "green";
        } else {
            output.textContent = "Result: That is a small number.";
            output.style.color = "blue";
        }
    });
}

// 4. Arrays Demo
const arrayBtn = document.getElementById('arrayBtn');
// Start with an empty list
let shoppingList = [];

if (arrayBtn) {
    arrayBtn.addEventListener('click', function () {
        const input = document.getElementById('arrayInput');
        const output = document.getElementById('arrayOutput');

        if (input.value) {
            // Add the new item to our array
            shoppingList.push(input.value);

            // Clear the input box
            input.value = "";

            // Show the updated list
            // .join(", ") turns the array ["A", "B"] into string "A, B"
            output.textContent = JSON.stringify(shoppingList);
        }
    });
}

// 5. Loops Demo
const loopBtn = document.getElementById('loopBtn');
if (loopBtn) {
    loopBtn.addEventListener('click', function () {
        const output = document.getElementById('loopOutput');
        output.textContent = ""; // Clear previous

        // Loop from 1 to 5
        let resultString = "";
        for (let i = 1; i <= 5; i++) {
            resultString += i + " ... ";
        }

        output.textContent = resultString + "Done!";
    });
}

// --- CSS Tutorial Page Logic ---

// 1. Color Demo
const colorBtn = document.getElementById('colorBtn');
if (colorBtn) {
    colorBtn.addEventListener('click', function () {
        const box = document.getElementById('colorDemo');
        // Toggle a 'blue' mode manually
        if (box.style.backgroundColor === "blue") {
            box.style.backgroundColor = "white";
            box.style.color = "black";
        } else {
            box.style.backgroundColor = "blue";
            box.style.color = "white";
        }
    });
}

// 2. Box Model Demo
const paddingBtn = document.getElementById('paddingBtn');
const marginBtn = document.getElementById('marginBtn');
const resetBtn = document.getElementById('resetBtn');
const boxModelDemo = document.getElementById('boxModelDemo');
const boxOutput = document.getElementById('boxOutput');

let currentPadding = 10;
let currentMargin = 0;

function updateBoxInfo() {
    if (boxModelDemo && boxOutput) {
        boxModelDemo.style.padding = currentPadding + "px";
        boxModelDemo.style.margin = currentMargin + "px";
        boxOutput.textContent = `Padding: ${currentPadding}px, Margin: ${currentMargin}px`;
    }
}

if (paddingBtn) {
    paddingBtn.addEventListener('click', function () {
        currentPadding += 10;
        updateBoxInfo();
    });
}

if (marginBtn) {
    marginBtn.addEventListener('click', function () {
        currentMargin += 10;
        updateBoxInfo();
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', function () {
        currentPadding = 10;
        currentMargin = 0;
        updateBoxInfo();
    });
}
