"use client";
import styles from "./page.module.css";
import DashboardLayout from "./component/dashboardLayout/DashboardLayout";
import { useState } from "react";
import DashboardNav from "./component/dashboardNav/DashboardNav";
import graph from "public/Graph.svg";
import Image from "next/image";
import BarChart from "./component/barChart/BarChart";
import SummaryChart from "./component/summaryChart/SummaryChart";
import { TbUsers } from "react-icons/tb";
import folderIcon from "public/foldericon.svg";
import { BsCart } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import RecentOrders from "./component/recentOrders/RecentOrders";

export default function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <main className={styles.dashboard_main}>
      <DashboardLayout
        toggleSidebar={toggleSidebar}
        closeSidebar={() => setToggleSidebar(!toggleSidebar)}
      >
        <div>
          <DashboardNav name="Dashboard" />
          <section className={styles.summary_cards_wrap}>
            <div className={styles.summary_card}>
              <div className={styles.summary_card_header}>
                <span className={styles.graph_wrap}>
                  <Image src={graph} alt="graph" />
                </span>
                <select className={styles.dropdown}>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                </select>
              </div>
              <div className={styles.summary}>
                <div>
                  <h3>Sales</h3>
                  <h2>4,000,000.00</h2>
                </div>
                <div>
                  <h3>Volume</h3>
                  <h2>
                    450 <span>+20.00%</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.summary_card}>
              <div className={styles.summary_card_header}>
                <div>
                  <TbUsers color="black" />
                </div>
                <select className={styles.dropdown}>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                </select>
              </div>
              <div className={styles.summary}>
                <div>
                  <h3>Customers</h3>
                  <h2>
                    1,250 <span>+15.80%</span>
                  </h2>
                </div>
                <div>
                  <h3>Active</h3>
                  <h2>
                    1,180 <span>85%</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.summary_card}>
              <div className={styles.summary_card_header}>
                <div>
                  <FiLock />
                </div>
                <select className={styles.dropdown}>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                </select>
              </div>
              <div className={styles.summary}>
                <div>
                  <h3>All Orders</h3>
                  <h2>450</h2>
                </div>
                <div>
                  <h3>Pending</h3>
                  <h2>5</h2>
                </div>{" "}
                <div>
                  <h3>Completed</h3>
                  <h2>445</h2>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.content_wrap}>
            <div>
              <BarChart />
            </div>
            <div>
              <div className={styles.double_summarycard}>
                <div className={styles.blue_double_summarycard}>
                  <div>
                    <span className={styles.folderIcon}>
                      <Image src={folderIcon} alt="folder icon" />
                    </span>
                    <h3>All Products</h3>
                    <h2>45</h2>
                  </div>
                  <div>
                    <h3>Active</h3>
                    <h2>
                      32 <span>+24%</span>
                    </h2>
                  </div>
                </div>
                <div className={styles.white_double_summarycard}>
                  <div className={styles.white_double_summarycard_header}>
                    <BsCart color="black" />

                    <select className={styles.dropdown}>
                      <option value="week">This week</option>
                      <option value="month">This month</option>
                    </select>
                  </div>
                  <div className={styles.white_double_summarycard_content}>
                    <div>
                      <h3>Abandoned Cart</h3>
                      <h2>
                        20% <span>+0.00%</span>
                      </h2>
                    </div>
                    <div>
                      <h3>Customers</h3>
                      <h2>32</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <RecentOrders />
            </div>
            <div>
              <SummaryChart />
            </div>
          </section>
        </div>
      </DashboardLayout>
    </main>
  );
}
