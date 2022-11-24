import React from "react";
import {
  CampAuthor,
  CampCategory,
  CampDesc,
  CampMeta,
  CampTitle,
  CampImage,
} from "./paths";

const CampaignItem = () => {
  return (
    <div className="w-full max-w-[288px] rounded-[15px] shadow-shadowCard">
      <CampImage
        src="./Card.png"
        className="rounded-[15px] h-[158px]"
      ></CampImage>
      <div className="py-[15px] pl-[20px] pr-[37px] flex flex-col shrink-1">
        <CampCategory className="text-[12px]" text="Education"></CampCategory>
        <div className="mb-[15px]">
          <CampTitle className="mb-[5px] font-semibold text-[16px]">
            Powered Kits Learning Boxes
          </CampTitle>
          <CampDesc className="text-[12px]">
            Fun, durable and reusable boxes with eco-friendly options.
          </CampDesc>
        </div>
        <div className="flex items-center justify-between gap-x-[50px] mb-[20px]">
          <CampMeta amount="$2000" text="Raised of $1,900"></CampMeta>
          <CampMeta amount="173" text="Total backers"></CampMeta>
        </div>
        <CampAuthor src="./Avater.png" text="Mahfuzul Nabil"></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
