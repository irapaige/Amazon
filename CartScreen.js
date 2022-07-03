import React, {useContext} from 'react';
import {useSelector}from "react-redux";
import {Link} from "react-router-dom"
import {QtyContext}from "../Components/QtyContext";


const CartScreen = () => {
    const {setQty}=useContext(QtyContext)
    const {qty}=useContext(QtyContext)

   const cart = useSelector(state =>state.cart)

    return(
    <div  className={"container"}>

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
           
<div className="row2">
<h3 > Product  </h3>
<h3>Price </h3>
<h3 >Quantity</h3>
<h3 >Total</h3>
 </div>

       {cart.cartItems?.map((cartItem=>(
           <div className="row" key={cartItem.id}>
                <img className={" img-small "} src={cartItem.image}alt={cartItem.name}></img>

                  <span> <h3 className="">{cartItem.name}</h3></span>
                   <p>{cartItem.description}</p>
                   <button className={"cart-button"}>Remove</button>


                <span className={"price"}>${cartItem.price}</span>


               <div className={"qty"}>
                   {qty}</div>

</div>




       )
       )
)

};

export default CartScreen;