"use client";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import SideNav from "@/ui/dashboard/sidenav";
import SidenavMobile from "@/ui/dashboard/sidenavMobile";
import styles from "./layout.module.css";
import React, { useState } from "react";
import Image from "next/image";
import ReportSummery from "@/ui/dashboard/summery-report/reportSummery";
import CountryState from "@/ui/dashboard/country-statistics/countryState";
import RevenueSalesStat from "@/ui/dashboard/revenue-sales-stat/revenueSalesStat";
import SalesReport from "@/ui/dashboard/sales-report/salesReport";
import TaskSocial from "@/ui/dashboard/task_social/taskSocial";

import CampaignStat from "@/ui/dashboard/campaign-stat/campaignStat";
import TopProduct from "@/ui/dashboard/top-product/topProduct";
import SalesMarketing from "@/ui/dashboard/salesMarketing/salesMarketings";
import MarketingDashboard from "@/ui/dashboard/marketing-dashboard/marketingDashboard";
import ClientStatistics from "@/ui/dashboard/client-stat/clientStatistics";
import OverallSales from "@/ui/dashboard/ovarll-sales/overallSales";

export default function DashboardLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    console.log("clickmobile");
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className={styles["layout_container"]}>
      <div
        className={`${styles["sidebar"]} ${
          isSidebarCollapsed ? styles["collapsed_sidebar"] : ""
        }`}
      >
        <SideNav toggleSidebar={toggleSidebar} />
      </div>

      <div
        className={`${styles["main_section"]} ${
          isSidebarCollapsed ? styles["expanded_main_section"] : ""
        }`}
      >
        <div
          className={`${styles["navbar_section"]} ${
            isSidebarCollapsed ? styles["collapsed_sidebar"] : ""
          }`}
        >
          <div className={styles["navbar_toggle"]}>
            <Image
              src="/images/Menubar.png"
              width={28}
              height={20}
              onClick={toggleSidebar}
              className={styles["navbar_toggle_image"]}
              alt="ham"
            />
          </div>
          <div
            className={styles["sidebar_mobile"]}
            onClick={toggleMobileSidebar}
          >
            <Image src="/images/Menubar.png" width={28} height={20} alt="ham" />
          </div>

          <Navbar />
        </div>

        <div className={styles["table_dashboard_container"]}>
          <ReportSummery />
          <RevenueSalesStat />
          <CountryState />
          <SalesReport />
          <TaskSocial />

          <CampaignStat />
          <TopProduct />
          <SalesMarketing />
          <MarketingDashboard />
          <ClientStatistics />
          <OverallSales />
          {children}
          <Footer />
        </div>
      </div>
      <div
        className={`${styles["sidebar_mobile_container"]} ${
          isMobileSidebarOpen ? styles["open_mobile_sidebar"] : ""
        }`}
      >
        <SidenavMobile closeMobileSidebar={closeMobileSidebar} />
      </div>
    </div>
  );
}
