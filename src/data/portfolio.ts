export const profile = {
  name: "Roylan Dexter Camu",
  role: "Computer Engineering Student",
  tagline: "I build full-stack systems and hardware-integrated projects, from web apps to embedded sensors.",
  location: "Dasmariñas City, Cavite, Philippines",
  email: "roylan.camu@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/RDCamu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/roylan-dexter-camu-2a4b7a152" },
  ],
};

export const about = {
  bio: [
    "BS Computer Engineering student at the University of the Philippines Diliman (expected 2026), with a background spanning web development, embedded systems, and data tooling.",
    "I've built a full-stack lab management system used to run a real optical clinic workflow, and an embedded CanSat that estimates wind speed and detects smoke mid-descent. Comfortable across Python, SQL, C++, and modern web stacks.",
  ],
};

export const projects = [
  {
    title: "OptiFlow",
    description:
      "A Flask-based optical laboratory management system handling job intake, dynamic pricing, billing/invoicing, inventory, and dispatch across multiple clinics with different pricing contracts.",
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    title: "Can-Sat: GPS Wind Estimation & Smoke Detection",
    description:
      "An undergraduate CanSat project (UP EEEI, June 2025) that estimates wind speed/direction from GPS during descent and detects smoke via PM2.5/PM1/eCO2 thresholds, streaming live data to a local dashboard.",
    stack: ["PIC32", "C", "GPS", "Embedded Systems"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    title: "Optometry Patient Records (PhilHealth YAKAP)",
    description:
      "Explored patient-records options for an optometry clinic client, digitizing the PhilHealth YAKAP Annex E form end-to-end: a multi-user web app (encrypted records, role-based accounts for clerks/doctor/admin, deployed on AWS) plus a single-file offline fallback for the doctor's laptop when there's no internet.",
    stack: ["Flask", "SQLite", "Python", "JavaScript"],
    liveUrl: undefined,
    repoUrl: undefined,
    images: [
      "/projects/philhealth-records.png",
      "/projects/philhealth-form.png",
      "/projects/philhealth-admin.png",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "SQL", "C++", "HTML", "CSS"] },
  { label: "Web & Data", items: ["Flask", "ETL", "REST APIs"] },
  { label: "Embedded", items: ["PIC32", "Sensors", "GPS"] },
  { label: "Tools", items: ["Git", "Power BI", "Excel"] },
];
