import { CartState } from "./Context/Context";
import Rating from "./Rating";

function Filters() {
  const {
    productState: { byStock, byFastDelivery, byRating, searchQuery },
    productDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, byRating, searchQuery);
  return (
    <div className="filters">
      <div>
        <input
          type="radio"
          value=""
          name="group1"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
        />{" "}
        Ascending Order
      </div>
      <div>
        <input
          type="radio"
          value=""
          name="group1"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
        />{" "}
        Descending Order
      </div>
      <div>
        <input type="checkbox" name="group1"  /> Include out of stock
      </div>
      <div>
        <input type="checkbox" name="group1" /> free delivery
      </div>
      <div>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
        />
      </div>

      <button>clear filter</button>
    </div>
  );
}

export default Filters;
