# SpendWise – Interactive Budget Tracker

SpendWise is a simple, responsive budgeting application built with HTML, CSS, and JavaScript. It helps users set a monthly budget, record expenses, monitor their remaining balance, and review spending by category. Currency values are displayed in Kenyan Shillings (KSh).

## Project files

- `index.html` – page structure, forms, dashboard cards, expense table, and report section.
- `style.css` – layout, colours, responsive styling, buttons, tables, and dark-mode support.
- `script.js` – application data, calculations, conditional logic, DOM updates, event listeners, and browser storage.

## Improvements made for Week 6

- Added an interactive budget form so the user can set or update a monthly budget.
- Added an expense form with name, amount, category, and date fields.
- Added an expense table that updates when records are added or deleted.
- Added a delete button for each expense and a Clear All Expenses action.
- Added a live dashboard showing the total budget, total expenses, and remaining balance.
- Added conditional budget feedback for normal spending, a low balance, a fully used budget, and overspending.
- Added a budget progress indicator and spending totals grouped by category.
- Added browser `localStorage` so the budget and expense records remain available after refreshing the page in the same browser.
- Improved small-screen layout and retained support for the device's dark-mode preference.

## How conditionals are used

The project uses `if`, `else if`, and `else` statements to make decisions.

- The budget form checks that the entered budget is a valid number greater than zero.
- The expense form checks that the name, amount, category, and date are valid before saving a record.
- The `checkBudget()` function compares the remaining balance with the budget. It displays a different message when the user is over budget, has used the full budget, has 20% or less remaining, or is comfortably within budget.
- The expense display checks whether the expenses array is empty. If it is empty, the page displays a helpful message instead of an empty table.

## How arrays store data

The application declares an array:

```javascript
let expenses = [];
```

Each expense is stored as an object inside this array. An expense object contains an `id`, `name`, `amount`, `category`, and `date`.

When the user adds an expense, `expenses.push(newExpense)` adds the object to the array. The `filter()` method is used to create an updated array when an expense is deleted. The array makes it possible to manage many expense records instead of using separate variables for each expense.

## How loops process data

The project uses `for...of` loops to process the expense array:

- `calculateTotalExpenses()` loops through all records and adds their amounts.
- `displayExpenses()` loops through the records and creates a table row for each one.
- `displayCategoryReport()` loops through records to calculate spending totals for each category.

A `for...in` loop then displays the category totals in the report table.

## How the DOM is updated

The Document Object Model (DOM) allows JavaScript to change webpage content.

SpendWise uses methods and properties such as:

- `document.getElementById()` to select HTML elements.
- `textContent` to update dashboard amounts and budget messages.
- `document.createElement()` to create table rows, cells, and buttons.
- `append()` and `appendChild()` to add generated content to the page.
- `replaceChildren()` to clear old table content before displaying updated records.
- `classList.toggle()` to change the remaining balance styling when the user overspends.

These updates appear directly on the webpage without requiring the user to reload it.

## How user interactions are handled through events

The project uses `addEventListener()` to respond to user actions:

- The budget form listens for the `submit` event, validates the new budget, and updates the dashboard.
- The expense form listens for the `submit` event, validates the input, creates an expense object, and adds it to the array.
- The expense table listens for `click` events to handle dynamically created Delete buttons. This is an example of event delegation.
- The Clear All Expenses button listens for a `click` event and asks the user to confirm before removing all expense records.

The form submit handlers use `event.preventDefault()` to stop the browser from reloading the page when a form is submitted.

## Challenges encountered and how they were resolved

- **Keeping totals accurate:** The dashboard could become inconsistent when an expense was added or deleted. The project resolves this by recalculating totals and refreshing the dashboard after every data change.
- **Handling invalid input:** Empty names, invalid amounts, and missing categories or dates are checked before a record is added.
- **Updating buttons created by JavaScript:** Delete buttons do not exist when the page first loads. Event delegation on the expense table allows clicks on these dynamically created buttons to be handled.
- **Keeping records after refresh:** Browser `localStorage` is used to save the budget and expense array. The data is loaded when the application starts.
- **Displaying budget warnings:** Conditional statements compare the remaining balance with the budget and show appropriate feedback.

## How to run the project

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open the folder in Visual Studio Code.
4. Open `index.html` in a browser, or use the VS Code Live Server extension.
5. Set a budget and add expenses to test the dashboard.

No database or installation is required. Data is saved in the browser where the application is being used.

## Testing checklist

- [ ] The dashboard loads and shows the default budget of KSh 50,000.
- [ ] A valid budget can be entered and updated.
- [ ] An expense with a valid name, amount, category, and date can be added.
- [ ] Expense records appear in the table.
- [ ] Total expenses and remaining balance update after adding an expense.
- [ ] Budget feedback changes when the remaining budget is low or negative.
- [ ] An individual expense can be deleted.
- [ ] All expenses can be cleared after confirmation.
- [ ] Category totals update when expenses are added or deleted.
- [ ] Data remains after refreshing the same browser.

## Technologies used

- HTML5
- CSS3 (Grid, Flexbox, responsive media queries)
- JavaScript (variables, arrays, objects, conditionals, loops, functions, DOM manipulation, events, and localStorage)
