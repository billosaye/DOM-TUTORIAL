// 1. Update Content:
// Write a function that updates the text content of a <div> with the ID "message" to "Hello, World!" when a button with the ID "updateBtn" is clicked.

const updateBtn = document.getElementById("updateBtn");
const messageDiv = document.getElementById("message");

updateBtn.addEventListener('click', () => {
    messageDiv.textContent = "Hello, World!";
});

// 2. Change Styles:
// Create a function that changes the background color of a <div> with the class "box" to blue when a button with the ID "colorBtn" is clicked.

const colorBtn = document.getElementById("colorBtn");
const box = document.querySelector(".box");

colorBtn.addEventListener('click', () => {
    box.style.background = "blue";
});

// 3. Manipulate Structure:
// Write a script that adds a new <li> element with the text "New Item" to a <ul> with the ID "itemList" when a button with the ID "addItemBtn" is clicked.

const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    itemList.appendChild(newItem);
});

// 4. Handle Events:
// Create an event listener that logs "Button clicked!" to the console whenever a button with the ID "logBtn" is clicked.

const logBtn = document.getElementById("logBtn");

logBtn.addEventListener('click', () => {
    console.log("Button clicked!");
});

// 5. Access DOM Elements:
// Write a function that retrieves and logs the value of an input field with the ID "inputField" when a button with the ID "getValueBtn" is clicked.

const getValueBtn = document.getElementById("getValueBtn");
const inputField = document.getElementById("inputField");

getValueBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    console.log(inputValue);
});

// 6. Changing Element Content with InnerHTML:
// Create a function that sets the innerHTML of a <div> with the ID "contentDiv" to "<strong>Bold Text</strong>" when a button with the ID "htmlBtn" is clicked.

const htmlBtn = document.getElementById("htmlBtn");
const contentDiv = document.getElementById("contentDiv");

htmlBtn.addEventListener('click', () => {
    contentDiv.innerHTML = "<strong>Bold Text</strong>";
});

// 7. Changing Element Attributes:
// Write a script that sets the src attribute of an <img> element with the ID "image" to "newImage.jpg" when a button with the ID "changeImageBtn" is clicked.

const changeImageBtn = document.getElementById("changeImageBtn");
const image = document.getElementById("image");

changeImageBtn.addEventListener('click', () => {
    image.setAttribute("src", "newImage.jpg");
});

// 8. Changing Element Styles:
// Create a function that changes the font size of a <p> element with the class "text" to "20px" when a button with the ID "fontSizeBtn" is clicked.

const fontSizeBtn = document.getElementById("fontSizeBtn");
const textElement = document.querySelector(".text");

fontSizeBtn.addEventListener('click', () => {
    textElement.style.fontSize = "20px";
});

// 9. Adding and Removing Elements:
// Write a script that creates a new <p> element with the text "New Paragraph" and appends it to a <div> with the ID "container" when a button with the ID "addParagraphBtn" is clicked. Also, write a function to remove the last <p> element from the same <div> when a button with the ID "removeParagraphBtn" is clicked.

const addParagraphBtn = document.getElementById("addParagraphBtn");
const removeParagraphBtn = document.getElementById("removeParagraphBtn");
const container = document.getElementById("container");

addParagraphBtn.addEventListener('click', () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New Paragraph";
    container.appendChild(newParagraph);
});

removeParagraphBtn.addEventListener('click', () => {
    const lastParagraph = container.lastElementChild;
    if (lastParagraph) {
        container.removeChild(lastParagraph);
    }
});

// 10. Event Handling:
// Create an event listener that changes the text content of a <span> with the ID "hoverText" to "Hovered!" when the user moves the mouse pointer over a <div> with the ID "hoverDiv".

const hoverDiv = document.getElementById("hoverDiv");
const hoverText = document.getElementById("hoverText");

hoverDiv.addEventListener('mouseover', () => {
    hoverText.textContent = "Hovered!";
});
