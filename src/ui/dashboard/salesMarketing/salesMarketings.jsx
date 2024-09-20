"use client";
import { useState, useEffect } from "react";
import styles from "./salesMarketing.module.css";
import { Line } from "react-chartjs-2";

const SalesMarketing = () => {
  const [salesData, setSalesData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Growth",
        data: [5000, 10000, 7000, 14000, 11000, 16000],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  });

  useEffect(() => {
    const fetchData = () => {
      const updatedData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales Growth",
            data: [5000, 12000, 9000, 15000, 14000, 20000],
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      };
      setSalesData(updatedData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.salesMarketing}>
      <div className={styles.card}>
        <h3>Total Sales</h3>
        <p>$120,000</p>
      </div>
      <div className={styles.card}>
        <h3>Marketing Campaigns</h3>
        <p>5 Active Campaigns</p>
      </div>
      <div className={styles.chartCard}>
        <h3>Sales Growth</h3>
        <Line data={salesData} />
      </div>
    </div>
  );
};

export default SalesMarketing;
