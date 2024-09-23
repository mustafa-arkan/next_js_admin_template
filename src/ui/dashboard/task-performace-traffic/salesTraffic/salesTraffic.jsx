import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import styles from "./salesTraffic.module.css";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SalesTraffic = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Organic Traffic",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
      {
        name: "Paid Traffic",
        data: [20, 30, 45, 35, 49, 50, 60, 70],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 380,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
      yaxis: {
        title: {
          text: "Traffic",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
  });

  return (
    <div className={styles["sales_traffic_visualization"]}>
      <ChartComponent
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={380}
      />
    </div>
  );
};

export default SalesTraffic;
