# SpendWise Budget Tracker

SpendWise is a personal budget and expense tracking dashboard designed to help users organize and view their financial information in a simple and responsive interface.

## Dashboard Architecture

The SpendWise dashboard uses a combination of CSS Grid and Flexbox to create a clean and responsive layout.

### CSS Grid

CSS Grid is used for the main dashboard structure and the cards grid.

The dashboard shell separates the sidebar from the main content area. The cards grid is also built with Grid so that the budget cards can be arranged neatly across the available space.

Grid was chosen because it makes it easier to control the overall page structure and create responsive columns. On smaller screens, the layouts change to a single-column structure.

### Flexbox

Flexbox is used for smaller component-level layouts, including:

* Sidebar navigation
* Header content
* Navigation items
* Budget card content
* Buttons and other aligned elements

Flexbox is useful for aligning items horizontally or vertically and for allowing navigation elements to wrap when the screen becomes smaller.

## Responsive Design

The dashboard is responsive and adapts to different screen sizes.

Below 768px, the dashboard changes to a single-column layout. The cards also stack vertically, making the application easier to use on phones and smaller screens.

### How to Preview Responsive Design

1. Open `index.html` in a browser using VS Code Live Server.
2. Open the browser Developer Tools by pressing `F12`.
3. Select the **Toggle Device Toolbar** option.
4. Choose a mobile device or resize the browser window.
5. Resize the screen to below 768px to see the responsive layout.

## Dark Mode

SpendWise includes a dark mode design using CSS custom properties and the `prefers-color-scheme` media query.

The browser can automatically display the dark theme when the operating system or browser is set to dark mode.

### How to Preview Dark Mode

On Windows:

1. Open **Settings**.
2. Go to **Personalization → Colors**.
3. Change the Windows mode to **Dark** if your browser follows the system theme.
4. Refresh the SpendWise page.
5. The dashboard should display the dark color theme.

You can also use your browser's developer tools to test the `prefers-color-scheme: dark` media feature.

## Accessibility

The dashboard includes semantic HTML elements such as:

* `<aside>`
* `<main>`
* `<header>`
* `<section>`
* `<article>`

Dashboard cards also use `tabindex` so that users can reach them using keyboard navigation. Hover and focus interactions provide visual feedback when interacting with the cards.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Responsive Design
* Dark Mode
* Git and GitHub

## Project Structure

```text
Budget-tracker/
├── index.html
├── style.css
└── README.md
```


## JavaScript Foundation

SpendWise uses JavaScript to make the budget tracker interactive. The JavaScript code collects information from the user, performs calculations, and displays the results in the browser console.

### JavaScript Concepts Implemented

The JavaScript foundation of SpendWise demonstrates the following concepts:

* Variables
* User input with `prompt()`
* Data types
* Number conversion using `Number()`
* Arithmetic calculations
* Functions
* Function parameters and return values
* Console output using `console.log()`

### Variables

Variables are used to store budget and expense information.

```javascript
let budget = 50000;
let expenses = 15000;
```

The `budget` variable stores the available budget, while `expenses` stores the total expenses.

### User Input

SpendWise collects budget information directly from the user using JavaScript prompts.

```javascript
let userBudget = prompt("Enter your budget:");
let userExpenses = prompt("Enter your total expenses:");
```

The user enters their budget and total expenses when the JavaScript program runs.

### Converting User Input to Numbers

Values collected using `prompt()` are returned as text. Therefore, `Number()` is used to convert the user input into numbers before performing calculations.

```javascript
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);
```

This allows SpendWise to correctly perform mathematical calculations with the entered values.

### Calculating the Remaining Balance

The remaining balance is calculated by subtracting total expenses from the budget.

```javascript
let balance = calculateBalance(userBudget, userExpenses);
```

For example, if the user enters a budget of 50,000 and expenses of 15,000, the remaining balance will be 35,000.

### Reusable Functions

SpendWise uses reusable functions to organize the calculations.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The `calculateBalance()` function receives the budget and expenses as parameters and returns the remaining balance.

Another function calculates an estimated weekly budget:

```javascript
function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}
```

Using functions makes the JavaScript code easier to understand, reuse, and maintain.

### Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

```javascript
console.log("User Budget:", userBudget);
console.log("User Expenses:", userExpenses);
console.log("Remaining Balance:", balance);
console.log("Weekly Budget:", weeklyBudget);
```

This allows the user to verify the budget, expenses, remaining balance, and estimated weekly budget.

### Example

If the user enters:

* Budget: 50,000
* Expenses: 15,000

SpendWise calculates:

* Remaining Balance: 35,000
* Weekly Budget: 12,500

This JavaScript foundation provides the basic functionality needed to continue developing SpendWise into a fully interactive budget and expense tracker.
