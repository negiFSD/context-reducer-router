import React, { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import jsonData from '../Data'
import { cartReducer } from './Reducer'


const Cart = createContext() // context API is initiated
const productData= jsonData  // fetchin saved data

const initialState = {product:productData,   
                      cart:[]}; 
// console.log(initialState.cart)
                     
function Context({children}) {
 const[state, dispatch] =  useReducer(cartReducer, initialState)    

  return (<>
    <Cart.Provider value={{state, dispatch}}>
        {children}
       
    </Cart.Provider>
    
     </>
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart)
}