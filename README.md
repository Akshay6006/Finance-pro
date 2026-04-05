# Finance Dashboard (Frontend Assignment)

## Overview

This project is a clean and interactive **Finance Dashboard** built using React.
It allows users to track financial activity, analyze spending patterns, and visualize data through charts.

The application is designed with a focus on **user experience, state management, and modular component structure**.

---

## Features

### Dashboard Overview

* Total Balance, Income, and Expenses summary cards
* Dynamic calculations based on transaction data
* Visual representation using charts:

  * 📈 Balance trend (Line Chart)
  * 🥧 Spending breakdown (Pie Chart)

### Transactions Management

* Add new transactions (Admin only)
* View transaction list with:

  * Date
  * Category
  * Amount
  * Type (Income / Expense)

### Filtering & Search

* Search transactions by category
* Filter by:

  * Income
  * Expense
  * All

### Role-Based UI (Simulated RBAC)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add transactions

### Insights Section

* Displays highest spending category
* Provides basic financial observations

---

## Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Context API
* **Charts:** Recharts
* **Styling:** CSS

---

## Project Structure

```
src/
├── components/
│   ├── AddTransaction.jsx
│   ├── Charts.jsx
│   ├── Insights.jsx
│   ├── Navbar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│
├── context/
│   └── AppContext.jsx
│
├── styles/
│   └── Dashboard.css
```

---

## How to Run

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## Key Decisions

* Used **Context API** for managing global state (transactions, roles)
* Chose **Recharts** for simple and effective data visualization
* Focused on **clean UI and usability** instead of unnecessary complexity
* Implemented **role-based UI logic** to simulate real-world applications

---

## Assumptions

* Data is managed locally (no backend integration)
* Roles are simulated for demonstration purposes
* Transactions are stored in memory

---

## Future Improvements

* Edit/Delete transactions
* Backend integration (Firebase / Node.js)
* Authentication system
* Dark mode support
* Data persistence using localStorage

---

## Conclusion

This project demonstrates:

* Frontend architecture and component design
* State management
* UI/UX thinking
* Data handling and visualization

---

⭐ This project was built as part of a frontend assignment to showcase practical development skills.
