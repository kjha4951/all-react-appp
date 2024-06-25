import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProduct } from '../redux/actions/ProductAction.js';

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch =useDispatch();
    const fetchProducts = async ()=>{
      const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log("Err",err);
      });
      dispatch(setProduct(response.data));
    }; 

    useEffect(()=>{
        fetchProducts()
    })
    console.log(products);

  return (
    <div className='ui grid container'>
       <ProductComponent/>
    </div>
  )
}

export default ProductListing