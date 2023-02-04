import { ProjectsSection } from "../componenets/sections/ProjectsSection/ProjectsSection";
import { HeroSection } from "../componenets/sections/HeroSection";
import { Layout } from "../componenets/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      {/* TODO: Contact Section */}
    </Layout>
  );
};

export default Home;
