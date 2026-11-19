// =============================================
// SpendWise - Week 6 Interactive Budget Tracker
// =============================================

// The budget and expense records are stored as JavaScript data.
const DEFAULT_BUDGET = 50000;
const STORAGE_KEY = "spendwise-week6-data";

let budget = DEFAULT_BUDGET;
let expenses = [];

// Get the HTML elements that JavaScript needs to update.
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
const budgetProgress = document.getElementById("budget-progress");
const budgetUsedDisplay = document.getElementById("budget-used");

const expenseTableBody = document.getElementById("expense-table-body");
const expenseCountDisplay = document.getElementById("expense-count");
const clearExpensesButton = document.getElementById("clear-expenses-button");
const categoryReportBody = document.getElementById("category-report-body");

// Format all money values consistently in Kenyan Shillings.
function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount).replace("KES", "KSh");
}

// Use the local date rather than UTC so the date is correct for the user.
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// Load saved data when the page opens.
// The try/catch prevents damaged browser storage from stopping the app.
function loadData() {
    try {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (savedData && typeof savedData === "object") {
            if (Number.isFinite(savedData.budget) && savedData.budget > 0) {
                budget = savedData.budget;
            }

            if (Array.isArray(savedData.expenses)) {
                expenses = savedData.expenses.filter((expense) =>
                    expense &&
                    typeof expense.name === "string" &&
                    Number.isFinite(expense.amount) &&
                    expense.amount > 0 &&
                    typeof expense.category === "string" &&
                    typeof expense.date === "string"
                );
            }
        }
    } catch (error) {
        console.warn("Saved SpendWise data could not be loaded.", error);
    }
}

// Save the current budget and all expense records in this browser.
function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ budget, expenses }));
    } catch (error) {
        console.warn("SpendWise could not save data in this browser.", error);
        budgetMessage.textContent =
            "Your changes are displayed, but this browser could not save them.";
    }
}

// Add all expense amounts together using a loop.
function calculateTotalExpenses() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Calculate the money left after expenses.
function calculateBalance() {
    return budget - calculateTotalExpenses();
}

// Use conditional statements to provide feedback about the budget.
function checkBudget() {
    const balance = calculateBalance();
    const totalExpenses = calculateTotalExpenses();

    if (balance < 0) {
        budgetMessage.textContent =
            `Warning! You have exceeded your budget by ${formatMoney(Math.abs(balance))}.`;
        budgetMessage.className = "status-danger";
    } else if (balance === 0) {
        budgetMessage.textContent = "You have used your entire budget.";
        budgetMessage.className = "status-warning";
    } else if (budget > 0 && balance <= budget * 0.2) {
        budgetMessage.textContent =
            "Warning! Your remaining budget is running low.";
        budgetMessage.className = "status-warning";
    } else if (totalExpenses === 0) {
        budgetMessage.textContent =
            "Your budget is ready. Add an expense to start tracking your spending.";
        budgetMessage.className = "status-good";
    } else {
        budgetMessage.textContent =
            "Good job! You are within your budget.";
        budgetMessage.className = "status-good";
    }
}

// Update the summary cards and budget progress indicator.
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const balance = calculateBalance();
    const percentageUsed = budget > 0
        ? (totalExpenses / budget) * 100
        : 0;

    totalBudgetDisplay.textContent = formatMoney(budget);
    totalExpensesDisplay.textContent = formatMoney(totalExpenses);
    remainingBalanceDisplay.textContent = formatMoney(balance);

    // Keep the progress element between 0 and 100, even when over budget.
    budgetProgress.value = Math.min(Math.max(percentageUsed, 0), 100);
    budgetUsedDisplay.textContent = `${Math.round(percentageUsed)}%`;

    remainingBalanceDisplay.classList.toggle("negative-balance", balance < 0);
    checkBudget();
}

// Display every expense in the table. Each record gets its own delete button.
function displayExpenses() {
    expenseTableBody.replaceChildren();
    expenseCountDisplay.textContent = expenses.length;

    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.textContent = "No expenses added yet.";
        cell.className = "empty-state";
        row.appendChild(cell);
        expenseTableBody.appendChild(row);
    } else {
        for (const expense of expenses) {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = expense.name;

            const amountCell = document.createElement("td");
            amountCell.textContent = formatMoney(expense.amount);

            const categoryCell = document.createElement("td");
            categoryCell.textContent = expense.category;

            const dateCell = document.createElement("td");
            dateCell.textContent = expense.date;

            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            deleteButton.dataset.expenseId = expense.id;
            deleteButton.setAttribute("aria-label", `Delete ${expense.name}`);
            actionCell.appendChild(deleteButton);

            row.append(
                nameCell,
                amountCell,
                categoryCell,
                dateCell,
                actionCell
            );
            expenseTableBody.appendChild(row);
        }
    }

    updateDashboard();
    displayCategoryReport();
}

// Build a category report by processing the expense array with a loop.
function displayCategoryReport() {
    categoryReportBody.replaceChildren();

    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 2;
        cell.textContent = "Add expenses to see your report.";
        cell.className = "empty-state";
        row.appendChild(cell);
        categoryReportBody.appendChild(row);
        return;
    }

    const categoryTotals = {};

    for (const expense of expenses) {
        if (categoryTotals[expense.category] === undefined) {
            categoryTotals[expense.category] = 0;
        }
        categoryTotals[expense.category] += expense.amount;
    }

    for (const category in categoryTotals) {
        const row = document.createElement("tr");
        const categoryCell = document.createElement("td");
        const totalCell = document.createElement("td");

        categoryCell.textContent = category;
        totalCell.textContent = formatMoney(categoryTotals[category]);

        row.append(categoryCell, totalCell);
        categoryReportBody.appendChild(row);
    }
}

// Handle a budget form submission.
budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        alert("Please enter a valid budget greater than zero.");
        return;
    }

    budget = newBudget;
    saveData();
    updateDashboard();
    budgetInput.value = "";
    alert("Your budget has been updated successfully!");
});

// Handle adding a new expense.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;
    const date = expenseDate.value;

    // Validate the form before adding a record to the array.
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

    const newExpense = {
        id: (window.crypto && crypto.randomUUID)
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
        name,
        amount,
        category,
        date
    };

    // push() adds the new expense object to the expenses array.
    expenses.push(newExpense);

    saveData();
    displayExpenses();
    expenseForm.reset();
    expenseDate.value = getTodayDate();
    alert("Expense added successfully!");
});

// Use event delegation so delete buttons work for dynamically created rows.
expenseTableBody.addEventListener("click", function (event) {
    const clickedButton = event.target.closest(".delete-button");

    if (!clickedButton) {
        return;
    }

    const expenseId = clickedButton.dataset.expenseId;
    expenses = expenses.filter((expense) => expense.id !== expenseId);

    saveData();
    displayExpenses();
});

// Clear all expense records after asking the user to confirm.
clearExpensesButton.addEventListener("click", function () {
    if (expenses.length === 0) {
        alert("There are no expenses to clear.");
        return;
    }

    const confirmed = confirm("Are you sure you want to delete all expense records?");
    if (!confirmed) {
        return;
    }

    expenses = [];
    saveData();
    displayExpenses();
});

// Set up the page using saved data and show the initial dashboard.
loadData();
budgetInput.value = budget;
expenseDate.value = getTodayDate();
document.getElementById("current-year").textContent = new Date().getFullYear();

displayExpenses();

console.log("SpendWise Week 6 application is running!");
