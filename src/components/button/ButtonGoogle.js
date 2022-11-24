import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-[10px] font-semibold mb-[20px] text-[16px] text-text2 py-[13px] border rounded-[10px]"
      onClick={onClick}
    >
      <img srcSet="./Google.png 2x" alt="" className="w-[24px] h-[24px]" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonGoogle;
