import React from 'react';
import data from '../Components/data';
 import Rating from '../Components/Rating';
import {Link} from 'react-router-dom';

export default function ProductScreen  (props)  {
    const product = data.products.find((x)=> x._id ===props.match.params.id);
    if (!product){
    return<div> Product Not Found</div>}

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
            <h2>>{product.name}</h2>
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
<div className= 'price'>Price</div> <div>${product.price}> </div>

</div>

    </li>
            <li>
            <div className='row'>
            <div>Status></div>
            <div>
                {product.countInStock>0?(<span className='success'>In Stock</span>):(<span className='error'>Out Of Stock</span>)}
            </div>
            </div>
            </li>
    <li>
        <button className={'primary block'}>Add To Cart</button>
    </li>


</ul>
</div>

            </div>
        </div>
        </div> );
}
 

 
 