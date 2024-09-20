"use client";
import React from "react";
import MUIDataTable from "mui-datatables";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./countryState.module.css";

Chart.register(ArcElement, Tooltip, Legend);

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

const CountryState = () => {
  const columns = [
    {
      name: "flag",
      label: "Flag",
      options: {
        customBodyRender: (value) => (
          <img src={value} alt="Country Flag" width="40" />
        ),
      },
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "userCount",
      label: "Total User",
    },
    {
      name: "salesPercentage",
      label: "Sales",
    },
  ];

  const data = [
    {
      flag: "/images/flag_usa.jpeg",
      name: "United States",
      userCount: 300000,
      salesPercentage: "40%",
    },
    {
      flag: "/images/flag_usa.jpeg",
      name: "United Kingdom",
      userCount: 150000,
      salesPercentage: "20%",
    },
    {
      flag: "/images/flag_usa.jpeg",
      name: "Canada",
      userCount: 100000,
      salesPercentage: "15%",
    },
    {
      flag: "/images/flag_usa.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "10%",
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
  };

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => parseFloat(item.salesPercentage)),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles["country_statistics_container"]}>
        <h1>Global Sales by Top Locations</h1>
        <div className={styles["country_sales_data_map"]}>
          <div className={styles["country_sales_data"]}>
            <MUIDataTable
              data={data}
              columns={columns}
              options={options}
              className={styles["main_table"]}
            />
          </div>
          <div className={styles["country_sales_state"]}>
            <div className={styles["country_sales_chart"]}>
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CountryState;
