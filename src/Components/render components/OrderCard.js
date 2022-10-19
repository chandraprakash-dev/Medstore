import React from "react";
import './OrderCard.css'

function OrderCard(props) {
  const {id, list} = props.order;

  const medicines = list.map(medicine => {
    return (
      <tr key={medicine.medicineId} className="medicine">
        <td className="quantity">{medicine.quantity}</td>
        <td>{medicine.medicineName}</td>
      </tr>
    )
  })

  return (
    <div className="order-card">
      <p className="order-id">Order #{id}</p>
      <table>
        <tbody>
          <tr>
            <th>Quantity</th>
            <th>Medicine</th>
          </tr>
          {medicines}
        </tbody>
      </table>
    </div>
  )
}

export default OrderCard;
