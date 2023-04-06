/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HomeSlide = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "text-white",
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    className: "min-w-0 h-96",
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("dummydata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="relative">
      <Slider {...settings}>
        {products?.map((product, i) => (
          <div className={"mx-auto h-96 w-full "} key={i}>
            <img
              className="h-full block w-full object-cover "
              src={product.picture}
              alt=""
            />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 top-0 z-50 flex flex-col justify-center items-start gap-5 px-[30px] max-w-lg">
        {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Grab Your Product With Reasonable Price
        </h2> */}
        <Link to="/shop">
          <button className="bg-clr flex items-center hover:bg-green-600 hover:scale-105 duration-300 text-white font-bold px-5 py-2 rounded text-2xl uppercase mt-[170px]">
            Shop Now <IoIosArrowForward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlide;
