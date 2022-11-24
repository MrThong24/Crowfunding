import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CampaignView from "./modules/campaign/CampaignView";

import Modal from "react-modal";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const Campaign = lazy(() => import("./pages/CampaignPage"));
const CampaignStart = lazy(() => import("./pages/StartCampaignPage"));

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.customStyles = {};
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="campaign" element={<Campaign></Campaign>}></Route>
        <Route path="sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route
          path="campaignStart"
          element={<CampaignStart></CampaignStart>}
        ></Route>
        <Route
          path="campaignView"
          element={<CampaignView></CampaignView>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
