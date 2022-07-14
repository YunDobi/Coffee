import React from "react";
import './Introduction.css';
import image from "../images/intro3.jpg"

const Introduction = () => {
  return (
    <div className="container">
      <h3 style={{marginBottom:"30px"}}>Welcome to Brew Holy</h3>
      <div className="subContainer">
        <div className="textContainer">
          <p>Some Sentene of the Introduction</p>
          <p>This Cafe only accept fresh coffee bean</p>
        </div>
        <img src={image} alt="" style={{width:'40%', height:"400px"}}/>
      </div>
    </div>
  )
}
export default Introduction;