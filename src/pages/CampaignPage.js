import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "../components/button";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex justify-between items-center bg-white px-[40px] py-[30px] mb-[40px] rounded-[20px]">
        <div className="flex gap-x-[25px]">
          <div className="flex justify-center items-center w-[54px] h-[54px] rounded-full bg-secondary bg-opacity-40 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-[22px] font-semibold text-text1 mb-[8px]">
              Create Your Campaign
            </h2>
            <p className="text-[14px] text-text3 font-normal mb-[8px]">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link to="./" className="text-[14px] font-normal text-primary">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button
          type="button"
          kind="secondary"
          className="text-secondary bg-opacity-10 font-semibold text-[16px] px-[30px] py-[13px]"
        >
          Create campaign
        </Button>
      </div>
      <Heading number="4">Your Campaign</Heading>
      <CampaignGrid type="secondary">
        {Array(4)
          .fill()
          .map((item) => (
            <CampaignFeature key={v4()}></CampaignFeature>
          ))}
      </CampaignGrid>
      {/* <div className="mt-[40px] text-center"></div> */}
      <Button
        kind="ghost"
        href="/start-campaign"
        className="mx-auto mt-[40px] px-[56px] py-[12px] text-[16px] font-semibold"
      >
        Seem more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-2 h-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Button>
    </LayoutDashboard>
  );
};

export default CampaignPage;
