import React from "react";
import TabContainer, { TabButton } from "../preBuild/TabContainer";
import CategorizedProducts from "./CategorizedProducts";

const FeaturedProducts = ({ className }) => {
  return (
    <div className="mt-20">
      <h1 className=" text-2xl font-bold pb-2 text-gray-600 tracking-wider">
        Featured Products
      </h1>

      <section className="flex flex-wrap sm:justify-center items-center">
        <TabButton
          className={
            "border h-8 w-28 text-center font-bold basis-[30%] sm:basis-auto"
          }
          content={<CategorizedProducts />}
          checked={true}
        >
          All
        </TabButton>
        <TabButton
          className={
            "border h-8 w-28 text-center font-bold basis-[30%] sm:basis-auto"
          }
          content={"no data here"}
        >
          Sports
        </TabButton>
        <TabButton
          className={
            "border h-8 w-28 text-center font-bold basis-[30%] sm:basis-auto"
          }
          content={"no data here"}
        >
          Casual
        </TabButton>
        <TabButton
          className={
            "border h-8 w-28 text-center font-bold basis-[30%] sm:basis-auto"
          }
          content={"no data here"}
        >
          Formal
        </TabButton>
        <TabButton
          className={
            "border h-8 w-28 text-center font-bold basis-[30%] sm:basis-auto"
          }
          content={"no data here"}
        >
          Sneakers
        </TabButton>
      </section>

      <TabContainer className={``} initialContent={<CategorizedProducts />} />
    </div>
  );
};

export default FeaturedProducts;
