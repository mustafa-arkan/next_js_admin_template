// import React from "react";
// import { Bar } from "react-chartjs-2";
// import styles from "../salesReport.module.css";

// const WebsiteVisitor = () => {
//   const barChartData = {
//     labels: ["April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Website Views",
//         data: [5000, 8000, 10000, 12000],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   };

//   const barChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className={styles["website_visitor"]}>
//       <div className={styles["website_visitor_chart"]}>
//         <Bar data={barChartData} options={barChartOptions} />
//       </div>
//       <h3>Website Views</h3>
//       <h4>12,000 visitor views</h4>
//       <p>Updated 1 Month ago</p>
//     </div>
//   );
// };

// export default WebsiteVisitor;
//Raw code
"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import styles from "./websiteVisitors.module.css";

const WebsiteVisitor = () => {
  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    axios
      .get("/data/sitevisitors.json")
      .then((response) => {
        const data = response.data.websiteViews;
        const labels = data.map((item) => item.month);
        const values = data.map((item) => item.data);
        const colors = data.map((item) => item.backgroundColor);

        setBarChartData({
          labels: labels,
          datasets: [
            {
              label: "Website Views",
              data: values,
              backgroundColor: colors,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles["website_visitor"]}>
      {barChartData ? (
        <div className={styles["website_visitor_chart"]}>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
      <h3>Website Views</h3>
      <h4>12,000 visitor views</h4>
      <p>Updated 1 Month ago</p>
    </div>
  );
};

export default WebsiteVisitor;
