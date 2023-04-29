import { Box } from "@mui/material";
import Section from "../layout/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function index() {
  return (
    <Section title="Projects" id="projects">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {projects.map((el) => (
          <ProjectCard
            title={el.name}
            shortDescription={el.shortDescription}
            description={el.description}
            techStack={el.techStack}
            date={el.date}
            repo={el.repo}
          />
        ))}
      </Box>
    </Section>
  );
}
