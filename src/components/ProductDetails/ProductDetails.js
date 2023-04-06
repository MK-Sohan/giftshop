import React, { useState } from "react";
import useProduct from "../Hooks/useProduct";
import "./productDetails.scss";
const ProductDetails = () => {
  const [products] = useProduct([]);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const minusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto px-3 py-5 lg:pt-20 lg:h-screen ">
      <div className="  shadow-sm   bg-white">
        <div className="flex flex-col gap-y-7 lg:gap-y-0 lg:flex-row justify-center gap-x-9 py-20">
          <div className="shadow-xl hover:shadow-md">
            <img
              className="h-[430px] w-[430px] object-contain "
              src="https://i.ibb.co/9Vz4hyD/Be-Funky-collage-48.jpg"
              alt=""
            />
          </div>
          <div className=" p-4">
            <div>
              <div>
                <h1 className="font-semibold text-2xl">this is heading</h1>
              </div>
              <div className="flex items-center gap-x-6 mt-4">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-[#67981d] tracking-widest">
                  298 Ratings | <span>134 Answered Questions</span>{" "}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-[#67981d] tracking-widest">
                  Brand: <span className="text-black">No brand</span>
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className="  text-lg font-semibold text-black cursor-auto my-3">
                  $122
                </p>
                <div className="flex justify-start items-start gap-x-2 ">
                  {" "}
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ">$130</p>
                  </del>
                  <p className="text-sm text-gray-600 cursor-auto ">-3%</p>
                </div>
                <div className="mt-5">
                  <p className="text-[#67981d] tracking-widest">
                    Color family: <span className="text-black">Black</span>
                  </p>
                </div>
                <div className="flex gap-x-3 mt-7">
                  <p className="text-[#67981d] tracking-widest">Size: </p>
                  <ul className="flex gap-x-5">
                    <li className="border-[1px] w-10 text-center border-green-400 hover:border-gray-600 duration-300 px-2 cursor-pointer">
                      M
                    </li>
                    <li className="w-10 text-center border-[1px] border-green-400 hover:border-gray-600 duration-300 px-2 cursor-pointer">
                      L
                    </li>
                    <li className="w-10 text-center border-[1px] border-green-400 hover:border-gray-600 duration-300 px-2 cursor-pointer">
                      XL
                    </li>
                  </ul>
                </div>
                <div className="mt-10">
                  <div className=" ">
                    <div className="flex flex-row justify-between items-center">
                      <p className=" font-medium text-base leading-4 text-[#67981d]">
                        Select quantity:
                      </p>
                      <div className="flex ml-2">
                        <span
                          onClick={minusCount}
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                        >
                          -
                        </span>
                        <input
                          id="counter"
                          aria-label="input"
                          className="border border-gray-300  text-center w-14 "
                          type="text"
                          value={count}
                        />
                        <span
                          onClick={addCount}
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                        >
                          +
                        </span>
                      </div>
                    </div>

                    {/* <hr className=" bg-gray-200 w-full mt-4" /> */}
                  </div>
                </div>
              </div>
              <div className="flex gap-x-6 mt-10">
                <button className="rounded-sm w-44 h-[50px] bg-green-400  hover:bg-green-600 hover:scale-110 duration-300 text-white font-medium tracking-widest text-2xl">
                  Buy Now
                </button>
                <button className="rounded-sm w-44 h-[50px] bg-red-400 hover:bg-red-600 hover:scale-110  duration-300 text-white font-medium tracking-widest text-2xl">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="bg-[#fafafa] h-[52px]  pl-5 pt-3 font-bold tracking-widest ">
          <h1 className="text-gray-600">
            Product details of Denim Long Sleeve Casual Shirt For Men 264
          </h1>
        </div>
        <div className="  shadow-sm   bg-white p-5 flex flex-col items-start gap-x-4">
          <li>Product Type: Casual Shirt</li>
          <li>Product Type: Casual Shirt</li>
          <li>Product Type: Casual Shirt</li>
          <li>Product Type: Casual Shirt</li>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
