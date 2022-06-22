export const cartReducer = (state, action)=>{
    switch(action.type){
        case 'addToCart': 
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case 'removeFromCart': 
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
              };
        case 'changeQuantity':
            console.log(action.payload);
            return{
                // both below given methods working ok.
                // ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)
                ...state, cart: state.cart.map(c => c.id === action.payload.id ? {...c, qty: action.payload.qty} : c )
                }
        default:
            return state;
    }
}   
//--------------------   product reducer function --------------------------------

export const productReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };