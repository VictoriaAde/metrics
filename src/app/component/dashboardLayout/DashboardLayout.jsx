import Link from "next/link";
import Image from "next/image";
import styles from "./DashboardLayout.module.css";
import logo from "public/logo.svg";
import categoryIcon from "public/Category.svg";
import folderIcon from "public/foldericon.svg";
import { FiLock } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { FiGift } from "react-icons/fi";
import Logout from "public/Logout.svg";
import { TbCategory } from "react-icons/tb";
import { TbFolder } from "react-icons/tb";

const DashboardLayout = ({ children, closeSidebar, toggleSidebar }) => {
  return (
    <div
      className={`${styles.dashboardLayout}   } ${
        toggleSidebar ? styles.showSidebar : ""
      } `}
    >
      <div className={styles.sidebar_wrap}>
        <div className={styles.sidebarcontent_flex}>
          <ul className={styles.sidebarlink_wrap}>
            <div className={styles.sidebar_closeIcon_wrap}>
              <AiOutlineArrowRight
                className={styles.sidebar_closeIcon}
                onClick={closeSidebar}
              />
            </div>
            <Link href="/" className={`${styles.logo} ${styles.sidebar_links}`}>
              <Image src={logo} alt="metric logo" /> Metrix
            </Link>
            <Link
              href="/"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <TbCategory fontSize={19} />
              {/* <Image
                src={categoryIcon}
                alt="category icon"
                className={styles.category_logo}
              />{" "} */}
              Dashboard
            </Link>
            <Link
              href="/"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <FiLock fontSize={19} />
              Orders
            </Link>
            <Link
              href="/"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <TbUsers fontSize={19} />
              Customers
            </Link>
            <Link
              href="/"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <TbFolder fontSize={19} />
              Inventory
            </Link>
            <Link
              href="/conversations"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <BsChatDots fontSize={19} /> Conversations
            </Link>
            <Link
              href="/"
              className={`${styles.page_link} ${styles.sidebar_links}`}
            >
              <LuSettings fontSize={19} /> Settings
            </Link>
            <div className={styles.bottom_link_wrap}>
              <Link
                href="/"
                className={`${styles.bottom_link} ${styles.sidebar_links}`}
              >
                <FiHeadphones fontSize={23} />
                Contact Support
              </Link>
              <Link
                href="/"
                className={`${styles.bottom_link} ${styles.sidebar_links}`}
              >
                <div>
                  {" "}
                  <FiGift fontSize={25} /> Free Gift Awaits You!
                </div>
                <div>
                  <span>Upgrade your account</span> <BiChevronRight />
                </div>
              </Link>
            </div>
            <Link
              href="/"
              className={`${styles.sidebar_links} ${styles.sidebar_logout}`}
            >
              <Image src={Logout} alt="logout icon" />
              Log Out
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
