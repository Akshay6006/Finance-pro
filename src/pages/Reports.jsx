import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Reports.css";

export default function Reports() {
  const [reportType, setReportType] = useState("weekly");
  const [customDate, setCustomDate] = useState("");

  const pieData = [
    { name: "Marketing", value: 400 },
    { name: "Operations", value: 300 },
    { name: "Development", value: 600 },
    { name: "HR", value: 200 },
  ];
  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

  const lineData = [
    { month: "Jan", expenditure: 400 },
    { month: "Feb", expenditure: 300 },
    { month: "Mar", expenditure: 500 },
    { month: "Apr", expenditure: 600 },
    { month: "May", expenditure: 700 },
    { month: "Jun", expenditure: 650 },
  ];

  const barData = [
    { department: "Marketing", revenue: 2400 },
    { department: "Sales", revenue: 1398 },
    { department: "IT", revenue: 9800 },
    { department: "HR", revenue: 3908 },
    { department: "Operations", revenue: 4800 },
  ];

  const handleDownload = () => {
    alert(`Downloading ${reportType} report ${customDate ? "for " + customDate : ""}...`);
  };

  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports & Analytics</h2>

      <div className="report-filters">
        <label>Report Type: </label>
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>

        <label>Custom Date: </label>
        <input
          type="date"
          value={customDate}
          onChange={(e) => setCustomDate(e.target.value)}
        />

        <button className="download-btn" onClick={handleDownload}>
          ⬇️ Download
        </button>
      </div>

      <div className="reports-row">
        <div className="report-card">
          <h3 className="report-subtitle">Expenditure Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="report-card">
          <h3 className="report-subtitle">Monthly Expenditure</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="expenditure" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="reports-row">
        <div className="report-card full-width">
          <h3 className="report-subtitle">Department Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
