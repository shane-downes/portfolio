import { ProjectOverviewAlternate } from "./ProjectOverviewAlternate";
import { ProjectOverview } from "./ProjectOverview";
import { ButtonPrimary } from "../../buttons/ButtonPrimary";
import mockupFrumo from "../../../../public/images/mockup-frumo.jpg";
import { projects } from "../../../data/projects";

export const ProjectsSection = ({}) => {
  const { frumo } = projects;
  return (
    <section className="mb-96 flex border-t-[1px] border-slate-300 dark:border-gray-700">
      <div className="lg:pl-[15vw] lg:pr-[2.4vw] lg:pt-[2.4vw]">
        <ButtonPrimary text="LATEST WORK" />
      </div>
      <div className="flex flex-col">
        <ProjectOverview project={frumo} mockup={mockupFrumo} />
        <ProjectOverviewAlternate project={frumo} mockup={mockupFrumo} />
      </div>
    </section>
  );
};
