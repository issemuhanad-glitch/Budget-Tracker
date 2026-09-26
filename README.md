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
