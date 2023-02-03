import { type NextPage } from "next";
import { Layout } from "../componenets/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="translate-y-[-5vw] text-[10vw] font-bold tracking-tight text-slate-800 dark:text-slate-300 md:text-[7vw] lg:text-[4vw]">
        👋 Hello World
      </h1>
      <p className="translate-y-[-5vw] text-[4vw] font-light text-slate-500 dark:text-slate-400 md:text-[3vw] lg:text-[2vw]">
        This site is currently under construction
      </p>
      <p className="translate-y-[-5vw] text-[4vw] font-light text-slate-500 dark:text-slate-400 md:text-[3vw] lg:text-[2vw]">
        Check back for updates soon
      </p>
    </Layout>
  );
};

export default Home;
