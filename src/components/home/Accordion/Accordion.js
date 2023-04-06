import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Accordion = ({ className }) => {
  const [show, setShow] = useState(true);

  const depertments = ["Valentine Gift", "WOMEN'S Gift", "KID'S Gift"];
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("productCatagory");
  };
  return (
    <div className={className}>
      <section
        onClick={() => setShow((prev) => !prev)}
        className="relative bg-clr h-12 pr-8 flex items-center gap-2 pl-[5%] text-white cursor-pointer select-none"
      >
        <GiHamburgerMenu className="h-[90%] w-5" />
        <h1 className="grow text-lg font-bold tracking-wide">Categories</h1>

        {show ? (
          <MdKeyboardArrowDown className="absolute right-0 top-0 bottom-0 w-8 h-full" />
        ) : (
          <MdKeyboardArrowUp className="absolute right-0 top-0 bottom-0 w-8 h-full" />
        )}
      </section>

      <section
        className={`${
          show ? "h-80 py-4" : "h-0"
        } transition-[height] overflow-hidden`}
      >
        <div className="overflow-y-auto h-full">
          {depertments.map((name, i) => (
            <p
              onClick={handlenavigate}
              className="h-9 flex items-center px-[5%] font-bold text-zinc-900 cursor-pointer"
              key={i}
            >
              {name}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accordion;
