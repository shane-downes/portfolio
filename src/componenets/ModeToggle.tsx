import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export const ModeToggle = () => {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group outline-none"
      onClick={toggleMode}
    >
      <SunIcon
        className="
          w-[8.07vw]
          fill-slate-50
          stroke-slate-500
          transition
          group-hover:fill-slate-100
          group-hover:stroke-slate-600 dark:hidden md:w-[4.62vw] 
          lg:w-[2.31vw]
          [@media(prefers-color-scheme:dark)]:fill-slate-50
          [@media(prefers-color-scheme:dark)]:stroke-slate-500
          [@media(prefers-color-scheme:dark)]:group-hover:fill-slate-100
          [@media(prefers-color-scheme:dark)]:group-hover:stroke-slate-700
        "
      />
      <MoonIcon
        className="
          hidden w-[8.07vw] translate-y-[-1px] 
          fill-gray-900 
          stroke-slate-500 
          ring-0
          transition
          hover:fill-slate-800 
          dark:block md:w-[4.62vw] lg:w-[2.31vw] 
          [@media(prefers-color-scheme:dark)]:group-hover:stroke-slate-400 
          [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 
          [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500
        "
      />
    </button>
  );
};
