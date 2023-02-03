import Head from "next/head";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { SlideMenu } from "./SlideMenu";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const Layout = ({
  children,
  title = "Shane Downes | Web Developer",
  description = "Shane Downes Portfolio",
}: LayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta key="theme-color-dark" name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar setOpen={setOpen} />
        <SlideMenu open={open} setOpen={setOpen} />
        <main className="flex flex-grow flex-col bg-slate-50 px-[4vw] dark:bg-gray-900 lg:px-0">
          {children}
        </main>
      </div>
    </>
  );
};
