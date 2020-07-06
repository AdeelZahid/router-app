import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from '../shoe.json';
import '../style/productItem.css'

const ProductItem = () => {
    const {id} = useParams();
    const shoe = Shoes[id];
    if(!shoe){
        return <h2 className="notFoundItem"> Your Specific Product is Not Available ...  </h2>
    }
    return(
        <div className="singleItem">
            <h2> {shoe.name}</h2>
            <img src={shoe.img} alt="showImg"/>
        </div>
    )
}

export default ProductItem