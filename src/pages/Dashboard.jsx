import React from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  // later we can fetch this from Firebase/Auth
  const userName = "Akshay"; 

  const transactions = [
    { id: 1, name: "Salary Credit", amount: "+ ₹50,000", date: "Aug 20, 2025" },
    { id: 2, name: "Grocery Store", amount: "- ₹2,450", date: "Aug 21, 2025" },
    { id: 3, name: "Stock Investment", amount: "- ₹10,000", date: "Aug 22, 2025" },
    { id: 4, name: "Freelance Income", amount: "+ ₹8,000", date: "Aug 23, 2025" },
  ];

  return (
    <div className="dashboard-page">

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h2>Welcome back, <span>{userName}</span> 👋</h2>
        <p>Here’s an overview of your finances today.</p>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card balance">
          <h3>Total Balance</h3>
          <p>₹1,25,000</p>
        </div>
        <div className="card income">
          <h3>Income</h3>
          <p>₹58,000</p>
        </div>
        <div className="card expense">
          <h3>Expenses</h3>
          <p>₹22,450</p>
        </div>
        <div className="card investment">
          <h3>Investments</h3>
          <p>₹40,000</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions">
        <h2>Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td className={t.amount.includes("+") ? "positive" : "negative"}>
                  {t.amount}
                </td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
