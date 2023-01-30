import { Bars3Icon } from "@heroicons/react/24/outline";
import { Logo } from "./icons/Logo";

type NavbarProps = {
  setOpen: (open: boolean) => void;
};

export const Navbar = ({ setOpen }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 flex w-full content-center items-center justify-between border-b-[1px] border-t-[1px] border-slate-200 bg-slate-50 px-[4vw] py-[3vw] dark:border-gray-700 dark:bg-gray-900 md:px-[3vw] md:py-[2vw] lg:px-[1.5vw] lg:py-[1vw]">
      <Logo className="w-[7vw] text-slate-700 dark:text-slate-400 md:w-[4vw] lg:w-[2vw]" />
      <Bars3Icon
        onClick={() => setOpen(true)}
        className="w-[6vw] cursor-pointer text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 md:w-[3vw] lg:w-[1.7vw]"
      />
    </nav>
  );
};
