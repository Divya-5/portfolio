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
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "https://execed.isb.edu/en.html",
  },
  {
    id: 2,
    title: "ISB Hyderabad MIHM",
    description:
      "Revamped the footer according to the latest design. Worked on the similar programs component re-design. Re-design the program finder for the ISB exceed.",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl:
      "https://www.isb.edu/en/research-thought-leadership/research-centres-institutes/max-institute-of-health-care-management/about-mihm.html",
  },
  {
    id: 3,
    title: "Citrix Podio ",
    description:
      "Revamped the footer according to the latest design. Worked on the similar programs component re-design. Re-design the program finder for the ISB exceed.",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Citrix Ready ",
    description:
      "Revamped the footer according to the latest design. Worked on the similar programs component re-design. Re-design the program finder for the ISB exceed.",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Citrix calculator ",
    description:
      "Revamped the footer according to the latest design. Worked on the similar programs component re-design. Re-design the program finder for the ISB exceed.",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Citrix Docs  ",
    description:
      "Revamped the footer according to the latest design. Worked on the similar programs component re-design. Re-design the program finder for the ISB exceed.",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/in/divya5rastogi/details/projects/",
    previewUrl: "/",
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
