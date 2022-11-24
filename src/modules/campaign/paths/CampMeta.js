import React from "react";
import classNames from "../../../utils/classNames";

const CampMeta = ({ size = "small", amount = "", text = "" }) => {
  return (
    <div className="flex flex-col gap-y-[4px]">
      <h2
        className={classNames(
          "text-text2 font-semibold",
          size === "small" ? "text-[14px]" : "text-[20px]"
        )}
      >
        {amount}
      </h2>
      <p
        className={classNames(
          "text-text4 font-normal",
          size === "small" ? "text-[12px]" : "text-[16px]"
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default CampMeta;
