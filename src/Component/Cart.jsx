import React, { useEffect, useState } from "react";
import { CartState } from "./Context/Context";
// import SingleProduct from "./SingleProduct";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

//for conditional select value code: 58.36

function Cart() {
  const { state: { cart }, dispatch  } = CartState();


  const [total, setTotal]= useState() // this for state total

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=>(acc+curr.price*curr.qty), 0))    // this is to add total cart values
  },[cart])




  return (
    <div className="cartPage">

      <div className="cartItems">
  {/*--------------------- we are printing all the cart items except those whore 0 in stock------------------------ */}
      {cart.map((e) => (
        e.inStock? ( <div className="cartContainer" key={e.id}>
        <img src={e.image} alt="df" />
        <p>{e.title.slice(0, 20)}</p>
        <p> Rs. {e.price}</p> 
        <Rating rating={e.ratings} />

{/* --------------------- Below code is for number of options in select showing as item in the stock -------------------------    */}
     
      <select id="qty" onChange={(e)=>dispatch({
        type:'changeQuantity',
        payload: {id:e.id, qty:e.target.value}
      })} name="qty" >
        {(() => {
      const options = [];

      for (let i = 1; i < e.inStock; i++) {
        options.push( <option value={i}>{console.log(e.inStock)} {i}</option>)
      }

      return options;
    })()}
      </select>
{/*------------------------------------------------------------------------------------------------------------------------ */}
      
        <button onClick={()=>dispatch({
          type:'removeFromCart',
          payload:e
        })}><AiFillDelete /></button>

       </div>):null
        
          ))}

      </div>
      <div className="cartFilters">
      <span>Subtotal items {cart.length}</span>
      <p>Total Value: {total}</p>
      <button>proceed to checkout</button>


      </div>
    </div>
  );
}

export default Cart;
