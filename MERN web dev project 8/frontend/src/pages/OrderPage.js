import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';

function OrderPage({products}) {
  return (
    <>
      <h2>Order</h2>
      <article>
                <p id="orderHeadP">
                    On this page, you can order a variety of great pet themed products :D
                </p>
                <h3>Choose from among our products below</h3>
                <p>Select the number of each item that you would like, up to a maximum of 10.</p>
                <table id="orderTable">
                            <caption>Choose and order one product</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Your Choice of One Product</th>
                                </tr>
                            </thead>
                            <tbody>
                              {products.map((currentProduct, indexOf) =>
                              <ProductRow
                              singleProduct={currentProduct}
                                key={indexOf}
                                />
                              )}
                            </tbody>
                </table>
      </article>
    </>
  );
}

export default OrderPage;