import React from "react";
import Header from "../../components/Header";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="m-5 flex flex-col-reverse items-center justify-center">
        <p className="text-center text-2xl m-5">
          Born in Southampton in '94, I was pre-installed with a passion for
          languages and travelling. I spent my childhood learning French at
          school, only to throw it all away at university and trade languages
          for Chinese. Since graduating, I have spent my twenties living abroad,
          starting in China then migrating to South Korea. It was in these
          high-tech countries that I truly became enamoured with learning to
          code and software development, and after arriving back home earlier
          this year I began my full-stack development course to do just that. I
          am now a fledgling software dev eager to cut my teeth in the industry.
          I am currently working on several projects ranging from lifestyle to
          entertainment.
        </p>
        <Image
          src="/images/ProfilePic.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="profilePic rounded-lg m-5"
        />
      </div>
    </>
  );
};

export default AboutMe;
