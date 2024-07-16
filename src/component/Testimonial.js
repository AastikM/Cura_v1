import React from "react";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import x from "../assets/x.png";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
const Testimonial = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#161B26",
        height: "80vh",
        color: "#FFF",
        alignItems: "center",
      }}
    >
      <div
        style={{
          wordWrap: "break-word",
          width: "40%",
          paddingRight: "15rem",
          marginLeft: "7rem",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#94969C",
          }}
        >
          Know more about the
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "38px",
          }}
        >
          Experts
        </p>

        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#94969C",
          }}
        >
          Cura is not affiliated with or endorsed by Bryan Johnson or Dr. Andrew
          Huberman. <br />
          Any references to their names, images, or recommendations are solely
          for informational purposes.
        </h1>
      </div>
      <div style={{ display: "flex", width: "100%", gap: "4rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column ",
            width: "40%",
            wordWrap: "break-word",
          }}
        >
          <img src={test1} width={400} alt="" />
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30px",
            }}
          >
            Bryan Johnson
          </h1>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#94969C",
            }}
          >
            A visionary entrepreneur, founder of Braintree and Kernel, and an
            investor through OS Fund, committed to advancing human potential
            through innovation and scientific research.
          </h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
            <img src={google} alt="" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column ",
            width: "40%",
            wordWrap: "break-word",
          }}
        >
          <img src={test2} width={400} alt="" />
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30px",
            }}
          >
            Bryan Johnson
          </h1>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#94969C",
            }}
          >
            A visionary entrepreneur, founder of Braintree and Kernel, and an
            investor through OS Fund, committed to advancing human potential
            through innovation and scientific research.
          </h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
