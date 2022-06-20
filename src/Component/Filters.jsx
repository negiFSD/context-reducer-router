import React, { useState } from "react";
import Rating from "./Rating";

function Filters() {
  const [rate, setRate] = useState(4);
  return (
    <div className="filters">
      <div>
        <input type="radio" value="" name="group1" /> Ascending Order
      </div>
      <div>
        <input type="radio" value="" name="group1" /> Descending Order
      </div>
      <div>
        <input type="checkbox" name="group1" /> Include out of stock
      </div>
      <div>
        <input type="checkbox" name="group1" /> free delivery
      </div>
      <div>
        <Rating
          rating={rate}
          setRate={setRate}
          onClick={(i) => setRate(i + 1)}
        />
      </div>

      <button>clear filter</button>
    </div>
  );
}

export default Filters;
