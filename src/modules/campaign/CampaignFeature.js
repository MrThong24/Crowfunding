import React from "react";
import {
  CampCategory,
  CampDesc,
  CampImage,
  CampMeta,
  CampTitle,
} from "./paths";

const CampaignFeature = () => {
  return (
    <div className="flex flex-1 w-full  min-h-[266px] mb-[30px] gap-x-[30px]">
      <CampImage
        className="max-w-[583px] h-[266px] rounded-[25px]"
        src="./Card.png"
      ></CampImage>
      <div className="pt-[17px] w-full max-w-[435px]">
        <CampCategory
          className="text-[14px]"
          text="Architecture"
        ></CampCategory>
        <CampTitle className="font-bold text-[20px] mb-[15px]">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-[14px] leading-[22px]">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] bg-text3 rounded-[5px] my-[22px]">
          <div className="w-3/4 h-full bg-primary rounded-[5px]"></div>
        </div>
        <div className="flex items-center justify-between gap-x-[50px] mb-[20px]">
          <CampMeta
            size="big"
            amount="$2000"
            text="Raised of $1,900"
          ></CampMeta>
          <CampMeta size="big" amount="173" text="Total backers"></CampMeta>
          <CampMeta size="big" amount="30" text="Day left"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
