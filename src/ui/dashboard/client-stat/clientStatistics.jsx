// import React from "react";
// import styles from "./clientStatistics.module.css";

// const ClientStatistics = () => {
//   return <div className={styles["client_table_container"]}></div>;
// };

// export default ClientStatistics;
"use client";
import React from "react";
import MUIDataTable from "mui-datatables";
import styles from "./clientStatistics.module.css";
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

const ClientStatistics = () => {
  const columns = [
    {
      name: "client",
      label: "Client",
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
      name: "amount",
      label: "Amount",
    },

    {
      name: "date",
      label: "Date",
    },
  ];

  const data = [
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 300000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "Thomas",
      amount: 150000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 100000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "Thomas",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "Thomas",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "Thomas",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "Thomas",
      amount: 50000,

      date: "10-03-2020",
    },
    {
      client: "/images/men.jpeg",
      name: "John Doe",
      amount: 50000,

      date: "10-03-2020",
    },
  ];

  const options = {
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [10],
    selectableRows: "none",
    responsive: "standard",
  };

  return (
    <div className={styles["client_table_container"]}>
      <ThemeProvider theme={theme}>
        <div className={styles["client_table_data"]}>
          <MUIDataTable
            data={data}
            columns={columns}
            options={options}
            className={styles["client_main_table"]}
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ClientStatistics;
