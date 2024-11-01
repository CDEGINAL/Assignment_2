// Function to reverse a string
function reverseString() {
    const input = document.getElementById("reverseInput").value.trim();
    const output = document.getElementById("reverseOutput");

    if (input === "") {
        output.textContent = "Please enter a valid input.";
        return;
    }

    output.textContent = `Reversed: ${input.split("").reverse().join("")}`;
}

// Function to check if a series of numbers is a palindrome
function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value.trim();
    const output = document.getElementById("palindromeOutput");

    if (input === "" || !/^\d+$/.test(input)) {
        output.textContent = "Please enter a valid series of numbers.";
        return;
    }

    const reversedInput = input.split("").reverse().join("");
    output.textContent = input === reversedInput ? "It is a palindrome." : "It is not a palindrome.";
}

// Function to calculate the total including tip
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotalInput").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentageInput").value);
    const output = document.getElementById("tipOutput");

    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal <= 0 || tipPercentage < 0) {
        output.textContent = "Please enter valid subtotal and tip percentage.";
        return;
    }

    const tipAmount = (tipPercentage / 100) * subtotal;
    const total = subtotal + tipAmount;
    output.textContent = `Total including tip: $${total.toFixed(2)}`;
}
