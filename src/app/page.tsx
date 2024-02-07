import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-[80vh]">
        <div className="linkContainer">
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
        <div className="infoContainer">
          <p className="text">
            Hi! I'm Joe, a Junior Software Developer based in the North West of
            England. Please enjoy checking out my portfolio!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
