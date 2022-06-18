import React, {useContext, useEffect, } from 'react';
 import Rating from '../Components/Rating';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from '../features/products/ProductsSlice'
import{QtyContext}from "../Components/QtyContext";
import {useNavigate}from 'react-router-dom'


export default function ProductScreen(props) {
const {setQty}=useContext(QtyContext)
    const {qty}=useContext(QtyContext)
    const dispatch =useDispatch();
    const {products} =useSelector(state =>state.products)
     const params=useParams()
    const {id:productId} = params;
    
    useEffect(() => {
        dispatch(getProducts())
     }, [dispatch]);

    const navigate=useNavigate()
const{id}=useParams()
    const product = products.find((x)=> x._id ===(id));
    if (!product){
    return<div> Product Not Found</div>}

    const handelAddToCart = () => {
     navigate(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <div className={"container"}>
        <Link to ="/">Back to HomeScreen</Link>
        <div className = 'row'>
        <div className='col-2'>
         <img className='large' src={product.image} alt={product.name}></img>
           </div>
            <div className='col-2'>
            <ul>
            <li>
            <h2>{product.name}</h2>
            </li>
                <li>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                </li>
                <li>
                    Price: ${product.price}
                </li>
                <li>
                    Description:
                    <p>{product.description}</p>
                </li>
            
            
            
            </ul>
            </div>
            <div className='col-2'>
<div className={'card card card-body'}>
<ul className='box'>
    <li>
        <div className={""}>
<div className= 'price2'>Price</div>
            <div>${product.price} </div>

</div>

    </li>
            <li>

            <div>Status</div>
            <div>
                {product.countInStock>0?(<span className='success'>In Stock</span>):(<span className='error'>Out Of Stock</span>)}
            </div>

            </li>
            <li>
                        <div className="qty">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
    <li>
        <button className={'primary block'} onClick={()=>handelAddToCart(productId)}>Add To Cart</button>
    </li>


</ul >
</div>

            </div>
        </div>
        </div> );
}
 

 
 