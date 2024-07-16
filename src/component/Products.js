import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = ({ heading, subHeading }) => {
  const mapping = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ margin: "4rem 10rem" }}>
      <h2
        style={{
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "10px",
        }}
      >
        {heading}
      </h2>
      <h1
        style={{
          fontFamily: "Inter",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "38px",
        }}
      >
        {subHeading}
      </h1>
      <Slider {...settings}>
        {mapping.map((item) => (
          <ProductCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Products;
