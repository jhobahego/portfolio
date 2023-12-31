/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects-section.jpg";

const imageAltText = "desktop with a book, a camera and several cups of coffee";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game, made for practice React",
    url: "https://juego-tictac.netlify.app",
  },
  {
    title: "Books app",
    description:
      "App writting with Vue3 for manage your favorite books, It has a list of read and unread books with their respective filters.",
    url: "https://jhobadev-reading-list.netlify.app",
  },
  {
    title: "Todo app",
    description:
      "App for manage Todos write with React using TypeScript and notifications, connecting with backend of SpringBoot.",
    url: "https://jhobadev-todo-app-ts.netlify.app",
  },
  {
    title: "Document Management System (SGD)",
    description:
      "Document management system to manage the purchase, sale and loan of all types of documents, the frontend was written in Vue3 and contact with a backend write in Python with FastAPI.",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          paddingTop: "3rem",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            className="projects-image"
            src={image}
            style={{
              height: "90",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
