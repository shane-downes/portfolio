import { Navbar } from "./Navbar";
import React from "react";
import Head from "next/head";
import { useState } from "react";
import { SlideMenu } from "./SlideMenu";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const Layout = ({
  children,
  title = "Shane Downes | Portfolio",
  description = "Shane Downes Portfolio",
}: LayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar setOpen={setOpen} />
        <SlideMenu open={open} setOpen={setOpen} />
        <main className="flex flex-grow flex-col items-center justify-center bg-gray-900">
          {children}
        </main>
      </div>
    </>
  );
};
