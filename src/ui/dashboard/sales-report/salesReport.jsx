"use client";

import React from "react";
import {
  Chart,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import styles from "./salesReport.module.css";
import CompletedTasks from "./completed-task/completedTask";
import DailySales from "./daily-sales/dailySales";
import WebsiteVisitor from "./website-visitors/websiteVisitors";

Chart.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

const SalesReport = () => {
  return (
    <div className={styles["sales_report_container"]}>
      <div className={styles["sales_report_wrapper"]}>
        <WebsiteVisitor />
        <DailySales />
        <CompletedTasks />
      </div>
    </div>
  );
};

export default SalesReport;
