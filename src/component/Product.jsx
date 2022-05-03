import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        

    }, [])

  return (
    <div>Product</div>
  )
}

export default Product