import Section from '../Layouts/Section';
import { introduction } from './../../data';
import Paragraph from './Paragraph';

export default function index() {
  return (
    <Section title="ABOUT ME" id="about">
      {introduction.map((el: string, idx: number) => (
        <Paragraph
          key={idx}
          idx={idx}
          break={idx < introduction.length - 1}
          text={el}
        />
      ))}
    </Section>
  );
}
