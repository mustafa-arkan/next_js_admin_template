// import React from "react";
// import { Line } from "react-chartjs-2";
// import styles from "../salesReport.module.css";

// const DailySales = () => {
//   const lineChartDataSales = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: [1500, 2000, 1800, 2200, 2000, 2500, 2300],
//         fill: false,
//         backgroundColor: "#FF6384",
//         borderColor: "#FF6384",
//         tension: 0.1,
//       },
//     ],
//   };

//   const lineChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className={styles["website_sales"]}>
//       <div className={styles["daily_sales_chart"]}>
//         <Line data={lineChartDataSales} options={lineChartOptions} />
//       </div>
//       <h3>Daily Sales</h3>
//       <h4>12,000 Sales</h4>
//       <p>Updated 7 days ago</p>
//     </div>
//   );
// };

// export default DailySales;
//
"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import styles from "./dailySales.module.css";

const DailySales = () => {
  const [lineChartDataSales, setLineChartDataSales] = useState(null);

  useEffect(() => {
    axios
      .get("/data/dailySales.json")
      .then((response) => {
        const data = response.data.dailySales;
        const labels = data.map((item) => item.day);
        const salesData = data.map((item) => item.sales);
        const backgroundColors = data.map((item) => item.backgroundColor);
        const borderColors = data.map((item) => item.borderColor);

        setLineChartDataSales({
          labels: labels,
          datasets: [
            {
              label: "Daily Sales",
              data: salesData,
              fill: false,
              backgroundColor: backgroundColors[0],
              borderColor: borderColors[0],
              tension: 0.1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles["website_sales"]}>
      {lineChartDataSales ? (
        <div className={styles["daily_sales_chart"]}>
          <Line data={lineChartDataSales} options={lineChartOptions} />
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
      <h3>Daily Sales</h3>
      <h4>12,000 Sales</h4>
      <p>Updated 7 days ago</p>
    </div>
  );
};

export default DailySales;
