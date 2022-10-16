import React from "react";
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="active-transactions">
        <p>Active transactions</p>
        <div className="transactions-list">
          <div>transaction 1</div>
          <div>transaction 1</div>
          <div>transaction 1</div>
          <div>transaction 1</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
