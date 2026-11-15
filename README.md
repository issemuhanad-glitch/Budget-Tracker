
# SpendWise - Personal Budget & Expense Tracker

## Project Description

SpendWise is a personal budget and expense tracking application developed using HTML, CSS, and JavaScript.

The application helps users manage their budgets, record expenses, monitor spending, and calculate their remaining balance.

## Week 6 Improvements

This week, SpendWise was improved by adding interactive JavaScript functionality.

The improvements include:

- Users can set and update their monthly budget.
- Users can add multiple expense records.
- Expenses are stored in an array.
- The application calculates total expenses automatically.
- The remaining balance is updated dynamically.
- The application displays budget warnings.
- Expense records are displayed directly in an HTML table.
- Users can interact with the application through forms and buttons.

## JavaScript Concepts Used

### 1. Conditional Statements

Conditional statements (`if`, `else if`, and `else`) are used to check the user's budget status.

The application provides different messages depending on the remaining balance.

For example:
- If the balance is negative, the application warns that the budget has been exceeded.
- If the balance is zero, it informs the user that the entire budget has been used.
- If the remaining balance is low, it displays a warning.
- Otherwise, it confirms that the user is within budget.

### 2. Arrays

An array called `expenses` stores multiple expense records.

Each expense is represented as an object containing:
- Expense name
- Amount
- Category
- Date

The `push()` method adds new expense records to the array.

### 3. Loops

The `for...of` loop processes the expense records stored in the array.

It is used to:
- Calculate total expenses.
- Display all expense records in the HTML table.

This makes it possible to manage multiple expenses efficiently.

### 4. DOM Manipulation

DOM manipulation is used to update webpage content dynamically.

JavaScript updates:
- Total budget.
- Total expenses.
- Remaining balance.
- Budget status messages.
- Expense table records.

Methods such as `getElementById()`, `createElement()`, `appendChild()`, and `textContent` are used to interact with the webpage.

### 5. Event Handling

Event listeners allow users to interact with SpendWise.

The application uses the `submit` event to handle:
- Budget updates.
- Adding new expenses.

The `preventDefault()` method prevents the browser from automatically refreshing the page when forms are submitted.

### 6. Connecting Everything Together

When a user adds an expense, JavaScript validates the information, stores the expense in the array, calculates the new totals, and updates the dashboard.

This creates an interactive experience where user actions immediately update the application.

## Challenges Encountered and Solutions

### Challenge 1: Managing Multiple Expenses

Initially, the application used individual variables to store budget and expense information.

**Solution:** An array was introduced to store multiple expense records.

### Challenge 2: Updating Dashboard Information

The dashboard initially displayed information using basic JavaScript output.

**Solution:** DOM manipulation was introduced to display updated information directly on the webpage.

### Challenge 3: Calculating Remaining Balance

It was necessary to calculate the remaining balance whenever a new expense was added.

**Solution:** Functions and loops were used to calculate total expenses and update the remaining balance automatically.

### Challenge 4: Validating User Input

Users might enter invalid or empty expense information.

**Solution:** Conditional statements were introduced to validate budget and expense inputs before processing them.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## Project Files

- `index.html` - Application structure.
- `style.css` - Application design and responsive layout.
- `script.js` - Application functionality and interactivity.
- `README.md` - Project documentation.

## Conclusion

The Week 6 improvements made SpendWise more interactive and useful.

The application now demonstrates JavaScript decision-making, arrays, loops, DOM manipulation, and event handling to help users manage their personal budgets and expenses.
