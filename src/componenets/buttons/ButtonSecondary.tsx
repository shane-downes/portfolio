import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ButtonSecondaryProps = {
  text: string;
  href: string;
};

export const ButtonSecondary = ({ text, href }: ButtonSecondaryProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[1vw] p-0 text-slate-500 dark:text-slate-400 lg:gap-[0.2vw]"
    >
      <p
        className="translate-y-[0.09vw] text-[4vw] font-semibold tracking-[0.17vw] lg:text-[1vw] "
        style={{
          fontStretch: "expanded",
        }}
      >
        {text}
      </p>
      <ArrowRightIcon className="w-[4vw] -rotate-45 stroke-2 lg:w-[1.2vw]" />
    </a>
  );
};
