"use client";

import React from "react";
import styles from "./salesAnalysisCards.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/Person";

const SalesAnalysisCards = () => {
  return (
    <div className={styles["sales_analysis_cards_section"]}>
      <div className={styles["sales_analysis_card"]}>
        <div className={styles["sales_analysis_data"]}>
          <h4>Total Earnings</h4>
          <h2>$7234</h2>
          <div className={styles["sales_analysis_data_compare"]}>
            <TrendingUpIcon />

            <p className={styles["sales_data_percentage"]}>1.37%</p>
            <p>than last week</p>
          </div>
        </div>
        <div className={styles["sales_analysis_icon"]}>
          <AttachMoneyIcon />
        </div>
      </div>
      {/*  */}
      <div className={styles["sales_analysis_card"]}>
        <div className={styles["sales_analysis_data"]}>
          <h4>Total Earnings</h4>
          <h2>$7234</h2>
          <div className={styles["sales_analysis_data_compare"]}>
            <TrendingUpIcon />

            <p className={styles["sales_data_percentage"]}>1.37%</p>
            <p>than last week</p>
          </div>
        </div>
        <div className={styles["sales_analysis_icon"]}>
          <AttachMoneyIcon />
        </div>
      </div>
      {/*  */}
      <div className={styles["sales_analysis_card"]}>
        <div className={styles["sales_analysis_data"]}>
          <h4>Total Earnings</h4>
          <h2>$7234</h2>
          <div className={styles["sales_analysis_data_compare"]}>
            <TrendingUpIcon />

            <p className={styles["sales_data_percentage"]}>1.37%</p>
            <p>than last week</p>
          </div>
        </div>
        <div className={styles["sales_analysis_icon"]}>
          <AttachMoneyIcon />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SalesAnalysisCards;
