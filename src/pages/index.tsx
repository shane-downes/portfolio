import { HeroSection } from "./../componenets/HeroSection";
import { Layout } from "../componenets/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Home;
