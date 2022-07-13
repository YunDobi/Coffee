import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <h1 style={{margin:"0", marginLeft:"30px"}}>Logo</h1>
      <div className="NavMenu">
        <span>contact</span>
        <span>Menu</span>
        <span>Reservation</span>
      </div>
    </div>
  )
};
export default NavBar;