import React from "react";
import { CampImage, CampTitle } from "./paths";

const CampaignPerk = () => {
  return (
    <div className="bg-white rounded-[20px] shadow-card">
      <CampImage src="./imageCard.png" className="object-cover"></CampImage>
      <div className="p-[20px]">
        <span className="bg-secondary text-[12px] font-medium px-[14px] py-[5px]  rounded-[2px] text-white">
          Featured
        </span>
        <CampTitle className="text-[20px] font-semibold mt-[20px]">
          Special One Camera
        </CampTitle>
        <div className="flex items-center mb-4 mt-[5px] gap-x-3">
          <span className="text-xl font-bold text-text1">$2,724 USD</span>{" "}
          <span className="text-sm font-medium line-through text-error">
            $1,504 USD
          </span>
          <span className="text-sm font-medium text-error">(12% OFF)</span>
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-text1 text-[16px] font-medium">
            Estimated Shipping
          </span>
          <span className="text-text2 text-[14px] font-normal">
            October 2022
          </span>
        </div>
        <div className="flex flex-col gap-y-[15px]">
          <p className="text-[14px] text-text2 font-normal">
            <span className="font-medium text-text1">05</span> claimed
          </p>
          <span className="text-text2 text-[14px] font-normal">
            Ships worldwide
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampaignPerk;
