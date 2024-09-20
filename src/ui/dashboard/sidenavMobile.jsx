"use client";
import React from "react";
import styles from "./sidenavMobile.module.css";
import SideNav from "./sidenav";

const sidenavMobile = ({ closeMobileSidebar }) => {
  const closeSidebar = () => {
    if (closeMobileSidebar) {
      closeMobileSidebar();
    }
  };
  return (
    <div className={styles["sidebar_mobile_container"]}>
      <div className={styles["inner_container"]}>
        <p onClick={closeMobileSidebar} className={styles["sidebar_close"]}>
          &times;
        </p>{" "}
        <SideNav toggleSidebar={closeSidebar} closeSidebar={closeSidebar} />
      </div>
      <div
        className={styles["empty_container"]}
        onClick={closeMobileSidebar}
      ></div>
    </div>
  );
};

export default sidenavMobile;
