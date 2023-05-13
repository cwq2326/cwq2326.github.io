type Experiences = {
  company: string;
  title: string;
  start: Date;
  end: Date | 'Present';
  description: string;
  icon?: string;
};

type Project = {
  name: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  repo: string;
  date: string;
};

type Skills = {
  programmingLanguages: Array<{
    name: string;
    icon: string;
  }>;
  frontEnd: Array<{
    name: string;
    icon: string;
  }>;
  backEnd: Array<{
    name: string;
    icon: string;
  }>;
  tools: Array<{
    name: string;
    icon: string;
  }>;
  cloud: Array<{
    name: string;
    icon: string;
  }>;
  database: Array<{
    name: string;
    icon: string;
  }>;
};

type Social = {
  name: string;
  icon: string;
  link: string;
};

export type { Experiences, Project, Skills, Social };
