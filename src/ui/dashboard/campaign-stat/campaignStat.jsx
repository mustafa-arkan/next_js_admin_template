"use client";

import React from "react";
import styles from "./campaignState.module.css";
import CampaignMonthly from "./campaign-monthly/campaignMonthly";
import BestSellProd from "./best-selling-product/bestSellProd";

const CampaignStat = () => {
  return (
    <div className={styles["campaign_state_container"]}>
      <CampaignMonthly />
      <BestSellProd />
    </div>
  );
};

export default CampaignStat;
