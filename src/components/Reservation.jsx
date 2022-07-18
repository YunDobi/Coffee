import React from "react";
import "./Reservation.css";
import gif from "../images/tenor.gif";

const Reservation = () => {
  return (
    <div>
      <div className="inputContainer">
        <h3>Reservation</h3>
        <img src={gif} alt="" className="cartoon" />
        <form action="submit">
          <input type="text" placeholder="Your name..." className="emailInput" />
          <input type="text" placeholder="Your email..." className="emailInput" />
          <input type="text" placeholder="What Time..." className="emailInput" /><br></br>
          <button type="submit" onClick={() => {alert("Revserved")}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Reservation;