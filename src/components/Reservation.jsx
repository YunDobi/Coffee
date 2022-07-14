import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div>
      <h3>Reservation</h3>
      <div className="inputContainer">
        <form action="submit">
          <input type="text" placeholder="Your name?" className="emailInput" />
          <input type="text" placeholder="Your email?" className="emailInput" />
          <input type="text" placeholder="What Time?" className="emailInput" /><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Reservation;