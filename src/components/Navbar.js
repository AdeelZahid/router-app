import React from 'react';
import {Link} from 'react-router-dom';
import '../style/navbar.css'

function Navbar() {
  return (
        <div className="header">
            <Link to="/" className="linkItem">Home</Link>
            <Link to="/about"  className="linkItem">About</Link>
            <Link to="product"  className="linkItem">Products</Link>
        </div>
  );
}

export default Navbar;
