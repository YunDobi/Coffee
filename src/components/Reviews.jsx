import React from "react";
import { useState } from "react";
import "./Review.css";

const Detail = () => {
  // let [selected, setSelected] = useState(false);

  const handleClick = event => {
    let reviews = document.getElementsByClassName("Review")
    for (let review of reviews) {
      console.log(review)
      review.classList = "Review";
    }
    event.currentTarget.classList.toggle("selected");

  }

  return (
    <div className="ReviewContainer">
      <div className="Review" onClick={handleClick}>
        <h3 className="reviewText">Reivew1</h3>
      </div>
      <div className="Review" onClick={handleClick}>
        <h3 className="reviewText">Reivew2</h3>
      </div>
      <div className="Review" onClick={handleClick}>
        <h3 className="reviewText">Reivew3</h3>
      </div>

    </div>
  )
}
export default Detail;