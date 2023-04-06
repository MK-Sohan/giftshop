/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
// import link
import { animateScroll as scroll } from "react-scroll";
const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="  bg-gradient-to-r from-green-400 to-green-400 hover:bg-accent-hover text-3xl  w-12 h-16 rounded-sm fixed right-8 bottom-[30px] lg:bottom-[30px] cursor-pointer flex justify-center items-center transition-all z-[999]"
      >
        <div className="text-white font-bold ">
          <IoIosArrowUp></IoIosArrowUp>
          <IoIosArrowUp className="-mt-10"></IoIosArrowUp>
        </div>
      </button>
    )
  );
};

export default BackTopBtn;
