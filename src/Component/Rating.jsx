import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ rating, onClick }) {
  return (
    <div className="ratings">


      Ratings:
      {[...Array(5)].map((_, i) =>   (
          
            <span key={i} onClick={()=>onClick(i)}> {/* here onClick function we are sending i value to the parent compon i.e Filter.jsx */}
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;
