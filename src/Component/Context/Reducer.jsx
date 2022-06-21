export const cartReducer = (state, action)=>{
    switch(action.type){
        case 'addToCart': 
            // return{...state, cart:[...state.cart, {...action.paylod, qty:1}]  };
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case 'removeFromCart': 
            // return {...state, cart:state.cart.filter((c)=>c.id!==action.paylod.id),}
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
              };
        case 'changeQuantity':
            return{
                ...state, cart: state.cart.filter((e)=> e.id === action.payload.id ? (e.qty = action.payload.qty):e.qty )
            }
        default:
            return state;
    }

}   