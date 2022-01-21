import React,{useEffect,useState} from 'react';
 import Rating from '../Components/Rating';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getDetails } from '../features/products/detailsSlice'
import {addToCart}from '../features/cartSlice';



export default function DetailsScreen(props) {
    const [qty,setQty]=useState(1)

    const productId = props.match.params.id;
    const dispatch =useDispatch();
    const {details} =useSelector(state =>state.details)
    
    
    useEffect(() => {
        dispatch(getDetails())
     }, [dispatch]);
    


    const product = details.find((x)=> x._id ===props.match.params.id);
    if (!product){
    return<div> Product Not Found</div>}

const addToCartHandler=(product)=>{
   dispatch(addToCart(product));
};

    return (
        <div>
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
<ul>
    <li>
        <div className='row'>
<div className= 'price'>Price</div> <div>${product.price} </div>

</div>

    </li>
            <li>
            <div className='row'>
            <div>Status</div>
            <div>
                {product.countInStock>0?(<span className='success'>In Stock</span>
                ):(<span className='error'>Out Of Stock</span>)}
            </div>
            </div>
            </li>
    {product.countInStock>0 &&
    <>
        <li>
            <div className="row">
            <div>Qty </div>
                <div>
                    <select value={qty} onChange={e => setQty(e.target.value)}>
                        {
                            [...Array(product.countInStock).keys()].map(x =>(
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

        </li>
        <li>
            <button onClick={()=>addToCartHandler(product)} className={'primary block'}>Add To Cart</button>
        </li>
    </>}




</ul>
</div>

            </div>
        </div>
        </div> );
}
 

 
 