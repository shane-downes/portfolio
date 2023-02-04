export type Projects = {
  [key: string]: {
    title: string;
    description: string;
    stack: string;
    demo: string;
    github: string;
  };
};

export const projects = {
  frumo: {
    title: "frumo.co.uk",
    description:
      "An app that makes managing your money fun and easy. Frumo’s gamified tools help you set and achieve personal goals, while providing helpful resources for money decisions.",
    stack: "NextJS · React · Tailwind · ChartsJS Supabase · Netlify",
    demo: "https://www.frumo.co.uk",
    github:
      "https://github.com/SchoolOfCode/bc13_final-project_front-end-frugal-fanatics",
  },
};
