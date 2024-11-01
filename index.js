// Function to display output text
function displayOutput(elementId, message) {
    const outputElement = document.getElementById(elementId);
    outputElement.textContent = message;
}

// Function to reverse a string without using .reverse() or .join()
function reverseString() {
    const input = document.getElementById("reverseInput").value.trim();

    if (!input) {
        displayOutput("reverseOutput", "Please enter a valid input.");
        return;
    }

    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }

    displayOutput("reverseOutput", `Reversed: ${reversedString}`);
}

// Function to check if a series of numbers is a palindrome without using .reverse() or .join()
function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value.trim();

    if (!input || !/^\d+$/.test(input)) {
        displayOutput("palindromeOutput", "Please enter a valid series of numbers.");
        return;
    }

    let isPalindrome = true;
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    displayOutput("palindromeOutput", isPalindrome ? "It is a palindrome." : "It is not a palindrome.");
}

// Function to calculate the total including tip
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotalInput").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentageInput").value);

    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal <= 0 || tipPercentage < 0) {
        displayOutput("tipOutput", "Please enter valid subtotal and tip percentage.");
        return;
    }

    const tipAmount = (tipPercentage / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;
    displayOutput("tipOutput", `Total including tip: $${totalAmount.toFixed(2)}`);
}
