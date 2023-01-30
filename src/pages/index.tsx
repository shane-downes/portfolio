import { type NextPage } from "next";
import { Layout } from "../componenets/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-[5rem]">
        Hello World
      </h1>
    </Layout>
  );
};

export default Home;
