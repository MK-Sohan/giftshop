import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../Share/bounce.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const JustForYouSingleProduct = ({ product }) => {
  const [avg, setData] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const { price, newPrice } = product;
    const percentage = ((price + newPrice) / 100) * 100;
    setData(percentage);
  }, []);

  const handleProductDetails = () => {
    navigate("/productDetails");
  };

  return (
    <div onClick={handleProductDetails} className="cursor-pointer">
      <div className="bg-white  mx-auto shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-md">
        <img
          src={product.picture}
          alt="Product"
          className="h-[189px] w-[189px] mx-auto object-contain rounded-t-xl "
        />

        <div className="px-4 py-3 w-full">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {product.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <div className="flex  items-center">
            <div className="flex flex-col items-start">
              <p className="  text-lg font-semibold text-black cursor-auto my-3">
                ${product.newPrice}
              </p>
              <div className="flex justify-start items-start gap-x-2 ">
                {" "}
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ">
                    ${product.price}
                  </p>
                </del>
                <p className="text-sm text-gray-600 cursor-auto ">-{avg}%</p>
              </div>
            </div>

            <div className="ml-auto bounce">
              <a
                className="text-[#67981d] tooltip"
                data-tip="Add to Cart"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="rating rating-sm mt-3">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForYouSingleProduct;
