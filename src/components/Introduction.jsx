import React from "react";
import './Introduction.css';
import image from "../images/intro3.jpg"

const Introduction = () => {
  return (
    <div className="container">
      <h3 style={{marginBottom:"30px"}}>Welcome to Brew Holy</h3>
      <div className="subContainer">
        <div className="textContainer">
          <h3>Brew your coffee on yourself!</h3> <br />
          <p>Our cafe will give an opportunity for learning how to brew a coffee or sell best quality of coffee to customer.</p>
        </div>
        <img src={image} alt="" style={{width:'40%', height:"400px"}}/>
      </div>
    </div>
  )
}
export default Introduction;