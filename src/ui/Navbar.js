"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const profileRef = useRef(null);
  const userImageRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideClose = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !userImageRef.current.contains(event.target)
      ) {
        setShowUserProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideClose);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideClose);
    };
  }, []);

  const toggleUser = () => {
    setShowUserProfile(!showUserProfile);
  };
  // for list
  const [showListLink, setShowListLink] = useState(false);

  const toggleListLink = () => {
    setShowListLink(!showListLink);
  };

  return (
    <div className={styles["navbar_container"]}>
      <div className={styles["navbar_content"]}>
        <p>Harry Porter</p>

        <div
          ref={userImageRef}
          className={styles["user_image"]}
          style={{
            objectFit: "contain",
            borderRadius: "50%",
          }}
          onClick={toggleUser}
        >
          <Image
            src="/images/user.png"
            width={50}
            height={50}
            style={{
              objectFit: "contain",
              borderRadius: "50%",
            }}
            alt="user"
          />
        </div>

        {showUserProfile && (
          <div ref={profileRef} className={styles["user_profile"]}>
            <div className={styles["user_profile_image"]}>
              <Image
                src="/images/user.png"
                width={50}
                height={50}
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
                alt="user"
              />
            </div>
            <h3>Admin</h3>
            <p className={styles["user_email"]}>arkancse@gmail.com</p>
            <div className={styles["profile_menu"]}>
              <ul>
                <Link href="/dashboard" className={styles["profile_menu_link"]}>
                  <Image
                    src="/images/Dashboard.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>Dashboard</p>
                </Link>
              </ul>
              {/* <ul>
                                <Link
                                    href="/categories"
                                    className={styles["profile_menu_link"]}
                                >
                                    <Image
                                        src="/images/Categories.png"
                                        width={20}
                                        height={20}
                                        alt=""
                                    />
                                    <p>Categories</p>
                                </Link>
                            </ul> */}
              {/* <ul
                                className={styles["profile_menu_list_link"]}
                                onClick={toggleListLink}
                            >
                                <div>
                                    <Image
                                        src="/images/List.png"
                                        width={20}
                                        height={20}
                                        alt=""
                                    />
                                    <p>Individual Applicants</p>
                                </div>
                                {showListLink && (
                                    <div>
                                        <li>All</li>
                                        <li>Unprocessed</li>
                                        <li>Send</li>
                                        <li>Archived</li>
                                    </div>
                                )}
                            </ul> */}
              <ul>
                <Link href="/settings" className={styles["profile_menu_link"]}>
                  <Image
                    src="/images/Settings.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>Settings</p>
                </Link>
              </ul>
              <ul>
                <div className={styles["profile_menu_link"]}>
                  <Image
                    src="/images/logout.png"
                    width={20}
                    height={25}
                    alt="icon"
                  />
                  <p>Logout</p>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
