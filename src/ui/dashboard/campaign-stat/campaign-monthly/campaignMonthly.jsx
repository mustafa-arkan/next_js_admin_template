// import React from "react";
// import styles from "./campaignMonthly.module.css";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LinkIcon from "@mui/icons-material/Link";
// import AdsClickIcon from "@mui/icons-material/AdsClick";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

// const CampaignMonthly = () => {
//   return (
//     <div className={styles["campaign_montly_container"]}>
//       <h3>Monthly Campaign State</h3>
//       <div className={styles["montly_visitors_platform_list"]}>
//         <div className={styles["montly_visitors_platform"]}>
//           <MailOutlineIcon className={styles["platform_icon"]} />
//           <h4>Emails</h4>
//         </div>
//         <div className={styles["montly_visitors_platform_value"]}>
//           <h5>12,346</h5>
//           <p>0.3% </p>
//         </div>
//       </div>
//       <div className={styles["montly_visitors_platform_list"]}>
//         <div className={styles["montly_visitors_platform"]}>
//           <LinkIcon className={styles["platform_icon"]} />
//           <h4>Opened</h4>
//         </div>
//         <div className={styles["montly_visitors_platform_value"]}>
//           <h5>2,346</h5>
//           <p>0.7% </p>
//         </div>
//       </div>
//       <div className={styles["montly_visitors_platform_list"]}>
//         <div className={styles["montly_visitors_platform"]}>
//           <AdsClickIcon className={styles["platform_icon"]} />
//           <h4>Clicked</h4>
//         </div>
//         <div className={styles["montly_visitors_platform_value"]}>
//           <h5>22,346</h5>
//           <p>0.9% </p>
//         </div>
//       </div>
//       <div className={styles["montly_visitors_platform_list"]}>
//         <div className={styles["montly_visitors_platform"]}>
//           <SubscriptionsIcon className={styles["platform_icon"]} />
//           <h4>Subscribe</h4>
//         </div>
//         <div className={styles["montly_visitors_platform_value"]}>
//           <h5>32,346</h5>
//           <p>2.9% </p>
//         </div>
//       </div>
//       <div className={styles["montly_visitors_platform_list"]}>
//         <div className={styles["montly_visitors_platform"]}>
//           <UnsubscribeIcon className={styles["platform_icon"]} />
//           <h4>Unsubscribe</h4>
//         </div>
//         <div className={styles["montly_visitors_platform_value"]}>
//           <h5>2,346</h5>
//           <p>.9% </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignMonthly;
//updated
"use client";
import React from "react";
import styles from "./campaignMonthly.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkIcon from "@mui/icons-material/Link";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

const campaignData = [
  {
    icon: <MailOutlineIcon />,
    label: "Emails",
    value: "12,346",
    percentage: "0.3%",
  },
  { icon: <LinkIcon />, label: "Opened", value: "2,346", percentage: "0.7%" },
  {
    icon: <AdsClickIcon />,
    label: "Clicked",
    value: "22,346",
    percentage: "0.9%",
  },
  {
    icon: <SubscriptionsIcon />,
    label: "Subscribe",
    value: "32,346",
    percentage: "2.9%",
  },
  {
    icon: <UnsubscribeIcon />,
    label: "Unsubscribe",
    value: "2,346",
    percentage: ".9%",
  },
];

const CampaignMonthly = () => {
  return (
    <div className={styles["campaign_montly_container"]}>
      <h3>Monthly Campaign State</h3>
      {campaignData.map((item, index) => (
        <div key={index} className={styles["montly_visitors_platform_list"]}>
          <div className={styles["montly_visitors_platform"]}>
            {item.icon && (
              <div className={styles["platform_icon"]}>{item.icon}</div>
            )}
            <h4>{item.label}</h4>
          </div>
          <div className={styles["montly_visitors_platform_value"]}>
            <h5>{item.value}</h5>
            <p>{item.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignMonthly;
