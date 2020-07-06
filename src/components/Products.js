import React from 'react';
import Shoes from '../components/../shoe.json';
import '../style/products.css';
import {Link} from 'react-router-dom'

function Products() {
  return (
    <div className="container">
      <h1>Welcome to Products ..  </h1> 
        {
          Object.keys(Shoes).map(keyName => {
            const Shoe = Shoes[keyName];
            return <Link key={keyName} className="productContainer" to={`product/${keyName}`}>
                    <h3> {Shoe.name} </h3>
                    <img src={Shoe.img} alt="shoeImg" />
               </Link>
          })
        } 
    </div> 
  )
}

export default Products;