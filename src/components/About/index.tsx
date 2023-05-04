import { Typography } from "@mui/material";
import Section from "../layout/Section";
import { introduction } from "./../../data";
import Paragraph from "./Paragraph";

export default function index() {
  return (
    <Section title="ABOUT ME" id="aboutme">
      {introduction.map((el: string, idx: number) => (
          <Paragraph key={idx} idx={idx} break={idx < introduction.length - 1} text={el} />
      ))}
    </Section>
  );
}
