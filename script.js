
// =====================================
// SpendWise - Week 6 Interactive Project
// =====================================

// 1. Budget variable
let budget = 50000;

// 2. Array to store multiple expenses
let expenses = [];

// 3. Get HTML elements from the DOM
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");

const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseDate = document.getElementById("expense-date");

const totalBudgetDisplay = document.getElementById("total-budget");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");

const budgetMessage = document.getElementById("budget-message");
const expenseTableBody = document.getElementById("expense-table-body");

// 4. Format money in Kenyan Shillings
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 5. Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 6. Calculate remaining balance
function calculateBalance() {
    return budget - calculateTotalExpenses();
}

// 7. Check budget status using conditionals
function checkBudget() {
    const balance = calculateBalance();

    if (balance < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your budget by " +
            formatMoney(Math.abs(balance));

    } else if (balance === 0) {
        budgetMessage.textContent =
            "You have used your entire budget!";

    } else if (balance <= budget * 0.2) {
        budgetMessage.textContent =
            "Warning! Your remaining budget is running low.";

    } else {
        budgetMessage.textContent =
            "Good job! You are within your budget.";
    }
}

// 8. Update dashboard information
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const balance = calculateBalance();

    totalBudgetDisplay.textContent = formatMoney(budget);

    totalExpensesDisplay.textContent =
        formatMoney(totalExpenses);

    remainingBalanceDisplay.textContent =
        formatMoney(balance);

    checkBudget();
}

// 9. Display expenses on the webpage
function displayExpenses() {

    // Clear previous records
    expenseTableBody.innerHTML = "";

    // Check if the array is empty
    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No expenses added yet.";

        row.appendChild(cell);
        expenseTableBody.appendChild(row);

    } else {

        // Loop through all expense records
        for (let expense of expenses) {

            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            const amountCell = document.createElement("td");
            const categoryCell = document.createElement("td");
            const dateCell = document.createElement("td");

            nameCell.textContent = expense.name;
            amountCell.textContent = formatMoney(expense.amount);
            categoryCell.textContent = expense.category;
            dateCell.textContent = expense.date;

            row.appendChild(nameCell);
            row.appendChild(amountCell);
            row.appendChild(categoryCell);
            row.appendChild(dateCell);

            expenseTableBody.appendChild(row);
        }
    }

    // Update dashboard after displaying expenses
    updateDashboard();
}

// 10. Handle budget form submission
budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        alert("Please enter a valid budget greater than zero.");
        return;
    }

    budget = newBudget;

    updateDashboard();

    budgetForm.reset();

    alert("Your budget has been updated successfully!");
});

// 11. Handle expense form submission
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;
    const date = expenseDate.value;

    // Validate user input
    if (
        name === "" ||
        !Number.isFinite(amount) ||
        amount <= 0 ||
        category === "" ||
        date === ""
    ) {
        alert("Please enter valid expense information.");
        return;
    }

    // Create a new expense record
    const newExpense = {
        name: name,
        amount: amount,
        category: category,
        date: date
    };

    // Store the record in the array
    expenses.push(newExpense);

    // Update the webpage
    displayExpenses();

    // Clear the form
    expenseForm.reset();

    alert("Expense added successfully!");
});

// 12. Set today's date automatically
expenseDate.value = new Date().toISOString().split("T")[0];

// 13. Display initial dashboard information
displayExpenses();

console.log("SpendWise Week 6 application is running!");
