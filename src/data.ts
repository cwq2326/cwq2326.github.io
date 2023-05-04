import { Project, Skills, Social } from "./types";

// This file contains data to be used for various sections.

// ========================================================
//                      About Section
// ========================================================

const introduction: string[] = [
  "Welcome to my personal website! My name is Wen Quan and I am currently a penultimate Computer Science undergraduate at National University of Singapore (NUS), and am expecting to graduating this coming December 2023. I am interested in the field of software engineering, particularly application development, and have also chosen it to be part of my degree focus area. I aspire to become a fullstack developer after I graduate, focusing on building robust and scalable applications.",
  "Previously I graduated with a diploma in Applied Chemistry from Singapore Polytechnic, and I decided to pivot into the field of Computer Science as I was curious on how computer works and how they can be used to solve real world issues. I also love the idea of building software and watching it come to life, and building something that can potentially make a positive impact on society ",
  "I am always on the move to learn new technologies and improve my knowledge in the field of software engineering.\n Once again, thanks for visting my website!",
];

// ========================================================
//                      Projects Section
// ========================================================

const projects: Project[] = [
  {
    name: "Personal Website",
    shortDescription: "Web app for personal website",
    description:
      "This is a web application for my portfolio/ personal website. This contains an overview of myself. I am constantly updating this website and looking for ways to improve my code base and the web design. I am looking to add new sections such as experiences and a contact form for the next iteration.",
    techStack: ["React", "Material-UI", "Vite", "Typescript"],
    repo: "/",
    date: "Apr 2023 - Present",
  },
  {
    name: "Teacher/ Student API",
    shortDescription: "RESTful API Backend",
    description:
      "This is a RESTful API server backend developed via test-driven development (TDD) approach. It also consists of unit testing for endpoints using Golang’s built in testing package and continuous integration via GitHub Actions.",
    techStack: ["Golang", "Gin Gonic", "MySQL"],
    repo: "https://github.com/cwq2326/govtech",
    date: "Feb 2023 - Feb 2023",
  },
  {
    name: "PeerPrep",
    shortDescription: "Technical interview prep by peers",
    description:
      "This is a web application for students to prepare for whiteboard interviews with their peers, developed using Domain-Driven Design (DDD) approach and a micro-services architecture. Features includes user authentication/ authorization, matching of users, user chat and collaborating with other users.",
    techStack: [
      "React",
      "React-Bootstrap",
      "Material-UI",
      "Express",
      "Nodejs",
      "Socket.io",
      "JWT",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "AWS (EC2, ECR, ECS)",
    ],
    repo: "https://github.com/cwq2326/cs3219-project-ay2223s1-g50",
    date: "Aug 2022 - Nov 2022",
  },
  {
    name: "Tracey",
    shortDescription: "Desktop application for covid monitoring",
    description:
      "This is a desktop application for NUS faculty administrators to track and monitor covid statuses of students developed using the MVC architecture pattern and Command design pattern. It is a brownfield project where new features were added to the application based on user requirements. Unit and integration tests via JUnit to ensure robustness of the application.",
    techStack: ["Java", "JavaFX", "Junit"],
    repo: "https://github.com/cwq2326/tp",
    date: "Feb 2020 - Apr 2022",
  },
  {
    name: "BingChilling",
    shortDescription: "Desktop appliation for task tracking",
    description:
      "This is a desktop appliation to keep track of tasks developed using the MVC architecture pattern and Command design pattern. Consists of unit testings via JUnit to ensure robustness of application.",
    techStack: ["Java", "JavaFX", "Junit"],
    repo: "https://github.com/cwq2326/tp",
    date: "Feb 2020 - Apr 2022",
  },
  {
    name: "GrabTutor",
    shortDescription: "Skills sharing platform for Android",
    description:
      "This is an android application and a skills sharing platform for users to both teach and learn new skills. Implemented a real time user chatting feature via Firebase, and also integrated Google API to allow users to login using their google account.",
    techStack: ["Android Studio(Java)", "Firebase"],
    repo: "https://github.com/cwq2326/orbital-GrabTutor",
    date: "May 2021 - Jul 2021",
  },
];

// ========================================================
//                      Skills Section
// ========================================================

const skills: Skills = {
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "GoLang",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    },
  ],
  frontEnd: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Material-UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "SASS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
  ],
  backEnd: [
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Nodejs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
  ],
  cloud: [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
};

// ========================================================
//                      Footer Section
// ========================================================

const socials: Social[] = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/cwq2326",
  },
  {
    name: "Linkedin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://linkedin.com/in/chuawenquan",
  },
];

export { introduction, projects, skills, socials };
