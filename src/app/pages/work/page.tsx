import React from "react";
import Header from "@/app/components/Header";

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
    image: "",
    description:
      "This was my first group project during my Software Master Bootcamp at Code Nation. We were tasked with creating a virtual pet, reminicent of the classic game Tamagotchi. Each pet has needs, with choices for the player to make to see how long they can keep their pets alive.",
    date: "September 2023",
    languages: "HTML, CSS, Vanilla JavaScript",
    repolink: "https://github.com/joesimp94/VirtualCyberpet",
    livelink: "",
    id: 1,
  },
  {
    title: "Cat Store E-Commerce Website",
    image: "",
    description:
      "This was the second group project of my bootcamp. We were tasked with using APIs (catapi and faker) to populate a store-front webpage, complete with the ability to browse, add to cart and checkout functionality.",
    date: "October 2023",
    languages: "React, CSS, Javascript",
    repolink: "https://github.com/joesimp94/Cats4Life",
    id: 2,
  },
  {
    title: "Instagram Clone",
    image: "",
    description:
      "This was our last project before our final one during my bootcamp. We were tasked with creating a clone of the popular social media site Intagram. We opted to create this in React front end and Sequelize back end.",
    date: "November 2023",
    languages: "React, CSS, Javascript, Node, Sequelize",
    repolink:
      "https://github.com/joesimp94/instaCloneFront, https://github.com/joesimp94/instaCloneBack",
    id: 3,
  },
  {
    title: "BoxedOff",
    image: "",
    description: "",
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
      <div className="flex-wrapper">
        {orderedProjects.map((project) => {
          return (
            <article className="project-box" key={project.id}>
              <h2>{project.title}</h2>
              <img alt={project.title} src={project.image}></img>
              <p>{project.description}</p>
              <p>{project.languages}</p>
              <div className="project-link-wrapper">
                <a href={project.repolink}>Repo</a>
                <a href={project.livelink}>Live</a>
              </div>
              <p>{project.date}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default MyWork;
