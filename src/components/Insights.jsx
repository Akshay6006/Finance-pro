import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) =>
      categoryTotals[a] > categoryTotals[b] ? a : b,
    Object.keys(categoryTotals)[0]
  );

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Insights</h3>
      <p>
        📌 Highest spending category: <b>{highestCategory || "N/A"}</b>
      </p>
    </div>
  );
}