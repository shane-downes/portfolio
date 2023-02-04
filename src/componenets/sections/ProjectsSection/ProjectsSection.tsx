import { ProjectOverviewAlternate } from "./ProjectOverviewAlternate";
import { ProjectOverview } from "./ProjectOverview";
import { ButtonPrimary } from "../../buttons/ButtonPrimary";
import mockupFrumo from "../../../../public/images/mockup-frumo.jpg";
import mockupMobileFrumo from "../../../../public/images/mockup-frumo-m.jpg";
import { projects } from "../../../data/projects";

export const ProjectsSection = ({}) => {
  const { frumo } = projects;
  return (
    <section className="mb-96 flex border-slate-300 dark:border-gray-700 lg:border-t-[1px]">
      <div className="hidden lg:block lg:pl-[15vw] lg:pr-[2.4vw] lg:pt-[2.4vw]">
        {/* TODO: make sticky when scrolling past section so always in view until next section */}
        <ButtonPrimary text="LATEST WORK" />
      </div>
      <div className="flex flex-col gap-[20vw] lg:gap-0">
        <ProjectOverview
          project={frumo}
          mockup={mockupFrumo}
          mockupMobile={mockupMobileFrumo}
        />
        {/* TODO: add placeholder project */}
        <ProjectOverviewAlternate
          project={frumo}
          mockup={mockupFrumo}
          mockupMobile={mockupMobileFrumo}
        />
      </div>
    </section>
  );
};
