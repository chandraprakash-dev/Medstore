import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

function Footer(props) {

  const handleClick = (event) => {
    const target = event.target;
    const div = target.closest('div');
    const footer = target.closest('footer');

    const curdiv = footer.querySelector('.active');
    curdiv.classList.remove('active');

    div.classList.add('active');
  }

  return (
    <footer onClick={handleClick}>
      <div className="active">
        <Link to="/">
          <i className="fa fa-home fa-2xl"/>
        </Link>
      </div>
      <div>
        <Link to="/shop">
          <i className="fa-solid fa-pills fa-2xl"/>
        </Link>
      </div>
      <div>
        <Link to='/lab'>
          <i className="fa fa-flask fa-2xl"/>
        </Link>
      </div>
      <div>
        <Link to="/doctor">
          <i className="fa fa-user-md fa-2xl"/>
        </Link>
      </div>
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
