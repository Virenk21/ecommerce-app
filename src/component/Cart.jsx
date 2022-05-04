import React from "react";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import { delCart } from "../Redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [loading, setLoading] = useState(false);

  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

 
  const ShowProduct = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180px"/>
               </div>
               <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">₹{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


const Loading = () =>{
            return (
                <>
                <div className="col-md-6">
                    <Skeleton height= {400}/>
                </div>
                </>
            )
            }
  return (
  <>
  {loading ? <Loading/> : <ShowProduct />}
  </>
  );
};

export default Cart;
