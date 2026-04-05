import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  PieChart, Pie, Cell, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from "recharts";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  
  const categoryData = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map(key => ({
    name: key,
    value: categoryData[key],
  }));

  
  let balance = 0;
  const lineData = transactions.map(t => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return { date: t.date, balance };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      
    
      <div>
        <h3>Spending Breakdown</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            outerRadius={100}
            label
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div>
        <h3>Balance Trend</h3>
        <LineChart width={400} height={300} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#0077b6" />
        </LineChart>
      </div>

    </div>
  );
}