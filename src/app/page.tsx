import Image from "next/image";
import Link from "next/link";
import styles from "./Homepage.module.css";
import { Exo } from "next/font/google";

const exo = Exo({ weight: "400", subsets: ["latin"] });

const imageUrl = "../public/ProfilePic.jpg";

export default function Home() {
  return (
    <div className={styles.linkContainer}>
      <div className={exo.className}>
        <Link href="./pages/about" className={styles.link}>
          About
        </Link>
        <Link href="./pages/work" className={styles.link}>
          Work
        </Link>
        <Link href="./pages/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
}
