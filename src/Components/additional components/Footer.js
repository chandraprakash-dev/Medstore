import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

function Footer(props) {

  return (
    <footer>
      <Link to="/">
        <i className="fa fa-home fa-2xl"/>
      </Link>
      <Link to="/shop">
        <i className="fa-solid fa-pills fa-2xl"/>
      </Link>
      <Link to='/lab'>
        <i className="fa fa-flask fa-2xl"/>
      </Link>
      <Link to="/doctor">
        <i className="fa fa-user-md fa-2xl"/></Link>
      <div className="shopping-bag">
        <Link to="/cart">
          <i className="fa fa-shopping-bag fa-2xl"/>
          <span>{props.cartCount}</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
