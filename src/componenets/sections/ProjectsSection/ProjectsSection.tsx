import { ProjectOverviewAlternate } from "./ProjectOverviewAlternate";
import { ProjectOverview } from "./ProjectOverview";
import { ButtonPrimary } from "../../buttons/ButtonPrimary";
import mockupFrumo from "../../../../public/images/mockup-frumo.jpg";
import mockupMobileFrumo from "../../../../public/images/mockup-frumo-m.jpg";
import { projects } from "../../../data/projects";

export const ProjectsSection = ({}) => {
  const { frumo } = projects;
  return (
    <section id="latest-work" className="flex  pt-[4.3vw]">
      {/* desktop padding top added here to accomodate anchor link scrolling -> lg:pt-[2.4vw] */}
      <div className="hidden border-slate-300 dark:border-gray-700 lg:block lg:border-t-[1px] lg:pl-[15vw] lg:pr-[2.4vw] lg:pt-[2.4vw]">
        {/* TODO: make sticky when scrolling past section so always in view until next section */}
        <ButtonPrimary text="LATEST WORK" />
      </div>
      {/* mobile padding top added here to accomodate anchor link scrolling -> pt-[14vw] */}
      <div className="flex flex-col gap-[20vw] pt-[14vw] lg:gap-0 lg:pt-0">
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
