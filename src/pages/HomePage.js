import React from "react";
import { ORG_CHART } from "../mock-objects/ORG_CHART";
import OrgChart from "./OrgChart/OrgChart";

const HomePage = () => {
  return (
    <div>
      <OrgChart obj={ORG_CHART}></OrgChart>
    </div>
  );
};

export default HomePage;
