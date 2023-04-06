import React from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import cat1 from "./../../images/productSlide/cat-1.jpg";
import cat2 from "./../../images/productSlide/cat-2.jpg";
import cat3 from "./../../images/productSlide/cat-3.jpg";
import cat4 from "./../../images/productSlide/cat-4.jpg";
import cat5 from "./../../images/productSlide/cat-5.jpg";
import cat6 from "./../../images/productSlide/cat-6.jpg";
import cat7 from "./../../images/productSlide/cat-7.jpg";
import cat8 from "./../../images/productSlide/cat-8.jpg";
import cat9 from "./../../images/productSlide/cat-9.jpg";
import cat10 from "./../../images/productSlide/cat-10.jpg";
import cat11 from "./../../images/productSlide/cat-11.jpg";
import cat12 from "./../../images/productSlide/cat-12.jpg";
import useProduct from "../Hooks/useProduct";

// custom arrows
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <MdKeyboardArrowLeft
      className={className}
      style={{
        ...style,
        color: "black",
        height: "5rem",
        width: "3.5rem",
        position: "absolute",
        top: "50%",
        left: "-15",
      }}
      onClick={onClick}
    />
  );
};
const NextArrow = ({ className, style, onClick }) => {
  return (
    <MdKeyboardArrowRight
      className={className}
      style={{
        ...style,
        color: "black",
        height: "5rem",
        width: "3.5rem",
        position: "absolute",
        top: "50%",
        right: "-15",
      }}
      onClick={onClick}
    />
  );
};

const SlideCard = ({ product, className }) => {
  return (
    <div
      className={className}
      style={{
        width: "auto",
        minWidth: "0",
      }}
    >
      <section
        className="shadow-lg h-full bg-no-repeat bg-center rounded-md relative overflow-hidden"
        // style={{
        //   backgroundImage: `url('${product.picture}')`,
        // }}
      >
        <img src={product.picture} alt="" />
        <h3 className="text-2xl font-bold absolute bottom-0 right-0 left-0 text-center h-10 pt-2 flex justify-center text-white bg-dark/40">
          Name
        </h3>
      </section>
    </div>
  );
};

const ProductSlide = ({ className }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: "cont px-7 relative",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // const products = [
  //   cat1,
  //   cat2,
  //   cat3,
  //   cat4,
  //   cat5,
  //   cat6,
  //   cat7,
  //   cat8,
  //   cat9,
  //   cat10,
  //   cat11,
  //   cat12,
  // ];
  const [products] = useProduct([]);
  return (
    <div className={className}>
      <Slider {...settings}>
        {products.map((product, i) => (
          <SlideCard key={i} product={product} className={"h-80 px-2"} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlide;
