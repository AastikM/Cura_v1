import React from "react";
import logoLight from "../assets/logoLight.png";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F0FDF9",
        widht: "100vw",
        height: "4rem",
        paddingLeft: "10rem",
        justifyContent: "space-between",
        alignItems:"center"
      }}
    >
      <img src={logoLight} alt="" height={40} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "40%",
        }}
      >
        <span style={{ color: "#134E48", fontSize: "24px" }}>Home</span>
        <span style={{ color: "#134E48", fontSize: "24px" }}>Products</span>
        <span style={{ color: "#134E48", fontSize: "24px" }}>Resources</span>
        <span style={{ color: "#134E48", fontSize: "24px" }}>Pricing</span>
      </div>
    </div>
  );
};

export default Navbar;
