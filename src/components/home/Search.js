import React from "react";
import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import "../Share/bounce.css";
const Search = ({ className }) => {
  const [input, setInput] = useState({
    text: "",
    placeholder: "Search",
  });

  const searching = () => {
    if (Boolean(input.text)) {
      const searchText = input.text;

      setInput({
        text: "",
        placeholder: searchText,
      });
      console.log(searchText);
    } else {
      return;
    }
  };

  return (
    <section className={className}>
      <div className="border border-r-0 rounded overflow-hidden h-12 grow shrink flex justify-center">
        <input
          onChange={(e) => setInput({ ...input, text: e.target.value })}
          onKeyUp={(e) => e.key === "Enter" && searching()}
          type="text"
          placeholder={input.placeholder}
          value={input.text}
          className="input rounded-none placeholder:font-bold placeholder:tracking-wider text-zinc-900 font-bold grow shrink min-w-0"
        />

        <button
          onClick={searching}
          className="btn bg-clr border-0 rounded-none hover:bg-clr"
        >
          Search
        </button>
      </div>

      <div className="flex justify-center items-center gap-5">
        <IoIosCall className="text-clr h-12 w-12 bg-gray-200 rounded-full p-3 shake" />

        <section className="text-zinc-900">
          <h4 className="font-bold text-center">+8801776817368</h4>
          <p className="text-center text-zinc-500">support 24/7 time</p>
        </section>
      </div>
    </section>
  );
};

export default Search;
