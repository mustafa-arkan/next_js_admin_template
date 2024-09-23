"use client";

import React from "react";
import styles from "./performanceTraffic.module.css";
import SalesTraffic from "./salesTraffic/salesTraffic";
import TaskPerformance from "./taskPerformance/taskPerformance";

const TaskPerformanceTraffic = () => {
  return (
    <div className={styles["performance_traffic_container"]}>
      <div className={styles["task_performance"]}>
        <TaskPerformance />
      </div>
      <div className={styles["sales_traffic"]}>
        <SalesTraffic />
      </div>
    </div>
  );
};

export default TaskPerformanceTraffic;
