// Select the form and result message elements
const form = document.getElementById('palindromeForm');
const resultMessage = document.getElementById('resultMessage');

// Add an event listener to handle form submission
form.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input
  const userInput = document.getElementById('userInput').value;

  // Clean the input: Remove non-alphanumeric characters and convert to lowercase
  const cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the cleaned input
  const reversedInput = cleanedInput.split('').reverse().join('');

  // Check if the cleaned input matches the reversed input
  if (cleanedInput === reversedInput && cleanedInput !== "") {
    resultMessage.innerHTML = `<span style="color: green;">Yes, "${userInput}" is a palindrome!</span>`;
  } else {
    resultMessage.innerHTML = `<span style="color: red;">No, "${userInput}" is not a palindrome.</span>`;
  }

  // Clear the input field
  document.getElementById('userInput').value = '';
};
