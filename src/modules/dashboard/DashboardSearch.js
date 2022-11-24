import React from "react";
import { useState } from "react";

const DashboardSearch = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative ">
      <div className="shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-[100px]">
        <input
          type="text"
          className="border w-full border-text4 rounded-[100px] placeholder:text-text4 text-[14px] text-text1 font-normal py-[15px] px-[25px]"
          placeholder="Do fundrise now"
        />
        <button className="absolute top-2/4 -translate-y-2/4 w-[70px] flex justify-center items-center h-[40px] bg-primary rounded-[20px] right-[7px] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {show && (
        <div className="absolute w-[843px] sm:w-full rounded-[20px] mt-[25px] bg-white">
          <div className="flex justify-between items-center bg-graySoft px-[25px] rounded-t-[20px] py-[24px] underline">
            <h4 className="text-text1 font-medium text-[14px]">
              See all 10,124 fundraisier
            </h4>
            <button className="flex justify-center items-center w-[72px] h-[50px] bg-error bg-opacity-20 rounded-[10px] text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-[25px]">
            <div className="flex flex-col gap-y-[20px] mb-[25px]">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h2 className="text-text1 text-[14px] font-semibold mb-[15px]">
              Releted searchs
            </h2>
            <div className="flex flex-col gap-y-[10px]">
              <p className="text-[14px] text-text2 font-normal">
                <span className="text-text1 font-medium">education</span> fund
              </p>
              <p className="text-[14px] text-text2 font-normal">
                <span className="text-text1 font-medium">education</span> fund
              </p>
              <p className="text-[14px] text-text2 font-normal">
                <span className="text-text1 font-medium">education</span> fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-[20px]">
      <img
        src="./PlaceHolder.png"
        className="object-cover w-[50px] h-[50px] rounded-[10px]"
        alt=""
      />
      <div className="flex flex-col gap-y-[5px]">
        <h2 className="text-[14px] font-normal text-[#171725]">
          <span className="font-semibold">Education</span> fund for Durgham
          Family
        </h2>
        <p className="text-text3 text-[14px] font-normal">By Durgham Family</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
