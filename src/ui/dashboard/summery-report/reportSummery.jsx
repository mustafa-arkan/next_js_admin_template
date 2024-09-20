"use client";

import React from "react";
import styles from "./reportSummery.module.css";
import Image from "next/image";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const reportData = [
  {
    title: "Income",
    value: "32.2K",
    percentage: "10%",
    trend: "up",
    imageSrc: "/images/Total.png",
  },
  {
    title: "Profit",
    value: "42.2K",
    percentage: "2.5%",
    trend: "up",
    imageSrc: "/images/Total.png",
  },
  {
    title: "Revenue",
    value: "52.2K",
    percentage: "6%",
    trend: "up",
    imageSrc: "/images/Total.png",
  },
  {
    title: "Visitors",
    value: "2.2K",
    percentage: "3%",
    trend: "down",
    imageSrc: "/images/Total.png",
  },
];

const ReportSummery = () => {
  return (
    <div className={styles["dashboard_summery_container"]}>
      <div className={styles["empty_section"]}>
        <h2>Hey, Welcome Back!</h2>
      </div>
      <div className={styles["report_cards"]}>
        {reportData.map((data, index) => (
          <div key={index} className={styles["report_card"]}>
            <div className={styles["report_title"]}>
              <p>{data.title}</p>
              <div className={styles["title_icon_container"]}>
                <Image
                  src={data.imageSrc}
                  width={25}
                  height={25}
                  style={{
                    objectFit: "fill",
                  }}
                  alt={data.title}
                />
              </div>
            </div>
            <div className={styles["report_value"]}>
              <h3>{data.value}</h3>
              <div className={styles["value_parameter"]}>
                {data.trend === "up" ? (
                  <TrendingUpIcon />
                ) : (
                  <TrendingDownIcon />
                )}
                <p> {data.percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSummery;
