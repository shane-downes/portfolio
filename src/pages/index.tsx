import { type NextPage } from "next";
import { Layout } from "../componenets/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="translate-y-[-5vw] text-[10vw] font-bold tracking-tight text-slate-800 dark:text-slate-300 md:text-[7vw] lg:text-[4vw]">
        👋 Hello World
      </h1>
    </Layout>
  );
};

export default Home;
