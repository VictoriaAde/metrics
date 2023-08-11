import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CollaspedSidebar.module.css";
import logo from "public/logo.svg";
import categoryIcon from "public/Category.svg";
import folderIcon from "public/foldericon.svg";
import { FiLock } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { FiGift } from "react-icons/fi";
import Logout from "public/Logout.svg";
import { TbCategory } from "react-icons/tb";
import { TbFolder } from "react-icons/tb";

const CollaspedSidebar = ({ children }) => {
  return (
    <main className={styles.sidebar_main}>
      <div className={styles.sidebar_wrap}>
        <ul className={styles.sidebarlink_wrap}>
          <Link href="/" className={`${styles.logo} ${styles.sidebar_links}`}>
            <Image src={logo} alt="metric logo" />
          </Link>
          <Link
            href="/"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <TbCategory fontSize={23} />
            {/* <Image
              src={categoryIcon}
              alt="category icon"
              className={styles.category_logo}
            />{" "} */}
          </Link>
          <Link
            href="/"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <FiLock fontSize={23} />
          </Link>
          <Link
            href="/"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <TbUsers fontSize={23} />
          </Link>
          <Link
            href="/"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <TbFolder fontSize={23} />
            {/* <Image
              src={folderIcon}
              alt="folder icon"
              className={styles.inventory_logo}
            />{" "} */}
          </Link>
          <Link
            href="/conversations"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <BsChatDots fontSize={23} />
          </Link>
          <Link
            href="/"
            className={`${styles.page_link} ${styles.sidebar_links}`}
          >
            <LuSettings fontSize={23} />
          </Link>
          <div className={styles.bottom_link_wrap}>
            <Link
              href="/"
              className={`${styles.bottom_link} ${styles.sidebar_links}`}
            >
              <FiHeadphones fontSize={23} />
            </Link>
            <Link
              href="/"
              className={`${styles.bottom_link} ${styles.sidebar_links}`}
            >
              <FiGift fontSize={25} />
            </Link>
          </div>
          <Link
            href="/"
            className={`${styles.sidebar_links} ${styles.sidebar_logout}`}
          >
            <Image src={Logout} alt="logout icon" />
          </Link>
        </ul>
      </div>
      {children}
    </main>
  );
};

export default CollaspedSidebar;
