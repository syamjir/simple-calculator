// Get the screen element
const screen = document.getElementById("screen");

// Function to handle button clicks
function btnclick(value) {
  screen.value += value;
}

// Function to clear the screen
function clearScreen() {
  screen.value = " ";
}

// Function to calculate and display the result
function findResult() {
  try {
    // Evaluate the expression in the screen value
    let result = eval(screen.value);
    // Check if the result is an integer
    if (result % 1 === 0) {
      screen.value = result;
      // Round to 2 decimal places if not an integer
    } else {
      screen.value = result.toFixed(2);
    }
    // Display error if evaluation fails
  } catch (e) {
    return (screen.value = "Error");
  }
}
