import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../Share/Timer";
import FlashsellSingleProducts from "./FlashsellSingleProducts";

const Flashsell = () => {
  const [products, setProducts] = useState([]);
  const time = new Date().toLocaleTimeString();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleProductDetails = () => {
    navigate("/productDetails");
  };
  return (
    <div className="mt-20">
      <h1 className=" text-2xl font-bold pb-2 text-gray-600 tracking-wider">
        FlashSale
      </h1>
      <div className="bg-white px-5 py-5 mb-5">
        <div className="lg:h-[50px] pb-2 lg:pb-0 flex flex-col lg:flex-row justify-between border-b-[1px] border-gray-300">
          <div className="flex gap-x-4  lg:gap-x-14 ">
            <div className="text-[#7fad39] font-semibold tracking-wider">
              On Sale Now
            </div>
            <div className="text-orange-400 font-semibold tracking-wider flex">
              Ending in{" "}
              <span className="ml-2">
                <Timer />
              </span>{" "}
            </div>
          </div>
          <div className="mt-3 lg:mt-0">
            <button className="tracking-wider border-2 border-green-300 p-1 font-bold hover:scale-105 duration-300">
              Shop More
            </button>
          </div>
        </div>
        <div className="px-5 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 cont gap-y-[70px] lg:gap-x-5 md:gap-x-5 py-10 ">
          {products.slice(0, 5).map((product) => (
            <FlashsellSingleProducts key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashsell;
