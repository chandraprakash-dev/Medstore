import React from "react";
import './Dashboard.css'
import '../render components/OrderCard';
import OrderCard from "../render components/OrderCard";

function Dashboard(props) {
  let {orders} = props;
  console.log(orders);
  const orderCards = orders.map(order => <OrderCard key={order.orderId} order={{id:order.orderId, list: order.medicineList}}/>)

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="transactions">
        <p className="heading">Active transactions</p>
        <div className="transactions-list">
          {orders.length > 0 ?
            orderCards :<div>No transactions</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
