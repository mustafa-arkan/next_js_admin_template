"use client";

import React from "react";
import styles from "./marketingDashboard.module.css";

const MarketingDashboard = () => {
  const campaigns = [
    {
      name: "Facebook Ads",
      reach: "500,000",
      impressions: "450,000",
      clicks: "12,000",
      conversionRate: "3.5%",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Google Ads",
      reach: "620,000",
      impressions: "580,000",
      clicks: "19,000",
      conversionRate: "4.1%",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "LinkedIn Ads",
      reach: "300,000",
      impressions: "250,000",
      clicks: "8,500",
      conversionRate: "3.1%",
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.cardsContainer}>
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ background: campaign.bgGradient }}
          >
            <h3 className={styles.campaignName}>{campaign.name}</h3>
            <div className={styles.stats}>
              <p className={styles.stat}>
                <span className={styles.label}>Reach: </span>
                {campaign.reach}
              </p>
              <p className={styles.stat}>
                <span className={styles.label}>Impressions: </span>
                {campaign.impressions}
              </p>
              <p className={styles.stat}>
                <span className={styles.label}>Clicks: </span>
                {campaign.clicks}
              </p>
              <p className={styles.stat}>
                <span className={styles.label}>Conversion Rate: </span>
                {campaign.conversionRate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingDashboard;
