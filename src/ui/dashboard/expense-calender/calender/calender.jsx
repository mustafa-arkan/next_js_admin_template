"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calender.module.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={styles["calender_container"]}>
      <div className={styles["calender_section"]}>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

export default MyCalendar;
