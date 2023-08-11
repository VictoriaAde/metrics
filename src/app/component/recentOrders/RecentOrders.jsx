import React from "react";
import phone1 from "public/Rectangle3.svg";
import phone2 from "public/Rectangle4.svg";
import Image from "next/image";
import styles from "./RecentOrders.module.css";

const RecentOrders = () => {
  return (
    <div className={styles.recent_orders}>
      <h1>Recent Orders</h1>
      <div className={styles.orders}>
        <div>
          <Image src={phone1} alt="phone" />
          <div>
            {" "}
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone1} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone2} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.completed}>Completed</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone1} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone2} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.completed}>Completed</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>
      <div className={styles.orders}>
        <div>
          <Image src={phone2} alt="phone" />
          <div>
            {" "}
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone1} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone1} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.completed}>Completed</span>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>

      <div className={styles.orders}>
        <div>
          <Image src={phone2} alt="phone" />
          <div>
            <h3>iPhone 13</h3>
            <h2>₦730,000.00 x 1</h2>
          </div>
        </div>
        <div>
          <h4>12 Sept 2022</h4>
          <span className={styles.pending}>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
