import React from 'react';
import data from '../Data';
 import Rating from '../Components/Rating/Rating'
 
function HomeScreen  ()  {
    return (
         <div className="row center">
    {
      
      data.products.map((product)=>(
        <div key={product._id }  className="card">
    <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
 <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                   </div> {/* end of card body */}

<Rating rating={product.rating} numReviews={product.numReviews}/>

${product.price}


</div> // end of card

       
      )) 
      

    }</div>//end of row center
    );
}
export default HomeScreen;
 
 
 