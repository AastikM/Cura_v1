import React from "react";
import Card from "../assets/Card.png";
import Meds from "../assets/Meds.png";
import Avatar from "../assets/Avatar.png";
import Avatar2 from "../assets/Avatar2.png";

const ProductCard = ({ item }) => {
  console.log(item);

  const qualities = ["Focus", "Reproductive", "Brain", "Testosterone"];
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "16px",
        // overflow: "hidden",
        width: "300px",
        backgroundColor: "#F0FDF9",
        // width: "16rem",
              padding:"0 10px 10px 10px"
      }}
    >
      <div
        style={{
          backgroundColor: "#CCFBEF",
          width: "100%",
          borderRadius: "16px",
          borderEndStartRadius: "0px",
          borderEndEndRadius: "0px",
          padding: "0 10px 10px 10px",
        }}
      >
        <h1 style={{ marginLeft: "10px" }}>B Complex</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={Card} alt="" />
          <img src={Meds} alt="" />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          borderEndStartRadius: "24px",
          borderEndEndRadius: "24px",
          zIndex: "10",
          padding: "0 10px 10px 10px",
        }}
      >
        <div>
          {qualities.map((item, index) => (
            <span
              style={{
                marginRight: "10px",
                border: "1px solid",
                borderRadius: "4px",
                width: "auto",
                gap: "10px",
                display: "inline-flex",
                padding: "4px 8px",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3>Recommended by</h3>
          <img src={Avatar} height={40} alt="" />
          <img src={Avatar2} height={40} alt="" />
        </div>
        <hr style={{ margin: "0px 10px " }} />
        <div>
          <h2>Starting at</h2>
          <p>
            <span style={{ color: "#107569", fontSize: "16px" }}>$100</span> /
            60 capsules
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
