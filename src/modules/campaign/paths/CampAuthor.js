import React from "react";

const CampAuthor = ({ src = "", text }) => {
  return (
    <div className="flex items-center gap-x-[10px]">
      <img
        className="object-cover w-[30px] h-[30px] rounded-full"
        src={src}
        alt="Author"
      />
      <p className="text-text3 font-normal text-[12px]">
        by <span className="font-semibold text-text2 text-[12px]">{text}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
