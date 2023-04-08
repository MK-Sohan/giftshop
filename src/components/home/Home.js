import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import Footer from "../Share/Footer";
import Accordion from "./Accordion/Accordion";
import CatagoryProducts from "./CatagoryProduct/CatagoryProducts";
import FeaturedProducts from "./FeaturedProducts";
import Flashsell from "./Flashsell";
import HomeSlide from "./HomeSlide";
import JustForYou from "./JustForYou/JustForYou";
import ProductSlide from "./ProductSlide";
import Search from "./Search";

const Home = () => {
  return (
    <div className="cont px-5 pt-10">
      <section className="lg:flex flex-wrap gap-5 space-y-5 lg:space-y-0">
        <Accordion className="cont shadow-lg rounded-md grow lg:max-w-md" />

        <section className="block lg:w-[calc(100vw-28rem)] max-w-[1104px] space-y-2 shrink">
          <Search className={`flex flex-wrap justify-between gap-5 pr-3`} />
          <HomeSlide />
        </section>
      </section>
      <Flashsell />
      <ProductSlide className={`mt-12`} />
      <CatagoryProducts />
      <FeaturedProducts className={`mt-12 mb-20`} />
      <JustForYou />
    </div>
  );
};

export default Home;
