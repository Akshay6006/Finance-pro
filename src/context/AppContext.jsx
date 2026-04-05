import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2026-04-01",
      amount: 50000,
      category: "Salary",
      type: "income",
    },
    {
      id: 2,
      date: "2026-04-02",
      amount: 2500,
      category: "Food",
      type: "expense",
    },
    {
      id: 3,
      date: "2026-04-03",
      amount: 10000,
      category: "Investment",
      type: "expense",
    },
  ]);

  return (
    <AppContext.Provider value={{ role, setRole, transactions, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};