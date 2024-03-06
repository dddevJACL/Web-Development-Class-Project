import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';  


function ProductRow({singleProduct}) {
    return (
        <tr>
            <td>{[singleProduct.company]}</td>
            <td>{[singleProduct.product]}</td>
            <td>{singleProduct.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td><ProductQuantity /></td>
        </tr>
    )
}



export default ProductRow;