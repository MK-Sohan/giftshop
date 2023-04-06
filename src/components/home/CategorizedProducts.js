import React from "react";
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

const CategorizedProducts = ({ tag }) => {
  const [products] = useProduct([]);

  // const products = [
  //     cat1,
  //     cat2,
  //     cat3,
  //     cat4,
  //     cat5,
  //     cat6,
  //     cat7,
  //     cat8,
  //     cat9,
  //     cat10,
  //     cat11,
  //     cat12,
  // ];

  return (
    <div className="CategorizedProducts_page h-[22rem] cont grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 snap-y snap-proximity ">
      {products?.map((product, i) => (
        <div key={i} className={"h-80 px-2 snap-start snap-always my-4"}>
          <section
            className="  shadow-lg h-full bg-no-repeat bg-center  rounded-md relative overflow-hidden "
            // style={{
            //   backgroundImage: `url('${product.picture}')`,
            //   objectFit: "contain",

            //   margin: "0 auto",
            // }}
          >
            <img src={product.picture} alt="" />
            <h3 className="text-2xl font-bold absolute bottom-0 right-0 left-0 text-center h-10 pt-2 flex justify-center text-white text-white bg-dark/40">
              {product.name}
            </h3>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CategorizedProducts;
