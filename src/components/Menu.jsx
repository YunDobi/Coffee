import React from "react";
import './Introduction.css'

const Menu = () => {
  return (
    <div className="container">
      <div style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
          <div>
            <h3>COFFEE</h3>
            <li>Americano ...3.0</li>
            <li>Cold Brew ...3.0</li>
            <li>Latte ...3.75</li>
            <li>Chai Latte ...4.25</li>
            <li>Cappuccino ...4.0</li>
            <li>Caramel Macchiato ...4.00</li>
          </div>
          <div>
            <h3>Tea</h3>
            <li>Black Tea ...3.2</li>
            <li>Green Tea ...3.2</li>
            <li>Herbal Tea ...3.2</li>
          </div>
          <div>
            <h3>Smoothies</h3>
            <li>Strawberry Banana ...5.7</li>
            <li>Matcha Smoothie ...5.4</li>
            <li>Mango Smoothie ...5.4</li>
            
          </div>
          <div>
            <h3>ICE BLENDED</h3>
            <li>Vanila Latte ...4.5</li>
            <li>Cramal Latte ...4.7</li>
          </div>
      </div>
    </div>
  )
}
export default Menu;