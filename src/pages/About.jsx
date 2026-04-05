import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <header className="about-hero">
        <div className="about-hero__content">
          <span className="about-hero__badge">All-in-one Personal Finance Hub</span>
          <h1>Understand, plan, and grow your money — effortlessly.</h1>
          <p className="about-hero__sub">
            Track expenses, split salary automatically, set budgets & goals, and get
            insights in real time. Secure by design. Built for clarity.
          </p>
          <div className="about-hero__cta">
            <Link to="/signup" className="btn btn--primary">Get Started</Link>
            <Link to="/login" className="btn btn--ghost">I already have an account</Link>
          </div>

          <div className="about-hero__metrics">
            <div className="metric">
              <div className="metric__value">99.9%</div>
              <div className="metric__label">App Uptime</div>
            </div>
            <div className="metric">
              <div className="metric__value">256-bit</div>
              <div className="metric__label">Encryption</div>
            </div>
            <div className="metric">
              <div className="metric__value">30s</div>
              <div className="metric__label">Avg. Sync Time</div>
            </div>
          </div>
        </div>
      </header>

      <main className="about-container">
        <section className="trust">
          <p className="trust__title">Trusted finance workflows</p>
          <div className="trust__logos">
            <span>● Budgeting</span>
            <span>● Salary Split</span>
            <span>● Reports</span>
            <span>● Goals</span>
            <span>● Bank Sync*</span>
          </div>
          <small className="trust__note">*Bank sync will be available when you connect MongoDB-backed integrations.</small>
        </section>

        <section className="section">
          <h2 className="section__title">How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="step__icon">🧾</div>
              <h3>1. Track & Import</h3>
              <p>Add transactions manually or import from CSV. Categories are auto-suggested to keep your books clean.</p>
            </div>
            <div className="step">
              <div className="step__icon">⚖️</div>
              <h3>2. Auto Salary Split</h3>
              <p>Define your split rules (e.g., 50% Savings, 30% Investments, 20% Expenses). We allocate instantly when salary arrives.</p>
            </div>
            <div className="step">
              <div className="step__icon">🎯</div>
              <h3>3. Budgets & Goals</h3>
              <p>Set monthly budgets and long-term goals (house, vacation, emergency fund). We track progress in real time.</p>
            </div>
            <div className="step">
              <div className="step__icon">📊</div>
              <h3>4. Insights & Reports</h3>
              <p>Understand trends with colorful charts and download weekly/monthly/yearly reports anytime.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">What you can do</h2>
          <div className="features">
            <div className="card">
              <div className="card__icon">📉</div>
              <h3>Expense Tracking</h3>
              <p>Smart categorization and notes to keep every rupee accountable.</p>
            </div>
            <div className="card">
              <div className="card__icon">💰</div>
              <h3>Salary Split Rules</h3>
              <p>Create multiple split templates and apply them with one click.</p>
            </div>
            <div className="card">
              <div className="card__icon">🏦</div>
              <h3>Bank Details</h3>
              <p>Add multiple accounts with IFSC & balances to plan cash flows.</p>
            </div>
            <div className="card">
              <div className="card__icon">🎯</div>
              <h3>Goals</h3>
              <p>Automated contributions keep you on track without thinking.</p>
            </div>
            <div className="card">
              <div className="card__icon">📈</div>
              <h3>Live Stats</h3>
              <p>See savings vs. expenses over time with interactive charts.</p>
            </div>
            <div className="card">
              <div className="card__icon">🧠</div>
              <h3>Insights</h3>
              <p>Spot overspending, forecast months, and discover optimization tips.</p>
            </div>
            <div className="card">
              <div className="card__icon">🗂️</div>
              <h3>Reports</h3>
              <p>Export PDFs/CSVs for weekly, monthly, or custom date ranges.</p>
            </div>
            <div className="card">
              <div className="card__icon">🔔</div>
              <h3>Alerts</h3>
              <p>Get notified on budget limits, bill due dates, and large spends.</p>
            </div>
            <div className="card">
              <div className="card__icon">🔒</div>
              <h3>Security</h3>
              <p>Encrypted data, session protection, and fine-grained permissions.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Your data, your control</h2>
          <div className="flow">
            <div className="flow__item">
              <span className="flow__icon">📥</span>
              <p><strong>Input:</strong> Transactions, salary, and bank details are added by you.</p>
            </div>
            <div className="flow__connector" />
            <div className="flow__item">
              <span className="flow__icon">🧮</span>
              <p><strong>Processing:</strong> Categorization, salary split, budgets, goals, and analytics.</p>
            </div>
            <div className="flow__connector" />
            <div className="flow__item">
              <span className="flow__icon">📤</span>
              <p><strong>Output:</strong> Charts, reports, alerts, and actionable insights.</p>
            </div>
          </div>
        </section>

        <section className="section security">
          <h2 className="section__title">Security & Privacy</h2>
          <div className="security__grid">
            <div className="security__item">🔐 256-bit encryption at rest & in transit</div>
            <div className="security__item">🛡️ Session & CSRF protection</div>
            <div className="security__item">👀 You control what’s stored and can delete anytime</div>
            <div className="security__item">📄 Clear audit trail via activity log</div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">What’s next</h2>
          <ul className="roadmap">
            <li>Bank sync via secure connectors (stored in MongoDB)</li>
            <li>Auto bill detection from statements</li>
            <li>Goal recommendations based on surplus</li>
            <li>Shared budgets for families</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">FAQ</h2>
          <div className="faq">
            <details>
              <summary>How does salary split work?</summary>
              <p>You define percentages (e.g., 50/30/20). When you add salary, the system allocates to Savings, Investments, and Expenses automatically and logs the activity.</p>
            </details>
            <details>
              <summary>Can I import my existing transactions?</summary>
              <p>Yes, you can add manually or import a CSV from your bank or spreadsheet. Categories can be edited anytime.</p>
            </details>
            <details>
              <summary>What if I want to change my split later?</summary>
              <p>Just update your split template. Future salary additions will use the new rules; past allocations remain unchanged for accurate history.</p>
            </details>
            <details>
              <summary>Is my data secure?</summary>
              <p>Your data is encrypted. You can export or delete your data at any time from the profile section.</p>
            </details>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to take control of your money?</h2>
          <p>Create your first budget and set a goal in under 2 minutes.</p>
          <div className="cta__actions">
            <Link to="/signup" className="btn btn--primary">Create Free Account</Link>
            <Link to="/reports" className="btn btn--ghost">View Sample Reports</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
