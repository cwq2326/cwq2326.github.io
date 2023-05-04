interface Project {
  name: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  repo: string;
  date: string;
}

interface Skills {
  programmingLanguages: {
    name: string;
    icon: string;
  }[];
  frontEnd: {
    name: string;
    icon: string;
  }[];
  backEnd: {
    name: string;
    icon: string;
  }[];
  tools: {
    name: string;
    icon: string;
  }[];
  cloud: {
    name: string;
    icon: string;
  }[];
  database: {
    name: string;
    icon: string;
  }[];
}

interface Social {
  name: string;
  icon: string;
  link: string;
}

export { Project, Skills, Social };
