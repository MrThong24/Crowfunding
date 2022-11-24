import React from "react";
import ReactModal from "react-modal";
import FieldComponents from "../components/common/FieldComponents";
import Overline from "../components/common/Overline";
import { Input } from "../components/input";
import { Label } from "../components/label";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTop from "../modules/dashboard/DashboardTop";

const LayoutDashboard = (props) => {
  const { children } = props;
  return (
    <div className="p-[40px] bg-lite">
      <ReactModal
        isOpen
        overlayClassName="modal-overlay bg-black bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center "
        className="modal-content w-full max-w-[520px] flex justify-center flex-col bg-white rounded-[20px] px-[40px] py-[50px] outline-none relative"
      >
        <button className="absolute top-2 right-4 z-[51] text-text3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <h2 className="text-text1 text-[25px] font-bold text-center mb-[50px]">
          Back this project
        </h2>
        <FieldComponents>
          <Label htmlFor="amount">Enter the contribute amount</Label>
          <input
            name="amount"
            type="text"
            className="w-full px-[25px] py-[15px] rounded-[10px] text-[14px] font-medium text-text1 placeholder:text-text4 border border-strock"
            placeholder="$10"
          />
        </FieldComponents>
        <h3 className="font-normal text-text3 text-[14px]">
          Contribution are not associatied with perks
        </h3>
      </ReactModal>
      <Overline></Overline>
      <DashboardTop></DashboardTop>
      <div className="flex gap-x-[40px]">
        <div className="flex-1">
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
