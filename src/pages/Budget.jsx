import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Budget.css";

export default function Budget() {
  const [selectedMonth, setSelectedMonth] = useState("January");

  // Example Budget Data
  const budgetData = [
    { category: "Marketing", planned: 4000, actual: 3500 },
    { category: "Development", planned: 6000, actual: 7000 },
    { category: "Operations", planned: 3000, actual: 2500 },
    { category: "HR", planned: 2000, actual: 1800 },
    { category: "Sales", planned: 5000, actual: 5200 },
  ];

  const handleDownload = () => {
    alert(`Downloading budget report for ${selectedMonth}...`);
  };

  return (
    <div className="budget-container">
      <h2 className="budget-title">Budget Overview</h2>

      {/* 🔹 Filters */}
      <div className="budget-filters">
        <label>Select Month: </label>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <button className="download-btn" onClick={handleDownload}>
          ⬇️ Download Report
        </button>
      </div>

      {/* 🔹 Summary Numbers */}
      <div className="budget-summary">
        <div className="budget-card">
          <h3>Total Planned</h3>
          <p>₹ {budgetData.reduce((acc, item) => acc + item.planned, 0)}</p>
        </div>
        <div className="budget-card">
          <h3>Total Actual</h3>
          <p>₹ {budgetData.reduce((acc, item) => acc + item.actual, 0)}</p>
        </div>
        <div className="budget-card">
          <h3>Variance</h3>
          <p>
            ₹{" "}
            {budgetData.reduce((acc, item) => acc + (item.planned - item.actual), 0)}
          </p>
        </div>
      </div>

      {/* 🔹 Bar Chart */}
      <div className="budget-chart">
        <h3 className="budget-subtitle">Planned vs Actual by Category</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={budgetData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="planned" fill="#2563eb" />
            <Bar dataKey="actual" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
