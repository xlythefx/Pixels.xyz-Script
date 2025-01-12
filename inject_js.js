// Create the control panel
const controlPanel = document.createElement('div');
controlPanel.id = 'controlPanel';
controlPanel.style.width = '300px';
controlPanel.style.height = '800px';
controlPanel.style.border = '1px solid #ccc';
controlPanel.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
controlPanel.style.position = 'fixed';
controlPanel.style.top = '10px';
controlPanel.style.left = '10px';
controlPanel.style.backgroundColor = '#272f4c';
controlPanel.style.zIndex = 10000; // Ensure it appears on top
controlPanel.style.borderRadius = '8px';
controlPanel.style.overflow = 'hidden';

// Create the title bar
const titleBar = document.createElement('div');
titleBar.style.backgroundColor = '#000';
titleBar.style.color = '#fff';
titleBar.style.padding = '10px';
titleBar.style.cursor = 'move';
titleBar.style.fontSize = '12px'; // Smaller text size
titleBar.innerText = 'Crafting Assist by Xlythe';

// Create the close button
const closeButton = document.createElement('span');
closeButton.style.float = 'right';
closeButton.style.cursor = 'pointer';
closeButton.style.color = '#fff'; // White text color
closeButton.innerText = 'X';
closeButton.onclick = () => {
    // Compress the UI into a button
    compressedButton.style.display = 'block';
    controlPanel.style.display = 'none';
};

// Create the compressed button
const compressedButton = document.createElement('div');
compressedButton.innerText = 'Xlythe';
compressedButton.style.display = 'none'; // Hidden initially
compressedButton.style.position = 'absolute';
compressedButton.style.top = '10px'; // Adjust as needed
compressedButton.style.left = '50%'; // Center horizontally
compressedButton.style.transform = 'translateX(-50%)'; // Center horizontally
compressedButton.style.cursor = 'pointer';
compressedButton.style.width = '100px'; // Adjust width as needed
compressedButton.style.height = '50px'; // Adjust height as needed
compressedButton.style.backgroundColor = '#008080'; // Color for the button
compressedButton.style.color = '#fff'; // White text color
compressedButton.style.textAlign = 'center';
compressedButton.style.lineHeight = '50px'; // Center text vertically
compressedButton.style.fontSize = '10px'; // Smaller text size
compressedButton.style.borderRadius = '10px'; // Border radius for the button
compressedButton.style.border = '1px solid #ccc'; // Optional border
compressedButton.onclick = () => {
    // Expand the UI
    controlPanel.style.display = 'block';
    compressedButton.style.display = 'none';
};

// Add elements to the control panel
controlPanel.appendChild(titleBar);
controlPanel.appendChild(closeButton);

// Add the form elements
const form = document.createElement('div');
form.style.margin = '10px';
form.style.fontSize = '12px'; // Smaller text size
form.style.color = '#fff'; // White text color

const radioContainer = document.createElement('div');
const textInput = document.createElement('input');
textInput.type = 'text';
textInput.id = 'energyInput';
textInput.style.width = '100px';
textInput.style.marginRight = '10px';
textInput.value = '300'; // Default value

const clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
clearButton.style.fontSize = '12px'; // Smaller text size
clearButton.onclick = () => {
    textInput.value = '';
    energyThreshold = 300; // Reset to default
};

// Radio buttons
const createRadioButton = (id, value, labelText, isChecked = false) => {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.id = id;
    radioButton.name = 'textToFind';
    radioButton.value = value;
    radioButton.checked = isChecked;

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelText;
    label.style.fontSize = '10px'; // Smaller text size

    return { radioButton, label };
};

const radioButtonsData = [
    { id: 'tatoHash', value: 'Tato Hash', labelText: 'Tato Hash', isChecked: true },
    { id: 'orangeGrumpkinPie', value: 'Orange Grumpkin Pie', labelText: 'Orange Grumpkin Pie' }, // Added Orange Grumpkin Pie
    { id: 'bottleGrumpkinWine', value: 'Bottle of Grumpkin Wine', labelText: 'Bottle of Grumpkin Wine' },
    { id: 'pilePlaster', value: 'Pile of Plaster', labelText: 'Pile of Plaster' },
    { id: 'pileCopperiteNails', value: 'Pile of Copperite Nails', labelText: 'Pile of Copperite Nails' }, // Added Pile of Copperite Nails
    { id: 'copperiteNail', value: 'Copperite Nail', labelText: 'Copperite Nail' }, // Added Copperite Nail
    { id: 'bronzeniteBar', value: 'Bronzenite Bar', labelText: 'Bronzenite Bar' }, // Added Bronzenite Bar
    { id: 'marbleitePowder', value: 'Marbleite Powder', labelText: 'Marbleite Powder' }, // Added Marbleite Powder
    { id: 'coffeeFruitJam', value: 'Coffee Fruit Jam', labelText: 'Coffee Fruit Jam' }, // Added Coffee Fruit Jam
    { id: 'craftbarkPlank', value: 'Craftbark Plank', labelText: 'Craftbark Plank' }, // Added Craftbark Plank
    { id: 'sawstumpPlank', value: 'Sawstump Plank', labelText: 'Sawstump Plank' }, // Added Sawstump Plank
    { id: 'bedrockPowder', value: 'Bedrock Powder', labelText: 'Bedrock Powder' }, // Added Bedrock Powder
    { id: 'claricitePowder', value: 'Claricite Powder', labelText: 'Claricite Powder' }, // Added Claricite Powder
    { id: 'clariciteBrick', value: 'Claricite Brick', labelText: 'Claricite Brick' }, // Added Claricite Powder
    { id: 'tatoScramble', value: 'Tato Scramble', labelText: 'Tato Scramble' }, 
    { id: 'irotiteBar', value: 'Irontite Bar', labelText: 'Irontite Bar' },
    { id: 'clayPowder', value: 'Clay Powder', labelText: 'Clay Powder' },
    { id: 'cloverfruitJam', value: 'Clover Fruit Jam', labelText: 'Clover Fruit Jam' },
    { id: 'bluegrumpkinLoaf', value: 'Grumpkin Loaf', labelText: 'Grumpkin Loaf' }
];

radioButtonsData.forEach(data => {
    const { radioButton, label } = createRadioButton(data.id, data.value, data.labelText, data.isChecked);
    radioContainer.appendChild(radioButton);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement('br'));
});

form.appendChild(radioContainer);
form.appendChild(document.createElement('br'));
form.appendChild(document.createTextNode('Auto Energy: '));
form.appendChild(textInput);
form.appendChild(clearButton);

// Color buttons
const colorButtonsContainer = document.createElement('div');
colorButtonsContainer.style.marginTop = '10px';

const colors = {
    'V': 'violet',
    'R': 'red',
    'G': 'green',
    'B': 'blue',
    'W': 'white'
};

Object.entries(colors).forEach(([key, color]) => {
    const colorButton = document.createElement('button');
    colorButton.innerText = key;
    colorButton.style.fontSize = '12px'; // Smaller text size
    colorButton.style.margin = '2px';
    colorButton.style.padding = '5px';
    colorButton.style.backgroundColor = color;
    colorButton.style.color = '#fff'; // White text color
    colorButton.onclick = () => {
        squareColor = color;
        const redSquare = document.getElementById('redSquareIndicator');
        if (redSquare) {
            redSquare.style.backgroundColor = color;
        }
    };
    colorButtonsContainer.appendChild(colorButton);
});

form.appendChild(colorButtonsContainer);

// Add the title change textbox and button
const titleChangeContainer = document.createElement('div');
titleChangeContainer.style.marginTop = '10px';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.placeholder = 'Enter new title';
titleInput.style.width = '150px';
titleInput.style.marginRight = '10px';

const titleChangeButton = document.createElement('button');
titleChangeButton.innerText = 'Set Title';
titleChangeButton.style.fontSize = '12px'; // Smaller text size
titleChangeButton.onclick = () => {
    document.title = titleInput.value;
};

titleChangeContainer.appendChild(titleInput);
titleChangeContainer.appendChild(titleChangeButton);
form.appendChild(titleChangeContainer);

// Add the form to the control panel
controlPanel.appendChild(form);
document.body.appendChild(controlPanel);
document.body.appendChild(compressedButton);

// Make the control panel draggable
let isDragging = false;
let offset = { x: 0, y: 0 };

titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offset.x = e.clientX - controlPanel.offsetLeft;
    offset.y = e.clientY - controlPanel.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        controlPanel.style.left = `${e.clientX - offset.x}px`;
        controlPanel.style.top = `${e.clientY - offset.y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Make the compressed button draggable
let isCompressedButtonDragging = false;
let compressedButtonOffset = { x: 0, y: 0 };

compressedButton.addEventListener('mousedown', (e) => {
    isCompressedButtonDragging = true;
    compressedButtonOffset.x = e.clientX - compressedButton.offsetLeft;
    compressedButtonOffset.y = e.clientY - compressedButton.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isCompressedButtonDragging) {
        compressedButton.style.left = `${e.clientX - compressedButtonOffset.x}px`;
        compressedButton.style.top = `${e.clientY - compressedButtonOffset.y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isCompressedButtonDragging = false;
});

// Variable to store the current text to find
let textToFind = 'Tato Hash';
let energyThreshold = 300; // Default energy value
let squareColor = 'white'; // Default square color

// Update textToFind based on the selected radio button
document.querySelectorAll('input[name="textToFind"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        textToFind = e.target.value;
    });
});

// Update energyThreshold based on the input value
textInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 999) {
        energyThreshold = value;
    } else {
        e.target.value = energyThreshold; // Reset to previous valid value
    }
});

// Ensure default energy threshold is set if input is empty
textInput.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '') {
        e.target.value = 300;
        energyThreshold = 300;
    }
});

// Function to check the coin balance and display or hide the red square
function checkCoinBalanceAndDisplaySquare() {
    // Get the element with the specified class
    const coinBalanceElement = document.querySelector('.commons_coinBalance__d9sah.Hud_energytext__3PQZQ');
    const redSquareId = 'redSquareIndicator';

    if (coinBalanceElement) {
        // Get the current coin balance value and convert it to a number
        const coinBalanceValue = parseInt(coinBalanceElement.textContent, 10);

        let redSquare = document.getElementById(redSquareId);

        if (coinBalanceValue <= energyThreshold) {
            // If the red square doesn't exist, create it
            if (!redSquare) {
                redSquare = document.createElement('div');
                redSquare.id = redSquareId;
                redSquare.style.width = '100px'; // Adjust width as needed
                redSquare.style.height = '70px'; // Adjust height as needed
                redSquare.style.backgroundColor = squareColor;
                redSquare.style.position = 'fixed';
                redSquare.style.top = '70%'; // Center vertically
                redSquare.style.right = '10px'; // Distance from the right side
                redSquare.style.transform = 'translateY(-90%)'; // Center vertically
                redSquare.style.borderRadius = '5px';
                redSquare.style.color = '#fff'; // White text color
                redSquare.style.textAlign = 'center';
                redSquare.style.padding = '2px';
                redSquare.innerHTML = 'Low Energy'; // Text inside the red square
                document.body.appendChild(redSquare);
            }
        } else {
            // If the coin balance is above the threshold, remove the red square if it exists
            if (redSquare) {
                redSquare.remove();
            }
        }
    }
}

// Execute the function every 1000 milliseconds (1 second)
setInterval(checkCoinBalanceAndDisplaySquare, 1000);

// Function to delete non-grumpkin pie elements
function deleteNonGrumpkinPieElements() {
    // Get the list elements with the specified class
    const tierSectionElements = document.querySelectorAll('.Crafting_tierSection__RThnx');

    tierSectionElements.forEach(tierSection => {
        // Get all li elements inside the specified class
        const liElements = tierSection.querySelectorAll('li');

        // Iterate over each li element
        liElements.forEach(li => {
            const span = li.querySelector('span.Crafting_craftingFontText__EeNSQ.clickable');
            if (span && span.textContent.trim() !== textToFind) {
                // Remove the li element
                li.remove();
            }
        });
    });
}



// Execute the function every 100 milliseconds (0.1 second)
setInterval(deleteNonGrumpkinPieElements, 100);

// Function to perform actions based on the selected text and interact with buttons
setInterval(() => {
    const elements = document.querySelectorAll('.Crafting_tierSection__RThnx .Crafting_craftingFontText__EeNSQ.clickable');
    elements.forEach(element => {
        if (element.innerText === textToFind) {
            element.click();
        }
    });

    const button = document.querySelector('.Crafting_craftingButton__Qd6Ke');
    if (button) {
        button.click();

        // Delay clicking the close button by 1 second
        setTimeout(() => {
            const closeButton = document.querySelector('.Crafting_craftingCloseButton__ZbHQF');
            if (closeButton) {
                closeButton.click();
            }
        }, 200);
    }
}, 200);
