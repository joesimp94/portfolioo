import React from "react";
import Header from "@/app/components/Header";

const ContactMe = () => {
  return (
    <>
      <Header />
      <div className="contactOptions">
        <h1 className="text-5xl mt-10 flex justify-center">
          Please get in touch via any of the options below! My inboxes are
          always open.
        </h1>
        <div className="iconWrapper flex flex-row justify-center mt-10">
          <div className="icon">
            <a href="mailto:josephsimpsondev@gmail.com">
              <img src="/images/GmailIcon.png"></img>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/joseph-simpson94/">
              <img src="/images/LinkedinIcon.png"></img>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/joesimp94">
              <img src="/images/GithubIcon.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
