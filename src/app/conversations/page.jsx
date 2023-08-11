import React from "react";
import CollaspedSidebar from "../component/collaspedSidebar/CollaspedSidebar";
import DashboardNav from "../component/dashboardNav/DashboardNav";
import styles from "./conversation.module.css";
import { CgSearch } from "react-icons/cg";
import man from "public/man.svg";
import woman from "public/woman.svg";
import woman2 from "public/woman2.svg";
import Image from "next/image";
import { FiLock } from "react-icons/fi";
import phone2 from "public/Rectangle4.svg";
import { CgCheck } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import smileIcon from "public/fi_smile.svg";
import sendIcon from "public/Send.svg";

const Conversations = () => {
  return (
    <main className={styles.conversation_main}>
      <CollaspedSidebar>
        <div>
          <DashboardNav name="Conversations" routepath="/ Conversations" />
          <div>
            <div className={styles.conversations_heading}>
              <h2>Conversations with Customers</h2>
              <button>New Message</button>
            </div>
            <div className={styles.conversations_wrap}>
              <div className={styles.contacts}>
                <div>
                  <div className={styles.contact_heading}>
                    <h2>Contacts</h2>
                    <h3>34</h3>
                  </div>
                  <div className={styles.search_wrap}>
                    <CgSearch fontSize={27} />
                    <input type="search" name="" id="" />
                  </div>
                </div>

                <div className={styles.messages_wrap}>
                  <div className={styles.messages}>
                    <div>
                      <Image src={woman2} alt="man" />
                    </div>
                    <div>
                      <h3>Jane Doe</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={man} alt="man" />
                    </div>
                    <div>
                      <h3>Kunle Adekunle</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={woman} alt="man" />
                    </div>
                    <div>
                      <h3>Janet Adebayo</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={man} alt="man" />
                    </div>
                    <div>
                      <h3>Kunle Adekunle</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={woman2} alt="man" />
                    </div>
                    <div>
                      <h3>Jane Doe</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={woman} alt="man" />
                    </div>
                    <div>
                      <h3>Janet Adebayo</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={woman2} alt="man" />
                    </div>
                    <div>
                      <h3>Jane Doe</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div>
                      <Image src={man} alt="man" />
                    </div>
                    <div>
                      <h3>Kunle Adekunle</h3>
                      <p>Hi, i want make enquiries about yo...</p>
                    </div>
                    <div>
                      <h4>New</h4>
                      <span>12:55 am</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.message_view}>
                <div className={styles.message_view_heading}>
                  <div>
                    <div>
                      <Image src={woman2} alt="man" />
                    </div>
                    <div>
                      <h3>Jane Doe</h3>
                      <div>
                        <span className={styles.status}>
                          <span className={styles.dot}></span> Online
                        </span>
                        <span className={styles.date}>12:55 am</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <span className={styles.new_customer}>New Customer</span>
                      <span className={styles.view_profile}>View Profile</span>
                    </div>
                    <h3>
                      <FiLock color="#53545C" /> 0 Orders
                    </h3>
                  </div>
                </div>
                <div className={styles.horizontal_line}></div>
                <div className={styles.message_body}>
                  <div className={styles.message_time_wrap}>
                    <span className={styles.message_time}>12 August 2022</span>
                  </div>
                  <div className={styles.sent_message}>
                    <div className={styles.order}>
                      <div>
                        <Image src={phone2} alt="phone" />
                        <div>
                          <h3>iPhone 13</h3>
                          <h2>₦730,000.00 x 1</h2>
                        </div>
                      </div>
                      <div>
                        <h4>12 In Stock</h4>
                      </div>
                    </div>
                    <div className={styles.text_wrap}>
                      <p>Hello, I want to make enquiries about your product</p>
                    </div>
                    <span className={styles.time}>12:55 am</span>
                  </div>

                  <div className={styles.reply}>
                    <div className={styles.text_wrap}>
                      <p>Hello Janet, thank you for reaching out</p>
                    </div>
                    <span className={styles.time}>
                      <span>
                        12:55 am
                        <CgCheck color="#1C1D22" className={styles.checkIcon} />
                      </span>
                    </span>
                  </div>
                  <div className={styles.reply}>
                    <div className={styles.text_wrap}>
                      <p>What do you need to know?</p>
                    </div>
                    <span className={styles.time}>
                      <span>
                        12:55 am
                        <CgCheck color="#1C1D22" className={styles.checkIcon} />
                      </span>
                    </span>
                  </div>
                  <div className={styles.message_time_wrap}>
                    <span className={styles.message_time}>Today</span>
                  </div>
                  <div className={styles.sent_message}>
                    <div className={styles.text_wrap}>
                      <p>Hello, I want to make enquiries about your product</p>
                    </div>
                    <span className={styles.time}>12:55 am</span>
                  </div>
                  <div className={styles.message_input_wrap}>
                    <div>
                      <BiPlus fontSize={25} color="#1C1D22" />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Your message"
                      />
                    </div>
                    <div>
                      <Image src={smileIcon} alt="smile" />
                      <span>
                        send <Image src={sendIcon} alt="sendIcon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollaspedSidebar>
    </main>
  );
};

export default Conversations;
