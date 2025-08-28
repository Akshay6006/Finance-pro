import React, { useState } from "react";
import "../styles/Tools.css";

export default function Tools() {
  // States for EMI Calculator
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [emi, setEmi] = useState(null);

  // States for Savings Calculator
  const [monthly, setMonthly] = useState("");
  const [sRate, setSRate] = useState("");
  const [sTime, setSTime] = useState("");
  const [savings, setSavings] = useState(null);

  // States for Investment Calculator
  const [invest, setInvest] = useState("");
  const [iRate, setIRate] = useState("");
  const [iTime, setITime] = useState("");
  const [future, setFuture] = useState(null);

  // States for Expense Splitter
  const [total, setTotal] = useState("");
  const [people, setPeople] = useState("");
  const [split, setSplit] = useState(null);

  // EMI Calculation
  const calculateEMI = (e) => {
    e.preventDefault();
    const principal = parseFloat(loan);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    const months = parseFloat(time) * 12;

    if (principal && monthlyRate && months) {
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi("Enter valid details!");
    }
  };

  // Savings Calculator
  const calculateSavings = (e) => {
    e.preventDefault();
    const monthlyAmt = parseFloat(monthly);
    const monthlyRate = parseFloat(sRate) / 12 / 100;
    const months = parseFloat(sTime) * 12;

    if (monthlyAmt && monthlyRate && months) {
      let futureValue =
        monthlyAmt *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
      setSavings(futureValue.toFixed(2));
    } else {
      setSavings("Enter valid details!");
    }
  };

  // Investment Calculator
  const calculateInvestment = (e) => {
    e.preventDefault();
    const principal = parseFloat(invest);
    const yearlyRate = parseFloat(iRate) / 100;
    const years = parseFloat(iTime);

    if (principal && yearlyRate && years) {
      let futureValue = principal * Math.pow(1 + yearlyRate, years);
      setFuture(futureValue.toFixed(2));
    } else {
      setFuture("Enter valid details!");
    }
  };

  // Expense Splitter
  const calculateSplit = (e) => {
    e.preventDefault();
    const totalAmt = parseFloat(total);
    const numPeople = parseInt(people);

    if (totalAmt && numPeople && numPeople > 0) {
      let perPerson = totalAmt / numPeople;
      setSplit(perPerson.toFixed(2));
    } else {
      setSplit("Enter valid details!");
    }
  };

  return (
    <div className="tools-container">
      <h1>🛠 Financial Tools</h1>
      <p className="subtitle">
        Plan smarter with these quick financial calculators
      </p>

      {/* Grid Layout */}
      <div className="tools-grid">
        {/* EMI Calculator */}
        <div className="tool-card">
          <h2>🧮 EMI Calculator</h2>
          <form onSubmit={calculateEMI}>
            <input
              type="number"
              placeholder="Loan Amount (₹)"
              value={loan}
              onChange={(e) => setLoan(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Time (Years)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <button type="submit">Calculate EMI</button>
          </form>
          {emi && <p className="result">Your EMI: ₹{emi}</p>}
        </div>

        {/* Savings Calculator */}
        <div className="tool-card">
          <h2>💳 Savings Calculator</h2>
          <form onSubmit={calculateSavings}>
            <input
              type="number"
              placeholder="Monthly Savings (₹)"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={sRate}
              onChange={(e) => setSRate(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Time (Years)"
              value={sTime}
              onChange={(e) => setSTime(e.target.value)}
              required
            />
            <button type="submit">Calculate Savings</button>
          </form>
          {savings && <p className="result">Your Future Savings: ₹{savings}</p>}
        </div>

        {/* Investment Growth */}
        <div className="tool-card">
          <h2>📈 Investment Growth</h2>
          <form onSubmit={calculateInvestment}>
            <input
              type="number"
              placeholder="Initial Investment (₹)"
              value={invest}
              onChange={(e) => setInvest(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={iRate}
              onChange={(e) => setIRate(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Time (Years)"
              value={iTime}
              onChange={(e) => setITime(e.target.value)}
              required
            />
            <button type="submit">Calculate Growth</button>
          </form>
          {future && <p className="result">Future Value: ₹{future}</p>}
        </div>

        {/* Expense Splitter */}
        <div className="tool-card">
          <h2>📊 Expense Splitter</h2>
          <form onSubmit={calculateSplit}>
            <input
              type="number"
              placeholder="Total Expense (₹)"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Number of People"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
            <button type="submit">Split Expense</button>
          </form>
          {split && <p className="result">Each Person Pays: ₹{split}</p>}
        </div>
      </div>
    </div>
  );
}
