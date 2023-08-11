"use client";

import React from "react";
import styles from "./DashboardNav.module.css";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import notification from "public/Notification.svg";
import profile from "public/profile.svg";
import Image from "next/image";
import homeIcon from "public/Home.svg";

const DashboardNav = ({ name, routepath }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  const openMenu = () => {
    setToggleMenu(true);
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_content_wrap}>
          <div>
            <h1>{name}</h1>
          </div>
          <div className={styles.nav_right}>
            <select className={styles.dropdown}>
              <option>Nanny’s Shop</option>
              <option>Nanny’s Shop</option>
            </select>
            <Image src={notification} alt="notification" />
            <Image src={profile} alt="profile" />
          </div>
        </div>

        <div className={styles.horizontal_line}></div>
        <div className={styles.pageIcon_wrap}>
          <Image src={homeIcon} alt="home icon" /> <span>{routepath}</span>
        </div>
      </div>
      {/* mobile view */}
      <div className={styles.navbarmobileView}>
        <h1>Dashboard</h1>

        {toggleMenu ? (
          <FaTimes onClick={closeMenu} className={styles.icon} />
        ) : (
          <AiOutlineMenu onClick={openMenu} className={styles.icon} />
        )}
        {toggleMenu && (
          <div className={styles.navbarmobile}>
            <div className={styles.nav_right}>
              <select className={styles.dropdown}>
                <option>Nanny’s Shop</option>
                <option>Nanny’s Shop</option>
              </select>
              <Image src={notification} alt="notification" />
              <Image src={profile} alt="profile" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNav;
