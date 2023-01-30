import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "./ModeToggle";

type SlideMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SlideMenu = ({ open, setOpen }: SlideMenuProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
          <div className=" fixed inset-0  top-[14.5vw] bg-slate-50 bg-opacity-95 transition-opacity dark:bg-gray-900 dark:bg-opacity-95 md:top-[8.8vw] lg:top-[4.5vw]" />
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
                <Dialog.Panel className="pointer-events-auto w-screen md:max-w-[33vw]">
                  <div className="flex h-full flex-col border-l-[1px] border-slate-200 bg-slate-50 pb-6 dark:border-gray-700 dark:bg-gray-900">
                    {/* top panel */}
                    <div className="border-b-[1px] border-slate-200 px-[4vw] py-[3vw] dark:border-gray-700 md:px-[3vw] md:py-[2vw] lg:px-[1.5vw] lg:py-[1vw]">
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
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full border-[1px] border-dashed border-slate-200 dark:border-slate-600"
                          aria-hidden="true"
                        />
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
