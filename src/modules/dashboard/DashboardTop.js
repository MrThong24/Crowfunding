import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";
const DashboardTop = () => {
  return (
    <div className="w-full flex items-center justify-between mb-[40px]">
      <div className="flex flex-1 gap-x-[53px] ml-[10px]">
        <Link to="#">
          <img src="./logo.jpg" alt="logoMain" />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-x-[40px]">
        <DashboardFund></DashboardFund>
        <Button
          type="submit"
          className="px-[26px] py-[13px] font-semibold text-[16px] bg-opacity-70"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <div className="rounded-[50%]">
          <img
            srcSet="Avater.png"
            className="object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
