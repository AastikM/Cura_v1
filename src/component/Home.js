import React from "react";
import ImageRight from "../assets/ImageRight.png";
import ImageLeft from "../assets/ImageLeft.png";
import BackgroundImage from "../assets/BackgroundImage.png";
import Ellipse from "../assets/Ellipse.png";
const Circle = ({ label }) => {
  const labelStyle = {
    textAlign: "center",
    color: "#123D3A",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <div>
      <img src={Ellipse} alt="" />
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

const Home = () => {
  const items = [
    "Hair",
    "Skin",
    "Aging",
    "Stress",
    "Brain",
    "Immune",
    "Fatigue",
    "Joints",
    "Muscle",
    "Sleep",
    "Focus",
    "Show all",
  ];

  return (
    <div
      style={{
        paddingTop: "200px",
        backgroundColor: "#F0FDF9",
        // height: "0%",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          wordWrap: "break-word",
          width: "45vw",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#134E48",
            wordBreak: "break-word",
            fontFamily: "Inter",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "72px",
            lineSpacing: "-1.2px",
            marginBottom: "20px",
          }}
        >
          Take charge of your health with expert advice
        </p>
        <img
          style={{ position: "relative", top: "30px", left: "50px" }}
          src={ImageRight}
          height={120}
          alt=""
        />
      </div>
      <div
        style={{
          // justifyContent:"center",
          display: "flex",
          width: "36vw",
          wordWrap: "break-word",
          textAlign: "center",
          marginRight: "200px",
        }}
      >
        <img
          style={{ position: "relative", bottom: "10px", right: "150px" }}
          src={ImageLeft}
          height={120}
          alt=""
        />
        <p
          style={{
            color: "#107569",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          Get the best, most innovative supplements, plus expert tips from the
          world's top researchers and doctors.
        </p>
      </div>
      <div
        style={{
          width: "100vw",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F0FDF9F",
          height: "100vh",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <div
          style={{
            height: "40%",
            width: "60vw",
            borderRadius: "24px",
            backgroundColor: "#FFF",
            position: "relative",
            top: "70px",
            // flexDirection: "column",
            gap: "10px",
            display: "flex",
            // alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
        </div> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "50px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "80%",
            margin: "auto",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {items.map((item, index) => (
            <Circle key={index} label={item} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
