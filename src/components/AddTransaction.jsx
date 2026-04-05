import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction() {
  const { transactions, setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([...transactions, newTransaction]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
      <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />

      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}