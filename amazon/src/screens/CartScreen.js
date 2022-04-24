import React, {useContext} from 'react';
import {useSelector}from "react-redux";
import {Link} from "react-router-dom"
import {QtyContext}from "../Components/QtyContext";


const CartScreen = (props) => {
    const {setQty}=useContext(QtyContext)
    const {qty}=useContext(QtyContext)
    console.log(qty)
   const cart = useSelector(state =>state.cart)

    return(<div className={"container"} >

   <div className="ShoppingCart"> <h2 >Shopping Cart</h2></div>
        {cart.cartItems.length===0?(
            <div  className={"emptyCart"}>
                <p>Your cart is Empty</p>
            <div className={"start_shopping>"}>
<Link to ="/">
    <span className={"StartShopping"}>Start Shopping</span>
    <i className="bi bi-basket"></i>
</Link>
            </div>
            </div>
        ):(
            <div>
<div className="titles">
<h3 className="t"> Product  </h3>
<h3 className="t">Price </h3>
<h3 className="t">Quantity</h3>
<h3 className="t">Total</h3>
   </div> 
   <div className="cart-items">
       {cart.cartItems?.map(cartItem=>(
           <div className="cart-item" key={cartItem.id}>
            <div className="cart-product">
                <img className={"cart-img"} src={cartItem.image}alt={cartItem.name}></img>
                <div className={"dis"}>
                   <h3>{cartItem.name}</h3> 
                   <p>{cartItem.description}</p>
                   <button className={"cart-button"}>Remove</button>
                </div>
                <span className={"price"}>${cartItem.price}</span>
                </div>
               <div className={"qty"}>
                   {qty}
               </div>
                
           </div>
       ))}
   </div>
            </div>
        )}
    </div>
)

};

export default CartScreen;