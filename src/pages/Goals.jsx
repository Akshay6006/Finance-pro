import React from "react";
import "../styles/Goals.css";

export default function Goals() {
  const activeGoals = [
    { title: "Save for Emergency Fund", progress: 70, target: "₹50,000" },
    { title: "Buy a Laptop", progress: 40, target: "₹80,000" },
    { title: "Vacation Trip", progress: 25, target: "₹1,20,000" },
  ];

  const completedGoals = [
    { title: "Pay Off Credit Card", date: "Jan 2025" },
    { title: "Buy New Phone", date: "Mar 2025" },
  ];

  return (
    <div className="goals-container">
      <h1>🎯 Your Goals</h1>

      <section className="active-goals">
        <h2>Active Goals</h2>
        <div className="goal-cards">
          {activeGoals.map((goal, index) => (
            <div key={index} className="goal-card">
              <h3>{goal.title}</h3>
              <p>Target: {goal.target}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <p>{goal.progress}% Completed</p>
            </div>
          ))}
        </div>
      </section>

      <section className="completed-goals">
        <h2>✅ Completed Goals</h2>
        <ul>
          {completedGoals.map((goal, index) => (
            <li key={index}>
              {goal.title} <span>- {goal.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="add-goal">
        <h2>➕ Add New Goal</h2>
        <form>
          <input type="text" placeholder="Enter Goal Title" required />
          <input type="number" placeholder="Target Amount" required />
          <button type="submit">Add Goal</button>
        </form>
      </section>
    </div>
  );
}
