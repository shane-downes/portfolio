import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ButtonPrimaryProps = {
  text: string;
};
export const ButtonPrimary = ({ text }: ButtonPrimaryProps) => {
  return (
    <button className="sticky flex cursor-not-allowed items-center justify-center gap-[0.2vw] border-[1px] border-slate-300 text-slate-500 dark:border-gray-700 dark:text-slate-400 lg:top-[6.5vw] lg:w-[14vw] lg:py-[0.8vw]">
      <p
        className="translate-y-[0.09vw] text-[1vw] font-semibold tracking-[0.17vw] "
        style={{
          fontStretch: "expanded",
        }}
      >
        {text}
      </p>
      <ArrowRightIcon className="w-[1.2vw] stroke-2" />
    </button>
  );
};
