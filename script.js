// Alphabet and number examples with images
var examples = {
    "A": { name: "Apple", image: "https://example.com/apple.jpg" },
    "B": { name: "Banana", image: "https://example.com/banana.jpg" },
    "C": { name: "Cat", image: "https://example.com/cat.jpg" },
    "D": { name: "Dog", image: "https://example.com/dog.jpg" },
    "E": { name: "Elephant", image: "https://example.com/elephant.jpg" },
    "F": { name: "Fish", image: "https://example.com/fish.jpg" },
    "G": { name: "Giraffe", image: "https://example.com/giraffe.jpg" },
    "H": { name: "Horse", image: "https://example.com/horse.jpg" },
    "I": { name: "Ice cream", image: "https://example.com/icecream.jpg" },
    "J": { name: "Jaguar", image: "https://example.com/jaguar.jpg" },
    "K": { name: "Kangaroo", image: "https://example.com/kangaroo.jpg" },
    "L": { name: "Lion", image: "https://example.com/lion.jpg" },
    "M": { name: "Monkey", image: "https://example.com/monkey.jpg" },
    "N": { name: "Nightingale", image: "https://example.com/nightingale.jpg" },
    "O": { name: "Orange", image: "https://example.com/orange.jpg" },
    "P": { name: "Pineapple", image: "https://example.com/pineapple.jpg" },
    "Q": { name: "Quail", image: "https://example.com/quail.jpg" },
    "R": { name: "Rabbit", image: "https://example.com/rabbit.jpg" },
    "S": { name: "Snake", image: "https://example.com/snake.jpg" },
    "T": { name: "Tiger", image: "https://example.com/tiger.jpg" },
    "U": { name: "Umbrella", image: "https://example.com/umbrella.jpg" },
    "V": { name: "Vulture", image: "https://example.com/vulture.jpg" },
    "W": { name: "Whale", image: "https://example.com/whale.jpg" },
    "X": { name: "Xylophone", image: "https://example.com/xylophone.jpg" },
    "Y": { name: "Yak", image: "https://example.com/yak.jpg" },
    "Z": { name: "Zebra", image: "https://example.com/zebra.jpg" },
    "0": { name: "Zero", image: "https://example.com/zero.jpg" },
    "1": { name: "One", image: "https://example.com/one.jpg" },
    "2": { name: "Two", image: "https://example.com/two.jpg" },
    "3": { name: "Three", image: "https://example.com/three.jpg" },
    "4": { name: "Four", image: "https://example.com/four.jpg" },
    "5": { name: "Five", image: "https://example.com/five.jpg" },
    "6": { name: "Six", image: "https://example.com/six.jpg" },
    "7": { name: "Seven", image: "https://example.com/seven.jpg" },
    "8": { name: "Eight", image: "https://example.com/eight.jpg" },
    "9": { name: "Nine", image: "https://example.com/nine.jpg" }
};
// Function to create buttons dynamically
function createButtons() {
    var container = document.getElementById("button-container");
    var allKeys = Object.keys(examples);
    allKeys.forEach(function (key) {
        var button = document.createElement("button");
        button.textContent = key;
        button.classList.add("letter-btn");
        button.dataset.letter = key;
        button.addEventListener("click", handleButtonClick);
        container.appendChild(button);
    });
}
// Handle button click
function handleButtonClick(e) {
    var button = e.target;
    var letter = button.dataset.letter;
    if (letter && examples[letter]) {
        var example = examples[letter];
        displayExample(example);
        changeButtonColor(button);
        playFireworks(button);
        speakText(letter); // Add the speakText function to read the letter
    }
}
// Display example (fruit or animal) with placeholder image
function displayExample(example) {
    var exampleDiv = document.getElementById("example");
    exampleDiv.innerHTML = "<h2>".concat(example.name, "</h2><div class=\"placeholder\">Loading...</div>");
    // Lazy load the image
    var img = new Image();
    img.src = example.image;
    img.onload = function () {
        exampleDiv.innerHTML = "<h2>".concat(example.name, "</h2><img src=\"").concat(example.image, "\" alt=\"").concat(example.name, "\" />");
    };
    img.onerror = function () {
        exampleDiv.innerHTML = "<h2>".concat(example.name, "</h2><p>Image failed to load</p>");
    };
}
// Change button color on click
function changeButtonColor(button) {
    button.style.backgroundColor = "#ff6347"; // Change to a different color
}
// Play fireworks effect on button click
function playFireworks(button) {
    var firework = document.createElement("div");
    firework.classList.add("firework");
    document.body.appendChild(firework);
    var buttonRect = button.getBoundingClientRect();
    firework.style.left = "".concat(buttonRect.left + buttonRect.width / 2 - 10, "px");
    firework.style.top = "".concat(buttonRect.top + buttonRect.height / 2 - 10, "px");
    // Remove firework after animation
    setTimeout(function () {
        firework.remove();
    }, 1000);
}
// Function to speak text (letter or number)
function speakText(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
// Initialize the page
createButtons();
