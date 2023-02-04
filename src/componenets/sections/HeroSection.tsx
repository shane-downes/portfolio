export const HeroSection = ({}) => {
  return (
    // The difference between padding top and bottom in this section is derived from the height of the navbar
    // extra padding top was added to ProjectsSection.tsx (mobile:14vw and desktop:2.4vw) to accomadate anchor link scrolling
    <section className="flex flex-col justify-center gap-[2vw] pt-[15vw] pb-[1vw] lg:gap-[0.5vw] lg:px-[15vw] lg:pt-[9.5vw] lg:pb-[7.1vw]">
      <h1 className="text-[8vw] font-semibold tracking-tight text-slate-800 dark:text-slate-300 lg:text-[3.2vw]">
        Hi, I’m Shane 👋
      </h1>
      <p className="text-[6vw] font-medium tracking-tight text-slate-500 dark:text-slate-400 lg:text-[3.2vw] lg:leading-snug">
        I’m a Full-Stack Web Developer who loves to design and build
        user-friendly web applications.
      </p>
    </section>
  );
};
