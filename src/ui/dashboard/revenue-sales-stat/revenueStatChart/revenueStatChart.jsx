// import React from "react";
"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./revenueStatChart.module.css";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueStatChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
      height: 350,
      stacked: false,
    },
    stroke: {
      width: [0, 2, 3],
      curve: "smooth",
      dashArray: [0, 0, 8],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        enabled: true,
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.35,
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100],
      },
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    xaxis: {
      type: "category",
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: {
        text: "Values",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val} units`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Earnings",
      type: "column",
      data: [70, 60, 50, 80, 90, 70, 60, 100, 90, 80, 70, 60],
    },
    {
      name: "Orders",
      type: "area",
      data: [30, 40, 50, 60, 70, 80, 40, 50, 60, 70, 80, 90],
    },
    {
      name: "Refunds",
      type: "line",
      data: [10, 20, 30, 20, 10, 30, 20, 30, 20, 10, 30, 20],
    },
  ]);

  return (
    <div className={styles["revenue_stat_chart_container"]}>
      <div className={styles["revenue_stat_chart_header"]}>
        <h3>Revenue</h3>
        <div className={styles["revenue_stat_timing"]}>
          <button>All</button>
          <button>1M</button>
          <button>6M</button>
          <button>1Y</button>
        </div>
      </div>
      <div className={styles["revenue_stat_summery"]}>
        <div className={styles["revenue_stat_summery_value"]}>
          <h3>7329</h3>
          <p>Orders</p>
        </div>
        <div className={styles["revenue_stat_summery_value"]}>
          <h3>7329</h3>
          <p>Orders</p>
        </div>
        <div className={styles["revenue_stat_summery_value"]}>
          <h3>7329</h3>
          <p>Orders</p>
        </div>
        <div className={styles["revenue_stat_summery_value"]}>
          <h3>7329</h3>
          <p>Orders</p>
        </div>
      </div>
      <div className={styles["revenue_stat_chart"]}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={320}
        />
      </div>
    </div>
  );
};

export default RevenueStatChart;
