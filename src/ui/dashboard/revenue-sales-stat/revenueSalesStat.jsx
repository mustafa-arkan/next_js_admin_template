"use client";

import React from "react";
import styles from "./revenueSalesStat.module.css";
import RevenueStatChart from "./revenueStatChart/revenueStatChart";
import SalesAnalysisCards from "./salesAnalysisCards/salesAnalysisCards";

const RevenueSalesStat = () => {
  return (
    <div className={styles["revenue_sales_container"]}>
      <div className={styles["sales_analysis_cards"]}>
        <SalesAnalysisCards />
      </div>
      <div className={styles["revenue_stat_chart"]}>
        <RevenueStatChart />
      </div>
    </div>
  );
};

export default RevenueSalesStat;
