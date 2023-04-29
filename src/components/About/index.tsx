import { Typography } from "@mui/material";

import Section from "../layout/Section";
import { introduction } from "./data";

export default function index() {
  return (
    <Section title="About Me" id="aboutme">
      <Typography variant="body1">{introduction}</Typography>
    </Section>
  );
}
