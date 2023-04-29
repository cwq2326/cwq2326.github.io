const projects = [
  {
    name: "Personal Website",
    shortDescription: "Web app for personal website",
    description:
      "Web application for a personal website. This website contains an overview of myself, as well as showing my projects and technical skillset. I am constantly updating this website, looking for ways to improve my code, web design as well as adding new content such as experiences and a contact form.",
    techStack: ["React", "Material-UI", "Vite", "Typescript"],
    repo: "/",
    date: "Apr 2023 - Present",
  },
  {
    name: "Teacher/ Student API",
    shortDescription: "RESTful API Backend",
    description:
      "A RESTful API server application developed as part of a take home assignment to implement a backend to serve RESTful API requests, using MVC architecture pattern and test-driven development (TDD) approach. Consists of unit testing for endpoints using Golang’s testing package as well as continuous integration which will run on every commits push and pull, to ensure robustness of the application.",
    techStack: ["Golang", "Gin Gonic", "MySQL"],
    repo: "https://github.com/cwq2326/govtech",
    date: "Feb 2023 - Feb 2023",
  },
  {
    name: "PeerPrep",
    shortDescription: "Technical interview prep by peers",
    description:
      "Web application for students to prepare for whiteboard interviews with peers, developed using Domain-Driven Design (DDD) approach and micro-services architecture. The micro-services consists of:\nUser Service - user authentication and authorisation\nMatching Service - matching of users to a session\nChat Service - allow communication of users\nCollaboration Service - Provide real-time text editing\nQuestion Service - Provide questions for session.",
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
      "Desktop application for NUS faculty administrators to track and monitor covid statuses of students developed using the MVC architecture pattern and Command design pattern. This is a brownfield project in which new features were added to the application based on user requirements. Consists of unit and integration tests to ensure robustness of the application.",
    techStack: ["Java", "JavaFX", "Junit"],
    repo: "https://github.com/cwq2326/tp",
    date: "Feb 2020 - Apr 2022",
  },
  {
    name: "BingChilling",
    shortDescription: "Desktop appliation for task tracking",
    description:
      "Desktop appliation to keep track of tasks developed using the MVC architecture pattern and Command design pattern. Consists of unit testings to ensure robustness of application.",
    techStack: ["Java", "JavaFX", "Junit"],
    repo: "https://github.com/cwq2326/tp",
    date: "Feb 2020 - Apr 2022",
  },
  {
    name: "GrabTutor",
    shortDescription: "Skills sharing platform for Android",
    description:
      "Skills sharing platform for users to both teach and learn a specific skill for the android platform. Users can find listings on different categories and interact with users via online statuses and in-app chat. Also integrated Google API to allow users to login using their google account. Developed as part of NUS Orbital Programme which is a 1st year summer self-directed, independent work course.",
    techStack: ["Android Studio(Java)", "Firebase"],
    repo: "https://github.com/cwq2326/orbital-GrabTutor",
    date: "May 2021 - Jul 2021",
  },
];

export { projects };
