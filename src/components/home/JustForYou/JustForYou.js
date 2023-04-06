import React, { useEffect, useState } from "react";
import JustForYouSingleProduct from "./JustForYouSingleProduct";

const JustForYou = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(5);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleLoadmore = () => {
    setShow((visible) => visible + 5);
  };
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold pb-2 text-gray-600 tracking-wider">
        Just For Your
      </h1>
      <div className="px-5 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 cont gap-y-[70px] lg:gap-x-5 md:gap-x-5  ">
        {products.slice(0, show).map((product) => (
          <JustForYouSingleProduct key={product._id} product={product} />
        ))}
      </div>
      <div onClick={handleLoadmore} className="flex justify-center py-10">
        <button className=" border-[1px] border-black px-5 py-2 tracking-widest	 text-xl w-[290px] hover:bg-gray-600 hover:text-white duration-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default JustForYou;
