# Expense Tracker

## 📖 Project Overview
This project is an **Expense Tracker** application built with **React** and **TypeScript**. It allows users to:
- Add expense entries with **name**, **category**, and **price**.
- Validate input fields using **Zod**.
- Display all expenses in a table with a **debounced search** feature to filter by category.
- Delete individual expense entries.
- Persist data in **local storage**.
- Show validation and success/error messages using **React Hot Toast**.

The application is designed to be simple, responsive, and user-friendly, making it easy to track and manage expenses.

---

## 🛠️ Tech Stack
The following technologies and tools were used to build this project:
- **Frontend**:
  - React (with TypeScript)
  - React Context API (for state management)
  - TailwindCSS (for styling)
- **Validation**:
  - Zod (for input validation)
- **Utilities**:
  - Lodash (for debounce functionality)
- **Notifications**:
  - React Hot Toast (for toast notifications)
- **Development Tools**:
  - Vite or Create React App (for project setup)
  - ESLint and Prettier (for code linting and formatting)

---

## 🚀 Installation Instructions
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
2. **Navigate to the Project Folder**:
   cd expense-tracker
3. **Install Dependencies**:
   npm install
4.**Run the App**:
   npm star

## 🌟 Usage Guide

### Adding an Expense
1. **Fill out the form fields:**
   - **Name:** Enter the name of the expense (e.g., "Groceries").
   - **Category:** Choose or enter a category (e.g., Food, Travel, Entertainment).
   - **Price:** Enter the amount (must be a  number, e.g., 50).

2. **Click the Add button** to save the expense. The data will be validated using **Zod**:
   - If the input is **invalid**, a **React Hot Toast** error message will be displayed.
   - If the input is **valid**, the expense will be saved to **local storage** and displayed in the table.

### Viewing Expenses
All added expenses are displayed in a table with the following columns:

- **Name:** The name of the expense.
- **Category:** The category of the expense.
- **Price:** The amount of the expense.
- **Actions:** A delete button (🗑️) to remove the expense.

### Searching Expenses
Use the **search input** at the top of the table to filter expenses by category.

- The search is **debounced**, meaning it will only trigger after you stop typing for **300ms**, ensuring optimal performance.
- **Example:** Type "Food" in the search bar to display only expenses in the "Food" category.

### Deleting an Expense
- Click the **Delete button** (🗑️) next to an expense to remove it from the list and local storage.
- A **React Hot Toast** notification will confirm the deletion.

 
