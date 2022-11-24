import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import LayoutDashboard from "../../layout/LayoutDashboard";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import {
  CampCategory,
  CampDesc,
  CampMeta,
  CampTitle,
  CampViewAuthor,
  CampImage,
} from "./paths";

const CampaignView = () => {
  return (
    <LayoutDashboard>
      <Fragment>
        <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
          <h2>Education</h2>
        </div>
        <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
          <div className="flex-1">
            <CampImage
              src="./imageCard.png"
              className="h-[398px] rounded-[25px]"
            ></CampImage>
            <div className="flex justify-center gap-x-[20px] mt-[30px]">
              {Array(4)
                .fill()
                .map((item, index) => (
                  <img
                    key={index}
                    src="https://source.unsplash.com/random"
                    className="w-[89px] h-[70px] object-cover rounded-lg"
                    alt=""
                  />
                ))}
            </div>
          </div>
          <div className="flex-1">
            <CampCategory text="Film" className="text-[14px]"></CampCategory>
            <CampTitle className="font-bold text-[20px] my-[15px]">
              Meet - AI Virtual Background 4K Webcam
            </CampTitle>
            <CampDesc className="text-[14px] font-normal mb-[25px]">
              The first-ever 4K webcam that embeded AI technology to protect
              your background during video calls.
            </CampDesc>
            <CampViewAuthor></CampViewAuthor>
            <div className="w-full h-[5px] bg-[#EFEFEF] rounded-[5px] mt-[35px] mb-[28px]">
              <div className="w-[50%] h-full bg-primary rounded-[5px]"></div>
            </div>
            <div className="flex items-center gap-x-[65px]">
              <CampMeta
                size="big"
                amount="$2.000"
                text="Raised of $2,500"
              ></CampMeta>
              <CampMeta size="big" amount="173" text="Total backers"></CampMeta>
              <CampMeta size="big" amount="30" text="Days left"></CampMeta>
            </div>
            <Button
              kind="primary"
              className="w-full text-white font-semibold text-[16px] mt-[15px]"
            >
              Back this project
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
          <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
            <span className="cursor-pointer text-secondary">Campaign</span>
          </div>
        </div>
        <div className="flex justify-start mt-[200px] gap-x-[124px]">
          <div className="w-[600px] max-w-full">
            <h2 className="text-text1 font-semibold text-[18px] uppercase">
              Story
            </h2>
            <div className="bg-white">
              <div className="">
                <CampImage
                  src="./imageCard.png"
                  className="h-[400px] rounded-[25px]"
                ></CampImage>
                <p className="font-normal text-[16px] text-text3 px-[30px] mt-[30px] sp">
                  Capture everything in 4k, with extended battery life and pro-g
                  inspired features. Choose from three{" "}
                  <span className="font-medium text-text2 leading-[26px]">
                    4k recording modes
                  </span>
                  : UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect
                  and stream your footage wirelessly directly to your iOS and
                  Android smartphones or tablets for instant sharing. The
                  monitor has a 3.5" touch screen for easy navigation and
                  built-in wifi that automatically connects to the last used
                  smartphone or tablet once paired.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[440px] max-w-full">
            <CampaignSupport></CampaignSupport>
            <div className="mt-[60px]"></div>
            <div className="flex flex-col gap-y-[30px]">
              <CampaignPerk></CampaignPerk>
              <CampaignPerk></CampaignPerk>
              <CampaignPerk></CampaignPerk>
            </div>
          </div>
        </div>
        <h2 className="mb-10 text-xl font-semibold mt-[120px]">
          You also may be interested in
        </h2>
        <CampaignGrid>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
        </CampaignGrid>
      </Fragment>
    </LayoutDashboard>
  );
};

export default CampaignView;
