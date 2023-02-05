import Image from "next/image";
// import { ButtonSecondary } from "../../buttons/ButtonSecondary";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ProjectSummary } from "./ProjectSummary";
import { type StaticImageData } from "next/image";

type ProjectOverviewAlternateProps = {
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

export const ProjectOverviewAlternate = ({
  project,
  mockup,
  mockupMobile,
}: ProjectOverviewAlternateProps) => {
  return (
    <div className="flex">
      <div className="relative flex flex-col gap-[1.6vw] border-slate-300 dark:border-gray-700 lg:border-l-[1px] lg:p-[2.6vw]">
        <Image
          className="hidden lg:block lg:h-[28vw] lg:w-[97vw]"
          src={mockup}
          alt="Frumo App"
          priority
        />
      </div>
      <div className="relative flex flex-col justify-between gap-[1.6vw] border-slate-300 dark:border-gray-700 lg:border-l-[1px] lg:pl-[2.6vw] lg:pb-[2.6vw] lg:pt-[2vw] lg:pr-[15vw]">
        <Image
          className="mb-[7vw] w-full rounded-lg lg:hidden"
          src={mockupMobile}
          alt="Frumo App"
          priority
        />
        <ProjectSummary
          title={project.title}
          description={project.description}
          stack={project.stack}
        />
        <div className="flex gap-[7vw] lg:gap-[2.6vw]">
          {/* <ButtonSecondary text="DEMO" href={project.demo} />
          <ButtonSecondary text="GITHUB" href={project.github} /> */}
          <a className="flex cursor-wait items-center gap-[1vw] p-0 text-slate-500 dark:text-slate-400 lg:gap-[0.2vw]">
            <p
              className="translate-y-[0.09vw] text-[4vw] font-semibold tracking-[0.17vw] lg:text-[1vw] "
              style={{
                fontStretch: "expanded",
              }}
            >
              UPDATING SOON
            </p>
            <ClockIcon className="w-[4vw] stroke-2 lg:w-[1.2vw]" />
          </a>
        </div>
      </div>
    </div>
  );
};
