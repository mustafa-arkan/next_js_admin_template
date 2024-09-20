// import React from "react";
// import { LinearProgress } from "@mui/material";
// import styles from "./topProduct.module.css";

// const TopProduct = () => {
//   const products = [
//     { name: "Soap", popularity: 45 },
//     { name: "Oil", popularity: 18 },
//     { name: "Cream", popularity: 55 },
//     { name: "Talcom", popularity: 65 },
//   ];

//   return (
//     <div className={styles["top_products_container"]}>
//       <div className={styles["top_products_header"]}>
//         <h3>Top Products</h3>
//       </div>
//       <table className={styles["top_products_table"]}>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Popularity</th>
//             <th>Sales</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{`0${index + 1}`}</td>
//               <td>{product.name}</td>
//               <td>
//                 <LinearProgress
//                   variant="determinate"
//                   value={product.popularity}
//                 />
//               </td>
//               <td>{`${product.popularity}%`}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TopProduct;
//updated
"use client";
import React, { useState } from "react";
import {
  LinearProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "./topProduct.module.css";

const TopProduct = () => {
  const [selectedDayTopProduct, setSelectedDayTopProduct] = useState("");

  const handleDayeChangeProd = (event) => {
    setSelectedDayTopProduct(event.target.value);
    console.log("handleTimeRangeChange", event.target.value);
  };

  const products = [
    { name: "Soap", popularity: 45 },
    { name: "Oil", popularity: 18 },
    { name: "Cream", popularity: 55 },
    { name: "Talcom", popularity: 65 },
  ];

  return (
    <div className={styles["top_products_container"]}>
      <div className={styles["top_products_header"]}>
        <h3>Top Products</h3>
        <Select
          native
          value={selectedDayTopProduct}
          onChange={handleDayeChangeProd}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            PaperProps: {
              style: {
                marginTop: "-8px",
                maxHeight: "200px",
              },
            },
          }}
          sx={{
            marginLeft: "16px",
            minWidth: "120px",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            height: "40px",
            fontSize: "0.875rem",
            lineHeight: "1",
            "&:focus": {
              borderColor: "#3f51b5",
              boxShadow: "0 0 0 0.2rem rgba(63,81,181,.25)",
            },
          }}
        >
          <option value="">Select Day</option>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="this_week">This Week</option>
          <option value="last_week">Last Week</option>
          <option value="this_month">This Month</option>
          <option value="last_month">Last Month</option>
          <option value="last_6_months">Last 6 Month</option>
          <option value="this_year">This Year</option>
        </Select>
      </div>
      <table className={styles["top_products_table"]}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{`0${index + 1}`}</td>
              <td>{product.name}</td>
              <td>
                <LinearProgress
                  variant="determinate"
                  value={product.popularity}
                />
              </td>
              <td>
                <div className={styles["top_sales_value"]}>
                  {`${product.popularity}%`}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProduct;
