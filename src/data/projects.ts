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
    stack: "NextJS · React · Tailwind · ChartsJS · Supabase · Netlify",
    demo: "https://www.frumo.co.uk",
    github:
      "https://github.com/SchoolOfCode/bc13_final-project_front-end-frugal-fanatics",
  },
  placeholder: {
    title: "PrestoKit",
    description:
      "An AI prototyping tool that generates UI kits based on a project’s name and type. I've been having fun learning how to build a custom server that interfaces with the OpenAI API.",
    stack: "TypeScript · NextJS · OpenAI API · Tailwind · NodeJS · Express",
    demo: "",
    github: "",
  },
};
