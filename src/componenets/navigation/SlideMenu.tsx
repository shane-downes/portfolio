import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "../buttons/ModeToggle";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

type SlideMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SlideMenu = ({ open, setOpen }: SlideMenuProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* background fade */}
          <div className=" fixed inset-0  top-[14.3vw] bg-slate-50 bg-opacity-50 transition-opacity dark:bg-gray-900 dark:bg-opacity-50 md:top-[8.8vw] lg:top-[4vw]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-[15.5vw]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                {/* slide panel */}
                <Dialog.Panel className="pointer-events-auto w-screen lg:max-w-[33vw]">
                  <div className="flex h-full flex-col border-l-[1px] border-slate-300 bg-slate-50 pb-6 dark:border-gray-700 dark:bg-gray-900">
                    {/* top panel */}
                    <div className="border-b-[1px] border-t-[1px] border-slate-300 px-[4vw] py-[3vw] dark:border-gray-700 md:px-[3vw] md:py-[2vw] lg:px-[1.5vw] lg:py-[1vw]">
                      <div className="flex items-center justify-between">
                        {/* dark mode toggle */}
                        <ModeToggle />
                        {/* close button */}
                        <button
                          type="button"
                          className=" text-slate-500 hover:text-slate-700 focus:outline-none dark:text-slate-500 dark:hover:text-slate-300"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon
                            className="w-[6vw] md:w-[3vw] lg:w-[1.7vw]"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-[6vw] flex-1 lg:mt-[1vw]">
                      {/* content */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="inset-0 px-[10vw] pt-[9.5vw] lg:px-[3vw] lg:pt-[4vw]">
                          <div
                            className="flex h-full flex-col gap-[5vw] border-slate-300 text-[4vw] dark:border-slate-600 lg:gap-[2vw]"
                            aria-hidden="true"
                          >
                            <a
                              href="#latest-work"
                              className="text-[7.5vw] font-semibold tracking-wide text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 lg:text-[2.6vw]"
                              style={{ fontFamily: "Mona Sans" }}
                              onClick={() => setOpen(false)}
                            >
                              Latest Work
                            </a>
                            <a
                              href="#contact"
                              className="text-[7.5vw] font-semibold tracking-wide text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 lg:text-[2.6vw]"
                              style={{ fontFamily: "Mona Sans" }}
                              onClick={() => setOpen(false)}
                            >
                              Contact
                            </a>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[5vw] border-t-[1px] border-slate-300 px-[9vw] pt-[10vw] pb-[5vw] dark:border-gray-700 md:h-[35vw] lg:h-[13.5vw] lg:gap-[2vw] lg:p-[2.6vw] lg:pl-[3vw] lg:pt-[4.2vw]">
                          {/* TODO: (low priority) extract social links to component and make it mappable from data with dynamic icon display */}
                          {/* LINKEDIN */}
                          <a
                            href="https://www.linkedin.com/in/shanedownes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-[3.5vw] p-0  lg:gap-[1.3vw]"
                          >
                            {/* Mobile social icon */}
                            <FaLinkedinIn
                              className="translate-y-[-0.3vw] text-slate-500 lg:hidden"
                              size="5.5vw"
                            />
                            {/* Desktop icon */}
                            <FaLinkedinIn
                              className="hidden translate-y-[-0.2vw] text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 lg:block "
                              size="2vw"
                            />
                            <p
                              className=" text-[4vw] tracking-wide text-slate-800 group-hover:underline dark:text-slate-300 lg:text-[1.3vw]"
                              style={{ fontFamily: "Mona Sans" }}
                            >
                              /shanedownes
                            </p>
                          </a>

                          {/* GITHUB */}
                          <a
                            href="https://github.com/shane-downes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-[3.5vw] p-0  lg:gap-[1.3vw]"
                          >
                            {/* Mobile social icon */}
                            <BsGithub
                              className="text-slate-500 lg:hidden"
                              size="5.5vw"
                            />
                            {/* Desktop icon */}
                            <BsGithub
                              className="hidden text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 lg:block "
                              size="2vw"
                            />
                            <p
                              className="translate-y-[0vw] text-[4vw] tracking-wide text-slate-800 group-hover:underline dark:text-slate-300 lg:text-[1.3vw]"
                              style={{ fontFamily: "Mona Sans" }}
                            >
                              /shane-downes
                            </p>
                          </a>
                        </div>
                      </div>
                      {/* /end content */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
