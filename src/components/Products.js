import React from 'react';
import Shoes from '../components/../shoe.json';
import '../style/products.css';

function Products() {
  return (
    <div className="container">
      <h1>Welcome to Products ..  </h1> 
        {
          Object.keys(Shoes).map(keyName => {
            const Shoe = Shoes[keyName];
            return <div key={keyName} className="productContainer">
                    <h3> {Shoe.name} </h3>
                    <img src={Shoe.img} alt="shoeImg" />
               </div>
          })
        }
    </div> 
  )
}

export default Products;