import React from "react";

const NavBar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <h1 style={{margin:"0", marginBottom:"5px"}}>Logo</h1>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px", marginRight:"30px", textAlign:"center"}}>
        <span>contact</span>
        <span>Menu</span>
      </div>
    </div>
  )
};
export default NavBar;