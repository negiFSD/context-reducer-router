import React from "react";
import { CartState } from "./Context/Context";
import Rating from "./Rating";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="singleProduct">
      <img src={prod.image} alt="df" />
      <p>{prod.title.slice(0, 30)}</p>
      <p> Rs. {prod.price}</p>
      {prod.fastDelivery ? <p>Fast Delivery</p> : <p>4 day delivery</p>}
      <Rating rating={prod.ratings} />

      {cart.some((p) => p.id === prod.id) ? (
        <button onClick={()=>{
          dispatch({
            type:'removeFromCart',
            payload:prod,
          })
        }} > remove</button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "addToCart",
              payload: prod,
            });
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
