import React from "react";
import { Button } from "../../components/button";

const CampaignSupport = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-text1 font-semibold text-[18px] mb-[20px]">
        Support
      </h3>
      <div className="bg-white p-[25px] rounded-[10px]">
        <h3 className="text-center text-text3 text-[20px] font-medium mb-[30px]">
          Pledge without reward
        </h3>
        <input
          type="text"
          className="border border-strock w-full py-[10px] px-[20px] rounded-[10px]"
          placeholder="$10"
        />
        <div className="p-[20px] bg-[#F6F6F6] rounded-[10px] mt-[20px]">
          <h3 className="text-[14px] text-text2 font-semibold mb-[20px]">
            Back it because you believe in it.
          </h3>
          <p className="text-[14px] text-text3 font-normal">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button
          className="text-white inline-block w-full mt-[20px]"
          kind="secondary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
