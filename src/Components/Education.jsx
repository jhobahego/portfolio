import React from "react";

const educationList = [
  {
    title: "Corporación Universitaria Remington de Colombia",
    description:
      "Actually course 7 semester of System Engineer carrer in Colombia with a duration of 5 years with a total of 9 semesters.",
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "UML",
      "Git",
      "GitHub",
      "Testing",
      "Software engineering",
      "Agile methodologies",
      "Data structures",
      "Bootstrap",
    ],
    date: "2021 - now",
  },
  {
    title: "Software Developtment",
    description:
      "Fullstack Developer with web tecnologies like Vue.js, React and Backend tecnologies like SpringBoot, FastAPI, experienced working with rest APIS, single and multipage aplications.",
    technologies: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "MongoDB",
      "Git",
      "Github",
      "Vue.js",
      "React",
      "Astro",
      "SpringBoot",
      "FastAPI",
      "Bootstrap",
      "TailwindCSS",
    ],
    date: "2021 - now",
  },
  {
    title:
      "MisionTIC 2022 - Ruta de aprendizaje 2 con profundización en desarrollo de aplicaciones web",
    description:
      "Course certified by the Universidad Tecnologica de Bolivar and MINTIC Colombia with an hourly intensity of 800 hours with 320 hours of synchronous work and 480 hours of autonomous work.",
    technologies: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "Git",
      "Vue.js",
      "React",
      "SpringBoot",
      "FastAPI",
      "Django",
    ],
    date: "2022",
  },
  {
    title: "Diplomado en desarrollo de aplicaciones web",
    description:
      "Course certified by the Universidad Tecnologica de Bolivar and MINTIC Colombia with an hourly intensity of 200 hours with 80 hours of synchronous work and 120 hours of autonomous work.",
    technologies: ["JavaScript", "Git", "Github", "Vue.js", "Fastapi"],
    date: "2022",
  },
  {
    title: "Desarrollo de software",
    description:
      "Course certified by the Universidad Tecnologica de Bolivar and MINTIC Colombia with an hourly intensity of 200 hours with 80 hours of synchronous work and 120 hours of autonomous work.",
    technologies: ["Python", "Django", "Git", "Github"],
    date: "2022",
  },
];

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center", marginTop: "50px", marginBottom: "30px" }}>Education</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        {educationList.map((education) => (
          <div className="tl-container" key={education.title}>
            <div className="tl-item-container">
              <div className="tl-item">
                <div className="tl-icon">
                  <span className="tl-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-check-filled"
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      color="#09f"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                        strokeWidth="0"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
                <div className="tl-content">
                  <div className="tl-card">
                    <header className="tl-header">
                      <h3>{education.title}</h3>
                    </header>

                    <div className="tl-body">
                      <p>{education.description}</p>
                      <ul
                        style={{
                          paddingLeft: "0",
                          listStyle: "none",
                          display: "flex",
                          flexFlow: "row wrap",
                          alignItems: "center",
                          gap: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        {education.technologies.map((tech) => (
                          <li
                            style={{
                              opacity: 0.8,
                              fontSize: "12px",
                              padding: "5px 10px",
                              boxShadow: "0px 0px 4px #888888",
                              borderRadius: "10px",
                            }}
                            key={tech}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <p style={{ opacity: 0.8, fontSize: "14px", marginTop: "30px" }}>
                        {education.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
