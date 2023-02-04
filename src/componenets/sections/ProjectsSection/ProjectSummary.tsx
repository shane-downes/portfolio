type ProjectSummaryProps = {
  title: string;
  description: string;
  stack: string;
};

export function ProjectSummary({
  title,
  description,
  stack,
}: ProjectSummaryProps) {
  return (
    <div className="mb-[7vw] flex flex-col gap-[4vw] lg:m-0  lg:gap-[1.6vw]">
      <h2 className="text-[6vw] font-semibold text-slate-800 dark:text-slate-300 lg:text-[2.6vw]">
        {title}
      </h2>
      <p className="text-[4.2vw] leading-relaxed text-slate-500 dark:text-slate-400 lg:text-[1.2vw]">
        {description}
      </p>
      <p className="pr-[5vw] text-[4.2vw] leading-relaxed text-slate-800 dark:text-slate-300 lg:p-0 lg:text-[1.1vw]">
        {stack}
      </p>
    </div>
  );
}
