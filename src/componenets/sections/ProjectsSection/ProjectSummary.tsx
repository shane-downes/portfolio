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
    <div className="flex flex-col gap-[1.6vw]">
      <h2 className="font-semibold text-slate-800 dark:text-slate-300 lg:text-[2.6vw]">
        {title}
      </h2>
      <p className="leading-relaxed text-slate-500 dark:text-slate-400 lg:text-[1.2vw]">
        {description}
      </p>
      <p className="leading-relaxed text-slate-800 dark:text-slate-300 lg:text-[1.1vw]">
        {stack}
      </p>
    </div>
  );
}
