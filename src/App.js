import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/preBuild/NotFound";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import Modal from "./components/preBuild/Modal";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Footer from "./components/Share/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ContactWithUs from "./components/ContactWithUs/ContactWithUs";
import BackTopBtn from "./components/Share/BackTopBtn";
import ShopingCart from "./components/ShopingCart/ShopingCart";
import ProductsCatagory from "./components/home/CatagoryProduct/ProductsCatagory";
// for implementing aos animation
Aos.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 0,
  throttleDelay: 0,
  offset: 150,
  delay: 0,
  duration: 400,
  easing: "ease-out-sine",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="cairo scroll-smooth bg-[#eff0f5]">
      <Header />

      <section className="mt-14 lg:mt-24">
        <Routes>
          <Route path="/home" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contactwithus" element={<ContactWithUs />} />
          <Route path="/shopingCart" element={<ShopingCart />} />
          <Route path="/productCatagory" element={<ProductsCatagory />} />
        </Routes>
      </section>
      <Footer />
      <Modal />
      <BackTopBtn />
      <ToastContainer />
    </div>
  );
}

export default App;
