import React from "react";
import { useState } from "react";
import "./Review.css";
import BlackRe from "../images/Frame.png";
import WhiteRe from "../images/Frame_W.png";

const Detail = () => {
  // let [selected, setSelected] = useState(false);

  const handleClick = event => {
    let reviews = document.getElementsByClassName("Review")
    for (let review of reviews) {
      review.classList = "Review";
      console.log(review) 
      // console.log(review.closest('.ReviewContainer'))
    }
    event.currentTarget.classList.toggle("selected");

  }
  // const ImageHandler = event => {
  //   console.log(event.currentTarget)
  //   return (
  //     <img src={BlackRe} alt="" className="BlackFrame"/>
  //   )
  // }


  return (
    <div style={{display:"flex", flexDirection:"column"}}>
    <h2 style={{color:"white", margin:"30px"}}>--Our Review--</h2>
    <div className="ReviewContainer">
      <div className="Review" onClick={handleClick}>
        <img src={BlackRe} alt="" className="BlackFrame"/>
        {/* {console.log(document.getElementById("1").parentNode)} */}
        <p className="reviewText">That was really tasty coffee ever.</p>
        <img src={require("../images/Ellipse 10 (2).png")} alt="" style={{marginTop:"90px"}}/>
        <p className="reviewAuthor">Mahesh Babu</p>
      </div>
      <div className="Review selected" onClick={handleClick}>
        <img src={BlackRe} alt="" className="BlackFrame"/>
        <p className="reviewText">That was great experinec entire my life. Making own coffe from my hand and tasty it.</p>
        <img src={require("../images/Ellipse 10.png")} alt="" style={{marginTop:"20px"}}/>
        <p className="reviewAuthor">Marshall Li</p>
      </div>
        <div className="Review" onClick={handleClick}>
        <img src={BlackRe} alt="" className="BlackFrame" />
          <p className="reviewText">Awasome environmnet for studying.</p>
          <img src={require("../images/Ellipse 10 (1).png")} alt="" style={{marginTop:"90px"}}/>
          <p className="reviewAuthor">Donald Kid</p>
      </div>
    </div>

    </div>
  )
}
export default Detail;