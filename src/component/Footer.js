import React from "react";
import x from "../assets/x.png";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import LogoDark from "../assets/LogoDark.png";
import heartRounded from "../assets/heart-rounded.svg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0C111D",
        color: "#94969C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem 0",
      }}
    >
      <h1>
        The statements above have not been evaluated by the Food and Drug
        Administration. <br />
        This product is not intended to diagnose, treat, cure, or prevent any
        disease.
      </h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          borderTop: "1px solid #85888E",
          width: "90%",
          justifyContent: "space-between",
        //   paddingTop: "3rem",
          marginTop: "3rem",
          padding:"3rem 2rem 0px"
        }}
      >
        <div style={{ display: "flex", gap: "20px", paddingRight:"0rem"}}>
          <img width={20} height={20} src={x} alt="" />
          <img width={20} height={20} src={linkedin} alt="" />
          <img width={20} height={20} src={google} alt="" />
        </div>
        <img src={LogoDark} alt="" />
        <div style={{ display: "flex", alignItems: "center" }}>
          Curated with
          <span>
            <img src={heartRounded} alt="" />
          </span>
          by Team Cura.
        </div>
      </div>
    </div>
  );
};

export default Footer;
