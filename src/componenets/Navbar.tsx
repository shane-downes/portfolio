import { Bars3Icon } from "@heroicons/react/24/outline";

type NavbarProps = {
  setOpen: (open: boolean) => void;
};

export const Navbar = ({ setOpen }: NavbarProps) => {
  return (
    <nav className="flex w-full content-center items-center justify-between border-b-[1px] border-gray-700 bg-gray-900 px-[4vw] py-[3vw] md:px-[3vw] md:py-[2vw] lg:px-[1.5vw] lg:py-[1vw]">
      <img
        className="w-[7vw] text-slate-400 md:w-[4vw] lg:w-[2vw]"
        alt="SD Logo"
        src="/sd-logo.svg"
      />
      <Bars3Icon
        onClick={() => setOpen(true)}
        className="w-[6vw] cursor-pointer text-slate-400 hover:text-slate-500 md:w-[3vw] lg:w-[1.7vw]"
      />
    </nav>
  );
};
