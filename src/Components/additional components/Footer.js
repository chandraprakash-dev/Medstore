import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

function Footer(props) {
  return (
    <footer>
      <Link to="/">
        <i className="fa fa-home fa-2x"></i>
      </Link>
      <div className="shopHeader">
        <Link to="/shop">
          <i className="fa fa-medkit fa-2x"></i>
        </Link>
      </div>
      <div className="lab">
        <Link to='/lab'>
          <i className="fa fa-flask fa-2x"></i>
        </Link>
      </div>
      <div className="doctor">
        <Link to="/doctor">
          <i className="fa fa-user-md fa-2x"></i></Link>
      </div>
      <div className="shopping-bag">
        <Link to="/cart">
          <i className="fas fa-shopping-bag fa-2x"></i>
          <span>{props.cartCount}</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
