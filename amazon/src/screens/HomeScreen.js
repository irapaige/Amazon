import React, { useEffect } from 'react';

import Product from '../Components/product';


import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../features/products/productsSlice'

export default function HomeScreen() {
    const dispatch =useDispatch();
 const {products} =useSelector(state =>state.products)



    useEffect(() => {
       dispatch(getProducts())
    }, [dispatch]);
    return (
        <div>

                <div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
          
        </div>
    );
}
 