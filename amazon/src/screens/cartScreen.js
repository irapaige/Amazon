import React from 'react';

let params = new URLSearchParams(document.location.search);
let productId = params.get("productId");
let qty = parseInt(params.get("qty"), 10);













const CartScreen = (props) => {
  return (
    <div>
      <h1>Cart Screen</h1>
 qty={qty}
    </div>
  );
};

export default CartScreen;
