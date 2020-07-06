import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="product">Products</Link>
        </div>
  );
}

export default Navbar;
