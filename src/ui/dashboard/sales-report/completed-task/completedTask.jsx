// import React from "react";
// import { Line } from "react-chartjs-2";
// import styles from "../salesReport.module.css";

// const CompletedTasks = () => {
//   const lineChartDataTasks = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Completed Tasks",
//         data: [20, 25, 23, 30, 28, 35, 32],
//         fill: false,
//         backgroundColor: "#36A2EB",
//         borderColor: "red",
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
//     <div className={styles["website_task"]}>
//       <div className={styles["completed_task_chart"]}>
//         <Line data={lineChartDataTasks} options={lineChartOptions} />
//       </div>
//       <h3>Completed tasks</h3>
//       <h4>120 Completed tasks</h4>
//       <p>Updated 7 days ago</p>
//     </div>
//   );
// };

// export default CompletedTasks;
//Raw
"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import styles from "./completedTask.module.css";

const CompletedTasks = () => {
  const [lineChartDataTasks, setLineChartDataTasks] = useState(null);

  useEffect(() => {
    axios
      .get("/data/completedTask.json")
      .then((response) => {
        const data = response.data.completedTasks;
        const labels = data.map((item) => item.day);
        const tasksData = data.map((item) => item.tasks);
        const backgroundColors = data.map((item) => item.backgroundColor);
        const borderColors = data.map((item) => item.borderColor);

        setLineChartDataTasks({
          labels: labels,
          datasets: [
            {
              label: "Completed Tasks",
              data: tasksData,
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
    <div className={styles["website_task"]}>
      {lineChartDataTasks ? (
        <div className={styles["completed_task_chart"]}>
          <Line data={lineChartDataTasks} options={lineChartOptions} />
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
      <h3>Completed tasks</h3>
      <h4>120 Completed tasks</h4>
      <p>Updated 7 days ago</p>
    </div>
  );
};

export default CompletedTasks;
