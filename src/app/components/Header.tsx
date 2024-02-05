import React from "react";
import { Exo } from "next/font/google";
import Link from "next/link";
import styles from "./Header.module.css";

const exo = Exo({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <header className={`${exo.className} border-b-2 border-[#348948]`}>
        <div className="flex justify-between">
          <Link
            href="/"
            className={`${styles.link} text-left text-xl mb-3 ml-3`}
          >
            Home
          </Link>
          <h1 className="text-right text-xl mb-3 mr-3">Joseph Simpson</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
