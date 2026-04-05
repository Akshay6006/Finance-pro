import React from "react";
import "../styles/Home.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

export default function HomePage() {
  const pieData = [
    { name: "Expenses", value: 400 },
    { name: "Savings", value: 300 },
    { name: "Investments", value: 200 }
  ];

  const lineData = [
    { month: "Jan", expenses: 400, savings: 300 },
    { month: "Feb", expenses: 500, savings: 350 },
    { month: "Mar", expenses: 450, savings: 400 },
    { month: "Apr", expenses: 600, savings: 420 },
    { month: "May", expenses: 700, savings: 500 },
    { month: "Jun", expenses: 650, savings: 550 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="homepage">
      <section className="hero-container">
        <div className="hero-content">
          <h1>Take Control of Your Finances</h1>
          <p>Track expenses, set goals, and plan your future with confidence.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>


      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Smart Expense Tracking</h3>
            <p>
              Automatically categorize and analyze your spending patterns with AI insights.
            </p>
          </div>
          <div className="why-card">
            <h3>Secure & Reliable</h3>
            <p>
              Your data is fully encrypted and protected with bank-level security.
            </p>
          </div>
          <div className="why-card">
            <h3>Financial Growth Tools</h3>
            <p>
              Set saving goals, get personalized recommendations, and grow wealth faster.
            </p>
          </div>
          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>
              Our experts are always here to help you achieve financial freedom.
            </p>
          </div>
        </div>
      </section>


<section className="services">
  <h2>Our Services</h2>
  <div className="service-grid">
    <div className="service-card">
      <div className="icon">💰</div>
      <h3>Budget Planning</h3>
      <p>Create smart budgets, set spending limits, and save more effectively.</p>
    </div>

    <div className="service-card">
      <div className="icon">📊</div>
      <h3>Expense Tracking</h3>
      <p>Track your daily, weekly, and monthly spending with easy visual charts.</p>
    </div>

    <div className="service-card">
      <div className="icon">📈</div>
      <h3>Investment Insights</h3>
      <p>AI-powered suggestions to maximize ROI and diversify your portfolio.</p>
    </div>

    <div className="service-card">
      <div className="icon">💳</div>
      <h3>Debt Management</h3>
      <p>Stay on top of loans & EMIs with repayment reminders and strategies.</p>
    </div>

    <div className="service-card">
      <div className="icon">🎯</div>
      <h3>Savings Goals</h3>
      <p>Set and track progress for short-term & long-term financial goals.</p>
    </div>

    <div className="service-card">
      <div className="icon">🛡️</div>
      <h3>Secure Transactions</h3>
      <p>Bank-grade encryption to ensure your money and data are always safe.</p>
    </div>

    <div className="service-card">
      <div className="icon">📅</div>
      <h3>Bill Reminders</h3>
      <p>Never miss a payment with automated bill and EMI reminders.</p>
    </div>

    <div className="service-card">
      <div className="icon">🌍</div>
      <h3>Multi-Currency Support</h3>
      <p>Manage finances across different currencies with real-time conversion.</p>
    </div>

    <div className="service-card">
      <div className="icon">🤝</div>
      <h3>Financial Coaching</h3>
      <p>One-on-one coaching sessions to help you make smarter money decisions.</p>
    </div>

    <div className="service-card">
      <div className="icon">⚡</div>
      <h3>Quick Analytics</h3>
      <p>Get instant insights into your spending & saving patterns at a glance.</p>
    </div>
  </div>
</section>



    
      <section className="stats">
        <h2>Live Financial Stats</h2>
        <div className="stats-container">
    
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

      
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#ff7300"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="#007bff"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
