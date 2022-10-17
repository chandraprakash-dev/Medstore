import React from "react";
import './Construction.css';

function Construction() {
  return (
    <div className="construction">
      <img src={process.env.PUBLIC_URL + "/assets/images/construction.png"} alt="under construction"/>
      <p>Sorry, this service is not available yet</p>
    </div>
  )
}

export default Construction;
