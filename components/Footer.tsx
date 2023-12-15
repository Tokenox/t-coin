import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.flexgrid}>
        <div className={styles.textStyle}>Be part of something!</div>
        <button className={styles.button}>
          <span className={styles.btnText}>Browse</span>
        </button>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.flex}>
          <Link href="/">
            <h3 className={styles.h2}>Terms</h3>
          </Link>
          <Link href="/">
            <h3 className={styles.h2}>Privacy Policy</h3>
          </Link>
          <Link href="/">
            <h3 className={styles.h2}>About</h3>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src={`/svg/offers-svg/x-logo.svg`}
              alt="avatar"
              className={styles.avatar}
              width={16}
              height={14}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
