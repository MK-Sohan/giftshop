import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="pt-10">
        <div className="border border-r-0 rounded overflow-hidden h-12 grow shrink flex justify-center mx-auto w-[600px] mx-start ">
          <input
            type="text"
            placeholder=""
            className="input rounded-none placeholder:font-bold placeholder:tracking-wider text-zinc-900 font-bold grow shrink "
          />

          <button className="btn bg-clr border-0 rounded-none hover:bg-clr">
            Search
          </button>
        </div>
      </div>

      <div className="px-5 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 cont gap-y-[70px] lg:gap-x-5 md:gap-x-5 py-10 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
