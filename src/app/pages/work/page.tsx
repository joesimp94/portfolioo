import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";

type projectType = {
  title: string;
  image?: string;
  description: string;
  id: number;
  livelink?: string;
  repolink?: string;
  date?: string;
  languages?: string;
};

let projects: projectType[] = [
  {
    title: "Virtual Cyberpet",
    image: "/images/VirtualCyberpet.png",
    description:
      "This was my first project during my Software Master Bootcamp at Code Nation. We were tasked with creating a virtual pet, reminicent of the classic game Tamagotchi. Each pet has needs, with choices for the player to make to see how long they can keep their pets alive.",
    date: "September 2023",
    languages: "HTML, CSS, Vanilla JavaScript",
    repolink: "https://github.com/joesimp94/VirtualCyberpet",
    livelink: "",
    id: 1,
  },
  {
    title: "Cats 4 Life E-Commerce App",
    image: "/images/Cats4Lyf.png",
    description:
      "This was the second project during my Software Master Bootcamp. We were tasked with calling APIs to populate a store-front webpage, complete with the ability to browse, add to cart and checkout functionality. We used catAPI to call for the images of cats to appear on the page, and faker.js to populate fake data values into the website.",
    date: "October 2023",
    languages: "React, CSS, Javascript",
    repolink: "https://github.com/joesimp94/Cats4Life",
    id: 2,
  },
  {
    title: "Instagram Clone",
    image: "/images/InstaClone.png",
    description:
      "This was the penultimate project of my Software Master Bootcamp. We were tasked with creating a clone of the popular social media site Intagram. To create this, we opted to build the front end of the app  in React, mainly to mimic the language Meta uses for Instagram, and we used Sequelize in the back end for relational database storage.",
    date: "November 2023",
    languages: "React, CSS, Javascript, Node, Sequelize",
    repolink:
      "https://github.com/joesimp94/instaCloneFront, https://github.com/joesimp94/instaCloneBack",
    id: 3,
  },
  {
    title: "BoxedOff",
    image: "/images/BoxedOff.png",
    description:
      "This was the final project of my Software Master Bootcamp. We were tasked with conceiving, planning and programming a full stack application of our choice. We chose to make a Family Management app, as this would showcase the best of the front end and back end skills that we acquired during the course. We chose to build the front end in React, with a Sequelize back end.",
    date: "November 2023",
    languages: "React, Javascript, CSS, Node, Sequelize",
    repolink:
      "https://github.com/joesimp94/familyManagementFrontEnd, https://github.com/joesimp94/familyManagementBackEnd",
    id: 4,
  },
];

let orderedProjects = [...projects];

function MyWork() {
  return (
    <>
      <Header />
      <div className="projectContainer">
        {orderedProjects.map((project) => {
          return (
            <article className="projectCard" key={project.id}>
              <h2 className="text-6xl font-semibold">{project.title}</h2>
              <img
                className="projectImage"
                alt={project.title}
                src={project.image}
              ></img>
              <p>{project.description}</p>
              <p>{project.languages}</p>
              {/* <div className="project-link-wrapper">
                <a href={project.repolink}>Repo</a>
                <a href={project.livelink}>Live</a>
              </div> */}
              <p>{project.date}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default MyWork;
