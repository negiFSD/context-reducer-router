import React, { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import jsonData from '../Data'
import { cartReducer } from './Reducer'
import { productReducer } from './Reducer'


const Cart = createContext() // context API is initiated
const productData= jsonData  // fetchin saved data

const initialState = {product:productData,   
                      cart:[]}; 

                     
function Context({children}) {
 const[state, dispatch] =  useReducer(cartReducer, initialState)    
 const [productState, productDispatch] = useReducer(productReducer, {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
});

  return (<>
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
       
    </Cart.Provider>
    
     </>
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart)
}