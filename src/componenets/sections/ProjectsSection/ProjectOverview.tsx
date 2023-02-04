import Image from "next/image";
import { ButtonSecondary } from "../../buttons/ButtonSecondary";
import { ProjectSummary } from "./ProjectSummary";
import { type StaticImageData } from "next/image";

type ProjectOverviewProps = {
  project: {
    title: string;
    description: string;
    stack: string;
    mockup: string;
    demo: string;
    github: string;
  };
  mockup: StaticImageData;
};

export const ProjectOverview = ({ project, mockup }: ProjectOverviewProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between border-l-[1px] border-b-[1px] border-slate-300 dark:border-gray-700 lg:p-[2.6vw] lg:pt-[2vw]">
        <ProjectSummary
          title={project.title}
          description={project.description}
          stack={project.stack}
        />
        <div className="flex gap-[2.6vw]">
          <ButtonSecondary text="DEMO" href={project.demo} />
          <ButtonSecondary text="GITHUB" href={project.github} />
        </div>
      </div>
      <div className="relative flex flex-col gap-[1.6vw] border-l-[1px] border-b-[1px] border-slate-300  dark:border-gray-700 lg:pl-[2.6vw] lg:pb-[2.6vw] lg:pt-[2.6vw] lg:pr-[15vw]">
        <Image className="h-[28vw] w-[97vw]" src={mockup} alt="Frumo App" />
      </div>
    </div>
  );
};
