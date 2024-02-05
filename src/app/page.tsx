import Image from "next/image";
import Link from "next/link";
import styles from "./Homepage.module.css";
import { Exo } from "next/font/google";
import ProfilePic from "./ProfilePic.jpeg";

const exo = Exo({ weight: "400", subsets: ["latin"] });

const imageUrl = "../public/ProfilePic.jpg";

export default function Home() {
  return (
    <>
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
      <div className={styles.infoContainer}>
        <Image
          src="/ProfilePic.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
          className={`${styles.profilePic} rounded-lg`}
        />
        <div className={styles.text}>
          <h1 className={exo.className}>
            Hi! I'm Joe, a junior web developer based in the North West of
            England.
          </h1>
        </div>
      </div>
    </>
  );
}
