import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ButtonPrimary } from "../../componenets/buttons/ButtonPrimary";

export const ContactSection = ({}) => {
  return (
    <section
      id="contact"
      className="mt-[17vw] mb-[20vw] flex flex-col gap-[5vw] lg:m-0"
    >
      <h2 className="text-[6vw] font-semibold text-slate-800 dark:text-slate-300 lg:hidden">
        Get in touch
      </h2>
      <div className="flex border-slate-300 dark:border-gray-700 lg:mt-0 lg:h-[12.5vw] lg:border-t-[1px]">
        <div className="hidden lg:block lg:pl-[15vw] lg:pr-[2.4vw] lg:pt-[2.4vw]">
          <ButtonPrimary text="GET IN TOUCH" />
        </div>
        <div className="flex flex-grow flex-col gap-[4vw] border-slate-300 dark:border-gray-700 lg:gap-[2vw] lg:border-l-[1px] lg:p-[2.6vw] lg:pt-[3vw]">
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
            <p className=" text-[4.2vw] tracking-wide text-slate-800 group-hover:underline dark:text-slate-300 lg:text-[1.3vw]">
              linkedin.com/in/shanedownes
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
            <BsGithub className="text-slate-500 lg:hidden" size="5.5vw" />
            {/* Desktop icon */}
            <BsGithub
              className="hidden text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 lg:block "
              size="2vw"
            />
            <p className="translate-y-[0vw] text-[4.2vw] tracking-wide text-slate-800 group-hover:underline dark:text-slate-300 lg:text-[1.3vw]">
              github.com/shane-downes
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
