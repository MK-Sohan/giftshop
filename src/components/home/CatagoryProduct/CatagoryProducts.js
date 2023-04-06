import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CatagoryProducts.scss";
const CatagoryProducts = () => {
  const navigate = useNavigate();
  const handleCatagory = () => {
    navigate("/productCatagory");
  };
  return (
    <div className="catagory_products_wrapar mt-20">
      <h1 className=" text-2xl font-bold pb-2 text-gray-600 tracking-wider">
        Shop by Catagory
      </h1>
      <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container  px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
              <div class="relative group justify-center items-center  overflow-hidden w-full hidden lg:flex">
                {/* <img
                  class="hover:scale-105 transition-all duration-500 object-center object-cover h-full w-full"
                  src="https://i.ibb.co/qBGNr6b/close-up-shot-boy-model-wearing-winter-outfit-orange-shirt-public-fashion-modelling.jpg"
                  alt="girl-image"
                /> */}
                <img
                  class="hover:scale-105 transition-all duration-500 object-center object-cover h-full w-full"
                  src="https://i.ibb.co/C8PSnDg/number-14-valentines-day-with-3d-hearts-1.jpg"
                  alt="girl-image"
                />
                <button
                  onClick={handleCatagory}
                  data-tip="Men's Collection"
                  class="tooltip  dark:bg-clr font-bold tracking-widest text-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute  leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Valentine Special
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div class="relative group flex justify-center items-center h-min overflow-hidden w-full">
                  <img
                    class="hover:scale-105 transition-all duration-500 object-center object-cover h-full w-full "
                    src="https://i.ibb.co/9qKXbWJ/cute-stylish-children.jpg"
                    alt="shoe-image"
                  />

                  <button
                    onClick={handleCatagory}
                    data-tip="Kids's Collection"
                    class="tooltip dark:bg-clr font-bold tracking-widest text-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute  leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Kids Gift
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div class="relative group flex justify-center items-center  overflow-hidden w-full">
                  <img
                    class="hover:scale-105 transition-all duration-500 object-center object-cover h-full w-full"
                    src="https://i.ibb.co/9Vz4hyD/Be-Funky-collage-48.jpg"
                    alt="watch-image"
                  />
                  <button
                    onClick={handleCatagory}
                    data-tip="Casual Shoe Collection"
                    class="dark:bg-clr tooltip font-bold tracking-widest text-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute  leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Normal Gift
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div class="relative group justify-center items-center  overflow-hidden w-full hidden lg:flex">
                <img
                  class="hover:scale-105 transition-all duration-500 object-center object-cover h-full w-full"
                  src="https://i.ibb.co/nLbWcqn/close-up-details-legs-pink-sandals-stylish-woman-walking-city-street-printed-colorful-skirt-holding.jpg"
                  alt="girl-image"
                />
                <button
                  onClick={handleCatagory}
                  data-tip="Women's Collection"
                  class="dark:bg-clr font-bold tooltip tracking-widest text-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute  leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Gift for Women's
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  class="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  class="object-center object-cover h-full w-full md:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button class="dark:bg-clr font-bold tracking-widest text-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute  leading-none text-gray-800 py-3 w-36 bg-white">
                  Women's
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                class="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                class="object-center object-cover h-full w-full sm:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Women's
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoryProducts;
