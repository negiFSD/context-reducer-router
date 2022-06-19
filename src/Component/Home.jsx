import React from 'react'
import { CartState } from './Context/Context'
import Filters from './Filters';


function Home() {
 const {state:{product}} =    CartState() // this fucntion is already declared in Context as useContext and we are destructring and destructring the required product value.
 console.log(product);

  return (
    <div className='home'>
      <Filters/>
      <div className="productContainer">
        {product.map((e)=>e.id)}
      </div>
    
    </div>
  )
}

export default Home