import React, {useContext} from 'react';
import QtyContext from "../Components/context/QtyContext"

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = useContext(QtyContext)
console.log(qty)

    return (
        <div>
           <h1>Cart Screen</h1>
            <p>ADD TO CART:ProductId: {productId} Qty: {qty}</p>
        </div>
    );
};

export default CartScreen;