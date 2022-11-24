import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative isolate w-full min-h-screen bg-slate-300 p-[40px] sm:p-[24px]">
      <img
        className="absolute bottom-0 left-0 ring-0 z-[-1] w-full"
        src="./Ellipse.png"
        alt=""
      />
      <Link className="inline-block mb-[61px] sm:mb-[16px]" to="/">
        <img src="./logo.jpg" alt="logoHome" />
      </Link>
      <div className="max-w-[556px] rounded-[10px] py-[50px] px-[60px] bg-white mx-auto sm:py-[30px] sm:px-[20px]">
        <h2 className="text-[20px] mb-[10px] font-semibold text-center ">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
