import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AddTransaction from "../components/AddTransaction";
import Charts from "../components/Charts";
import Insights from "../components/Insights";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { transactions, role } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const userName = "Akshay";

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expense;

  const filteredTransactions = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filter === "all" ? true : t.type === filter
    );

  return (
    <div className="dashboard-page">

      <div className="welcome-banner">
        <h2>
          Welcome back, <span>{userName}</span> 👋
        </h2>
        <p>Here’s your financial overview.</p>
      </div>

      <div className="dashboard-cards">
        <div className="card balance">
          <h3>Total Balance</h3>
          <p>₹{balance}</p>
        </div>

        <div className="card income">
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="card expense">
          <h3>Expenses</h3>
          <p>₹{expense}</p>
        </div>
      </div>

      <div className="charts-section">
        <Charts />
      </div>

      <div className="insights-section">
        <Insights />
      </div>

      {role === "admin" && (
        <div className="add-section">
          <h3>Add Transaction</h3>
          <AddTransaction />
        </div>
      )}

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="transactions">
        <h2>Recent Transactions</h2>

        {filteredTransactions.length === 0 ? (
          <p style={{ padding: "10px" }}>No transactions found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.category}</td>
                  <td
                    className={
                      t.type === "income"
                        ? "positive"
                        : "negative"
                    }
                  >
                    ₹{t.amount}
                  </td>
                  <td>{t.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}