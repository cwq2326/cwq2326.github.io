import { Box } from "@mui/material";
import Section from "../Layouts/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "./../../data";
import { Project } from "../../types";

export default function index() {
  return (
    <Section title="PROJECTS" id="projects">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {projects.map((el: Project, idx: number) => (
          <ProjectCard
            key={idx}
            name={el.name}
            shortDescription={el.shortDescription}
            description={el.description}
            techStack={el.techStack}
            date={el.date}
            repo={el.repo}
            idx={idx}
          />
        ))}
      </Box>
    </Section>
  );
}
