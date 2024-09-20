"use client";

import React from "react";
import MUIDataTable from "mui-datatables";
import styles from "./bestSellProd.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
          fontSize: "12px",
          padding: "5px 0px",
        },
      },
    },
  },
});

const BestSellProd = () => {
  const columns = [
    {
      name: "product",
      label: "Product",
      options: {
        customBodyRender: (value) => (
          <img src={value} alt="Product Img" width="40" />
        ),
      },
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "userCount",
      label: "Revenue",
    },
    {
      name: "salesPercentage",
      label: "Percentage",
    },
  ];

  const data = [
    {
      product: "/images/oil.jpeg",
      name: "Beauty Soap",
      userCount: 300000,
      salesPercentage: "30%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Fresh Oil",
      userCount: 150000,
      salesPercentage: "20%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Garnier",
      userCount: 100000,
      salesPercentage: "12%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Hair Oil",
      userCount: 50000,
      salesPercentage: "5%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Cream",
      userCount: 50000,
      salesPercentage: "2%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Beauty Soap",
      userCount: 50000,
      salesPercentage: "3%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "5%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "3%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "2%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "1.5%",
    },
    {
      product: "/images/oil.jpeg",
      name: "Australia",
      userCount: 50000,
      salesPercentage: "1%",
    },
  ];

  const options = {
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: true,
    rowsPerPage: 6,
    rowsPerPageOptions: [6],
    selectableRows: "none",
    responsive: "standard",
  };

  return (
    <div className={styles["best_sell_container"]}>
      <h3>Top Selling Products</h3>
      <ThemeProvider theme={theme}>
        <div className={styles["best_sales_data"]}>
          <MUIDataTable
            data={data}
            columns={columns}
            options={options}
            className={styles["table_best_sell"]}
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default BestSellProd;
