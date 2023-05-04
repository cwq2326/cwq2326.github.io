import { Card, Divider } from "@mui/material";

import { skills } from "./../../data";
import Section from "../layout/Section";
import SkillTab from "./SkillTab";

export default function index() {
  return (
    <Section title="SKILLS" id="skills">
      <Card
        sx={{
          bgcolor: "text.primary",

          color: "primary.contrastText",
        }}
      >
        <SkillTab
          skill={skills.programmingLanguages}
          name="Programming Languages"
        />
        <Divider sx={{ mx: 4 }} />
        <SkillTab skill={skills.frontEnd} name="Frontend" />
        <Divider sx={{ mx: 4 }} />
        <SkillTab skill={skills.backEnd} name="Backend" />
        <Divider sx={{ mx: 4 }} />
        <SkillTab skill={skills.tools} name="Development Tools" />
        <Divider sx={{ mx: 4 }} />
        <SkillTab skill={skills.cloud} name="Cloud" />
        <Divider sx={{ mx: 4 }} />
        <SkillTab skill={skills.database} name="Database" />
      </Card>
    </Section>
  );
}
