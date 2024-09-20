"use client";

import React from "react";
import styles from "./socialPlatformStat.module.css";
import Image from "next/image";

const SocialPlatformStat = () => {
  const socialMediaData = [
    {
      src: "/images/icon_facebook.png",
      followers: "32,000",
      platform: "Facebook",
    },
    {
      src: "/images/icon_Instagram.png",
      followers: "52,000",
      platform: "Instagram",
    },
    {
      src: "/images/icon_Linkedin.png",
      followers: "2,000",
      platform: "LinkedIn",
    },
    {
      src: "/images/icon_Twiter.png",
      followers: "32,000",
      platform: "Twitter",
    },
  ];
  return (
    <div className={styles["social_container"]}>
      <h2>Traffic by Sites</h2>
      <div className={styles["social_platform_wrapper"]}>
        {socialMediaData.map((social, index) => (
          <div key={index} className={styles["social_platform"]}>
            <Image
              src={social.src}
              width={50}
              height={50}
              style={{
                objectFit: "contain",
                borderRadius: "50%",
              }}
              alt={social.platform}
            />
            <h3>{social.followers}</h3>
            <p>{social.platform}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialPlatformStat;
