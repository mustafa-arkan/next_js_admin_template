"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./taskPerformance.module.css";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TaskPerformance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>Loading...</div>;

  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: "60%",
          background: "transparent",
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.1,
          },
        },
        dataLabels: {
          name: {
            fontSize: "18px",
            color: "#333",
            offsetY: -10,
          },
          value: {
            fontSize: "16px",
            color: "#111",
            offsetY: 5,
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: "Total",
            formatter: () => "100%",
          },
        },
      },
    },
    series: [76, 32, 13],
    labels: ["Completed", "Behind", "In Progress"],
    legend: {
      show: true,
      position: "left", // Move the legend to the right side
      floating: true,
      fontSize: "14px",

      labels: {
        colors: "#000",
      },
      markers: {
        radius: 10, // Circle markers
        width: 8,
        height: 8,
      },
      itemMargin: {
        vertical: 5,
      },
    },
    colors: ["#00E396", "#FF4560", "#FEB019"],
  };

  return (
    <div className={styles["task_performance_circle_chart"]}>
      {typeof window !== "undefined" && (
        <ApexCharts
          options={options}
          series={options.series}
          type="radialBar"
          height={400}
        />
      )}
    </div>
  );
};

export default TaskPerformance;
