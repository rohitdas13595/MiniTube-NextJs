import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdNotificationsNone, MdMenu } from "react-icons/md";

const Navbar = (props) => {
  const { userName } = props;
  return (
    <div className={styles.navbar}>
      <div className={styles.navHead}>
        <div className={styles.menuIcon}>
          <MdMenu size={36} />
        </div>
        <div className={styles.logo}>
          <Image src="/mt2.svg" width={50} height={20} alt="MiniTube"></Image>
          <h2>MiniTube</h2>
        </div>
      </div>
      <div className={styles.searchBar}>
        <input type="search" name="" id="" placeholder="search" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/studio">
              <MdOutlineVideoCall size={24} />
            </Link>
          </li>
          <li>
            <p>
              <MdNotificationsNone size={24} />
            </p>
          </li>
          <li>
            <Image
              src="/favicon.ico"
              width={20}
              height={20}
              alt="MiniTube"
            ></Image>
          </li>
        </ul>
      </nav>
      <nav>
        <div>
          <button>
            <p>{userName}</p>
          </button>
          <div>
            <a href=""> Sign Out</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
