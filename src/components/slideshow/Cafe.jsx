import React from "react";
// import "./cafe.css";

const BrewJSX = (props) => {
  return (
    <div
      className="cafeContainer"
      style={{
        marginTop:"70px",
        width: "100%",
        height: "600px",
        backgroundImage:`url(${props.url})`,
        backgroundSize: "100% 100%",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",

      }}
    >
      {/* <h2 style={{color: "white"}}>{props.text[0]}</h2> */}
    </div>
  );
};
export default BrewJSX;
