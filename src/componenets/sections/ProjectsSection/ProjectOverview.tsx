import Image from "next/image";
import { ButtonSecondary } from "../../buttons/ButtonSecondary";
import { ProjectSummary } from "./ProjectSummary";
import { type StaticImageData } from "next/image";

type ProjectOverviewProps = {
  project: {
    title: string;
    description: string;
    stack: string;
    demo: string;
    github: string;
  };
  mockup: StaticImageData;
  mockupMobile: StaticImageData;
};

export const ProjectOverview = ({
  project,
  mockup,
  mockupMobile,
}: ProjectOverviewProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between border-slate-300 dark:border-gray-700 lg:border-t-[1px] lg:border-l-[1px] lg:border-b-[1px] lg:p-[2.6vw] lg:pt-[2vw]">
        <Image
          className="mb-[7vw] w-full rounded-lg lg:hidden"
          src={mockupMobile}
          alt="Frumo App"
          priority
          quality={100}
        />
        <ProjectSummary
          title={project.title}
          description={project.description}
          stack={project.stack}
        />
        <div className="flex gap-[7vw] lg:gap-[2.6vw]">
          <ButtonSecondary text="DEMO" href={project.demo} />
          <ButtonSecondary text="GITHUB" href={project.github} />
        </div>
      </div>
      <div className="relative flex flex-col gap-[1.6vw] border-slate-300 dark:border-gray-700 lg:border-t-[1px] lg:border-l-[1px] lg:border-b-[1px] lg:pl-[2.6vw] lg:pb-[2.6vw] lg:pt-[2.6vw] lg:pr-[15vw]">
        <Image
          className="hidden lg:block lg:h-[28vw] lg:w-[97vw]"
          src={mockup}
          alt="Frumo App"
          priority
          quality={100}
        />
      </div>
    </div>
  );
};
