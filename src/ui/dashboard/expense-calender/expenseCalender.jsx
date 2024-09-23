"use client";
import React from "react";
import styles from "./expenseCalender.module.css";
import Calender from "./calender/calender";
// import RevenueProfit from "./revenue-profit/revenueProfit";

const ExpenseCalender = () => {
  return (
    <div className={styles["expense_calender_container"]}>
      {/* <RevenueProfit /> */}
      <Calender />
    </div>
  );
};

export default ExpenseCalender;
