import React, { useState } from 'react';
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

function ProductQuantity() {
    const [quantityOfOrders, changeQuantityOf] = useState(0)
    const increaseByOne = () => quantityOfOrders < 10 && changeQuantityOf(quantityOfOrders + 1)
    const decreaseByOne = () => quantityOfOrders > 0 && changeQuantityOf(quantityOfOrders - 1)
    return (
        <>
        <div class="orderTableQuantity">

        <SlArrowDownCircle onClick={decreaseByOne} />   
        <span>{quantityOfOrders}</span>   
        <SlArrowUpCircle onClick={increaseByOne} />   

        </div>
        </>
    )
};

export default ProductQuantity;