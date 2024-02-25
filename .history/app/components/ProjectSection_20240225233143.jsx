/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useRef } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "ISB Hyderabad CEE ",
    description:
      "Revamped the footer according to the latest design. Re-design the program finder for the ISB exceed.",
    image: "/images/projects/finder.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "https://execed.isb.edu/en.html",
  },
  {
    id: 2,
    title: "ISB Hyderabad MIHM",
    description:
      "Authored the whole MIHM site from scratch by doing the code level changes according to the latest design from Figma.",
    image: "/images/projects/mihm.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl:
      "https://www.isb.edu/en/research-thought-leadership/research-centres-institutes/max-institute-of-health-care-management/about-mihm.html",
  },
  {
    id: 3,
    title: "Straumann South Africa Teeth Today ",
    description:
      "Created a new site for Teethtoday south Africa region according to latest design  similar to the US version. .",
    image: "/images/projects/st_za.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl:
      "https://www.straumann.com/group/za/en/patients/teethtoday.html",
  },
  {
    id: 4,
    title: "Straumann Australia Teeth Today ",
    description:
      "Designed the Frontend Architecture For The Australia Teethtoday Site built in AEM and HTML5, CSS, JS, Bootstrap 4.",
    image: "/images/projects/st_au.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "https://www.teethtoday.com/au/en/home.html",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white py-2">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
