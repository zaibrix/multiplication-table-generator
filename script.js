// / Grab elements
const tableInput = document.getElementById('tableInput');
// YOUR CODE
const tableBtn = document.getElementById('tableBtn');
 // YOUR CODE
const tableOutput = document.getElementById('tableOutput');


tableBtn.addEventListener('click', function() {

// Get the number
const num = Number(tableInput.value)
// Clear output
tableOutput.innerHTML = "";


// FOR LOOP: 1 to 10
for (let i = 1; i <= 10; i++) {

// Calculate: num × i
const result = num * i;

// Show the equation
tableOutput.innerHTML += `${num} × ${i} = ${result}<br>`;
}
});