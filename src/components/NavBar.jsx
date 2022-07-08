import React from "react";

const NavBar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", height:"70px", alignItems:"center", textAlign:"center"}}>
      <h1 style={{margin:"0", marginLeft:"30px"}}>Logo</h1>
      <div style={{display:"flex", gap:"50px", marginRight:"30px"}}>
        <span>contact</span>
        <span>Menu</span>
        <span>Reservation</span>
      </div>
    </div>
  )
};
export default NavBar;