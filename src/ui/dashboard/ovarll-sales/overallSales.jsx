// import React from "react";
// import styles from "./overallSales.module.css";

// const OverallSales = () => {
//   return (
//     <div className={styles["overall_sales_container"]}>
//       <h3>Sales Value</h3>
//       <p className={styles["current_income"]}>Current Month Income: $4500</p>
//       <p className={styles["compare_income"]}>10% from previous month</p>
//       <div className={styles["sales_value_container"]}></div>
//     </div>
//   );
// };

// export default OverallSales;
//base code
import React from "react";
import dynamic from "next/dynamic";
import styles from "./overallSales.module.css";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OverallSales = () => {
  const chartData = [
    { month: "January", income: 3000, cashflow: 20000, revenue: 10000 },
    { month: "February", income: 4000, cashflow: 2900, revenue: 20000 },
    { month: "March", income: 3500, cashflow: 3200, revenue: 15000 },
    { month: "April", income: 5000, cashflow: 3600, revenue: 25000 },
    { month: "May", income: 4900, cashflow: 3000, revenue: 18000 },
    { month: "June", income: 6000, cashflow: 1000, revenue: 35000 },
    { month: "July", income: 7000, cashflow: 5000, revenue: 20000 },
  ];

  const options = {
    chart: {
      id: "clean-mixed-chart",
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 2, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },
    xaxis: {
      categories: chartData.map((data) => data.month.slice(0, 3)),
      title: {
        text: "Months",
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `${Math.round(value)}`;
        },
        style: {
          fontSize: "12px",
        },
      },
      title: {
        text: "Amount ($)",
      },
      min: 0,
      max: 9000,
      tickAmount: 9,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Income",
      type: "bar", // Display Income as bars
      data: chartData.map((data) => data.income),
    },
    {
      name: "Cashflow",
      type: "line", // Display Cashflow as lines
      data: chartData.map((data) => data.cashflow),
    },
    {
      name: "Revenue",
      type: "line", // Display Revenue as lines
      data: chartData.map((data) => data.revenue),
    },
  ];

  return (
    <div className={styles["overall_sales_container"]}>
      <h3>Sales Value</h3>
      <p className={styles["current_income"]}>Current Month Income: $4500</p>
      <p className={styles["compare_income"]}>10% from previous month</p>
      <div className={styles["sales_value_container"]}>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};

export default OverallSales;
