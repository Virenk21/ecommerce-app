import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../Redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = (product) => {

  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch()

   const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const ShowProduct = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div  className="container py-4">
          <button onClick={()=>handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
           <div className="col-md-6">
              <img src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                                                        
                            <p className="lead fw-bold">₹{product.price}</p>
                            <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                        </div>
                    </div>
                </div>
           
        );
    }

  return (
  <>
  {<ShowProduct />}
  </>
  );
};

export default Cart;
