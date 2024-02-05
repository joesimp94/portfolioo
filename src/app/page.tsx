import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="linkContainer">
        <div>
          <Link href="./pages/about" className="link">
            About
          </Link>
          <Link href="./pages/work" className="link">
            Work
          </Link>
          <Link href="./pages/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
      <div className="infoContainer">
        <div className="text">
          <p>
            Hi! I'm Joe, a Junior Software Developer based in the North West of
            England. Please enjoy checking out my portfolio!
          </p>
        </div>
      </div>
    </>
  );
}
