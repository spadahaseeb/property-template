// componnets
import Hero from "@/components/homepage/Hero";
import RecommendedHomes from "@/components/homepage/RecommendedHomes";
import DiscoverCities from "@/components/homepage/DiscoverCities";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import BestPropertiesShowcase from "@/components/homepage/BestPropertiesShowcase";
import ExpertiseShowcase from "@/components/homepage/ExpertiseShowcase";
import Testimonials from "@/components/homepage/Testimonials";
import RecentArticles from "@/components/homepage/RecentArticles";
import ExploreLinksWithAgentCTA from "@/components/homepage/ExploreLinksWithAgentCTA";
import AgentCTA from "@/components/homepage/AgentCTA";

const Home1 = () => {
  return (
    <>
      <div className="md:p-5 p-[10px]">
        <Hero />
        <RecommendedHomes />
        <DiscoverCities />
        <WhyChooseUs />
        <BestPropertiesShowcase />
        <ExpertiseShowcase />
        <Testimonials />
        <RecentArticles />
        <ExploreLinksWithAgentCTA />
        <AgentCTA />
      </div>
    </>
  );
};
export default Home1;
