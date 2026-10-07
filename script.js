// SpendWise budget variables
let budget = 50000;
let expenses = 15000;

console.log("SpendWise Budget:", budget);
console.log("SpendWise Expenses:", expenses);

// Collect user input
let userBudget = prompt("Enter your budget:");
let userExpenses = prompt("Enter your total expenses:");

// Convert input to numbers
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Calculate remaining balance
let balance = calculateBalance(userBudget, userExpenses);

// Display results
console.log("User Budget:", userBudget);
console.log("User Expenses:", userExpenses);
console.log("Remaining Balance:", balance);

// Display results on the SpendWise page

const result = document.createElement("p");

result.textContent = `Budget: ${userBudget} | Expenses: ${userExpenses} | Remaining Balance: ${balance}`;

document.body.appendChild(result);