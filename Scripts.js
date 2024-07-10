// Function to add a value to the display
function AddToDisplay(Value) {
    document.getElementById("display").value += Value;
    // Auto-scroll to the right
    display.scrollLeft = display.scrollWidth;
}
// Event listener for keyboard input (numeric keys and basic operators)
document.addEventListener('keypress', function (event) {
    // Check which key is pressed and call AddToDisplay function with the corresponding value to display
    if (event.key >= '0' && event.key <= '9') {
        // Add numeric keys to display
        AddToDisplay(event.key);
    }
    else if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
        // Add basic operators to display
        AddToDisplay(event.key);
    }
    else if (event.key == '.') {
        // Add decimal point to display
        AddToDisplay(event.key);
    }
});
// Function to clear the display
function ClearDisplay() {
    document.getElementById("display").value = '';
}
// Listen for 'C' or 'c' key to clear the display
document.addEventListener('keypress', function (event) {
    // Clear the display when 'C' or 'c' is pressed
    if (event.key == 'C' || event.key == 'c') {
        ClearDisplay();
    }
});
// Function to delete the last character from the display
function Delete() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}
// Listen for Backspace or Delete key to delete the last character from the display
document.addEventListener('keydown', function (event) {
    // Delete the last character when Backspace or Delete is pressed
    if (event.key == 'Backspace' || event.key == 'Delete') {
        Delete();
    }
});
// Function to evaluate the expression in the display and show the result
function Equals() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
// Listen for Enter key to evaluate the expression in the display
document.addEventListener('keydown', function (event) {
    // Evaluate the expression when Enter is pressed
    if (event.key == 'Enter') {
        event.preventDefault();
        Equals();
    }
});