import React from "react";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  className = "",
  type = "button",
  children,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white border-t-transparent pointer-events-none rounded-full animate-spin"></div>
  ) : (
    children
  );
  let defaultClassName =
    "min-h-[52px] flex justify-center items-center rounded-[10px] max-h-[52px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-while";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (rest.heft)
    return (
      <Link to={rest.heft} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      className={classNames(
        defaultClassName,
        !!isLoading ? "bg-opacity-10 pointer-events-none " : "",
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

export default Button;
