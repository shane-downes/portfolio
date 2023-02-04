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
      className="flex items-center gap-[0.2vw] p-0 text-slate-500 dark:text-slate-400"
    >
      <p
        className="translate-y-[0.09vw] text-[1vw] font-semibold tracking-[0.17vw] "
        style={{
          fontStretch: "expanded",
        }}
      >
        {text}
      </p>
      <ArrowRightIcon className="w-[1.2vw] -rotate-45 stroke-2" />
    </a>
  );
};
