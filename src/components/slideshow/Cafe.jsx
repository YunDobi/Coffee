import React from "react";
// import "./cafe.css";

const BrewJSX = (props) => {
  return (
    <div
      className="cafeContainer"
      style={{
        width: "100%",
        height: "600px",
        backgroundImage:`url(${props.url})`,
        backgroundSize: "100% 100%",
        textAlign:"center"
      }}
    >
      <h3 style={{color: "white"}}>{props.text}</h3>
    </div>
  );
};
export default BrewJSX;
