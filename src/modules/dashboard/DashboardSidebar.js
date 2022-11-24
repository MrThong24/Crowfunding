import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconLightDark,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";
import IconDashboard from "../../components/icons/IconDashboard";

const LinkNav = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconLightDark></IconLightDark>,
    title: "Light/Dark",
    url: "/light",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const classIcon =
    " p-[11px] rounded-[10px] flex gap-x-[20px] text-icon-color sm:bg-primary sm:rounded-[0px] last:mt-[50px]";
  return (
    <div
      className="bg-white border flex flex-col gap-y-[30px] justify-center shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-[40px] rounded-[20px] 
    sm:px-[0px] sm:w-[327px] sm:gap-y-[15px] sm:py-[30px] "
    >
      {LinkNav.map((item) => (
        <NavLink
          to={item?.url}
          key={item?.title}
          className={({ isActive }) =>
            isActive
              ? `${classIcon} text-[#1DC071] bg-[#D2F2E3]`
              : `${classIcon}`
          }
        >
          <span>{item.icon}</span>
          <span className="text-[14px] text-text3 font-normal -sm:hidden">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
