import React, { useState } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Akshay Kumar",
    email: "akshay@example.com",
    location: "Bangalore, India",
    joined: "March 2024",
    avatar: "https://i.pravatar.cc/150?img=7",
  });

  // Multiple banks
  const [banks, setBanks] = useState([
    { id: 1, bankName: "HDFC Bank", accountNo: "XXXX-1234", ifsc: "HDFC000123" },
  ]);

  const [newBank, setNewBank] = useState({ bankName: "", accountNo: "", ifsc: "" });

  const [stats, setStats] = useState({
    balance: 120000,
    savings: 60000,
    investments: 40000,
    expenses: 20000,
  });

  const [activities, setActivities] = useState([
    { id: 1, text: "Added ₹5,000 to Savings", date: "Aug 20, 2025" },
    { id: 2, text: "Invested ₹10,000 in Stocks", date: "Aug 15, 2025" },
    { id: 3, text: "Paid Electricity Bill ₹2,500", date: "Aug 10, 2025" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  // Salary Split Logic
  const salarySplit = {
    savings: 50,
    investments: 30,
    expenses: 20,
  };

  const addFunds = (amount) => {
    const save = (amount * salarySplit.savings) / 100;
    const invest = (amount * salarySplit.investments) / 100;
    const spend = (amount * salarySplit.expenses) / 100;

    setStats((prev) => ({
      balance: prev.balance + amount,
      savings: prev.savings + save,
      investments: prev.investments + invest,
      expenses: prev.expenses + spend,
    }));

    setActivities([
      { id: Date.now(), text: `Added ₹${amount} Salary (Split)`, date: new Date().toDateString() },
      ...activities,
    ]);
  };

  const addManualFunds = (amount) => {
    setStats((prev) => ({
      ...prev,
      balance: prev.balance + amount,
      savings: prev.savings + amount, // default: goes into savings
    }));

    setActivities([
      { id: Date.now(), text: `Manually added ₹${amount} to Savings`, date: new Date().toDateString() },
      ...activities,
    ]);
  };

  // Bank Functions
  const addBank = () => {
    if (!newBank.bankName || !newBank.accountNo || !newBank.ifsc) return;
    setBanks([...banks, { id: Date.now(), ...newBank }]);
    setNewBank({ bankName: "", accountNo: "", ifsc: "" });
    setShowBankModal(false);
  };

  const deleteBank = (id) => {
    setBanks(banks.filter((b) => b.id !== id));
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>📍 {user.location}</p>
          <p>Joined: {user.joined}</p>
          <button className="edit-btn" onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>
      </div>

      {/* Bank Details */}
      <h3 className="section-title">Bank Details</h3>
      {banks.map((bank) => (
        <div key={bank.id} className="bank-card">
          <p>🏦 Bank: {bank.bankName}</p>
          <p>💳 Account: {bank.accountNo}</p>
          <p>🔑 IFSC: {bank.ifsc}</p>
          <button className="delete-btn" onClick={() => deleteBank(bank.id)}>❌ Remove</button>
        </div>
      ))}
      <button className="edit-btn" onClick={() => setShowBankModal(true)}>+ Add New Bank</button>

      {/* Stats */}
      <h3 className="section-title">Account Overview</h3>
      <div className="stats-grid">
        <div className="stat-card" style={{ borderColor: "#4CAF50" }}>
          <h4>Total Balance</h4>
          <p>₹{stats.balance}</p>
        </div>
        <div className="stat-card" style={{ borderColor: "#2196F3" }}>
          <h4>Savings</h4>
          <p>₹{stats.savings}</p>
        </div>
        <div className="stat-card" style={{ borderColor: "#FF9800" }}>
          <h4>Investments</h4>
          <p>₹{stats.investments}</p>
        </div>
        <div className="stat-card" style={{ borderColor: "#F44336" }}>
          <h4>Expenses</h4>
          <p>₹{stats.expenses}</p>
        </div>
      </div>

      {/* Add Funds */}
      <h3 className="section-title">Funds Management</h3>
      <div className="funds-actions">
        <button onClick={() => addFunds(50000)}>💰 Add Salary ₹50,000</button>
        <button onClick={() => addManualFunds(5000)}>➕ Add Manually ₹5,000</button>
      </div>

      {/* Recent Activity */}
      <h3 className="section-title">Recent Activity</h3>
      <ul className="activity-list">
        {activities.map((a) => (
          <li key={a.id}>
            <span>{a.text}</span>
            <small>{a.date}</small>
          </li>
        ))}
      </ul>

      {/* Investment Plans */}
      <h3 className="section-title">Investment Plans</h3>
      <div className="plans">
        <p>📈 Mutual Funds – ₹20,000</p>
        <p>🏦 Fixed Deposit – ₹10,000</p>
        <p>💹 Stocks – ₹10,000</p>
        <button className="edit-btn">+ Add New Plan</button>
      </div>

      {/* Profile Edit Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <input type="text" placeholder="Name" defaultValue={user.name} />
            <input type="email" placeholder="Email" defaultValue={user.email} />
            <input type="text" placeholder="Location" defaultValue={user.location} />
            <button onClick={() => setShowModal(false)}>Save</button>
          </div>
        </div>
      )}

      {/* Add Bank Modal */}
      {showBankModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Bank</h3>
            <input
              type="text"
              placeholder="Bank Name"
              value={newBank.bankName}
              onChange={(e) => setNewBank({ ...newBank, bankName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Account No"
              value={newBank.accountNo}
              onChange={(e) => setNewBank({ ...newBank, accountNo: e.target.value })}
            />
            <input
              type="text"
              placeholder="IFSC Code"
              value={newBank.ifsc}
              onChange={(e) => setNewBank({ ...newBank, ifsc: e.target.value })}
            />
            <button onClick={addBank}>Save</button>
            <button onClick={() => setShowBankModal(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
