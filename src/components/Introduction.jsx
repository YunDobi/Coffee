import React from "react";
import './Introduction.css';
import image from "../images/intro3.jpg"

const Introduction = () => {
  return (
    <div className="container">
      <h3 style={{marginBottom:"30px"}}>Introdution</h3>
      <div className="subContainer">
        <p>Some Sentene of the Introduction</p>
        <img src={image} alt="" style={{width:'40%', height:"450px"}}/>
      </div>
    </div>
  )
}
export default Introduction;