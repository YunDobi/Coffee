import React from "react";
import "./navBar.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div className="navContainer">
      <h1 style={{margin:"0", marginLeft:"30px"}}>Logo</h1>
      <div className="NavMenu">
        {/* <span><a href="#intro">Detail</a></span>
        <span><a href="#menu">Menu</a></span>
        <span><a href="#reservation">Reservation</a></span> */}
        <Button variant="light" href="#detail">Detail</Button>{' '}
        <Button variant="light" href="#menu">Menu</Button>{' '}
        <Button variant="light" href="#reservation">Reservation</Button>{' '}
      </div>
    </div>
  )
};
export default NavBar;