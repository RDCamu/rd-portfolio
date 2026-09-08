export const profile = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "I build fast, reliable web apps for teams that care about the details.",
  location: "City, Country",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
  ],
};

export const about = {
  bio: [
    "A couple of sentences about who you are, your background, and what got you into this field.",
    "A couple more sentences about what you're focused on now and what kind of work excites you.",
  ],
};

export const projects = [
  {
    title: "Project One",
    description: "One or two sentences describing the problem this solves and your role in building it.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourhandle/project-one",
    image: "/projects/project-one.png",
  },
  {
    title: "Project Two",
    description: "One or two sentences describing the problem this solves and your role in building it.",
    stack: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourhandle/project-two",
    image: "/projects/project-two.png",
  },
  {
    title: "Project Three",
    description: "One or two sentences describing the problem this solves and your role in building it.",
    stack: ["Python", "FastAPI"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourhandle/project-three",
    image: "/projects/project-three.png",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { label: "Tools", items: ["Git", "Docker", "Vercel"] },
];
