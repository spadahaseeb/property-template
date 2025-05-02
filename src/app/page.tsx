// componnets
import HeroSection from "@/components/homepage/HeroSection";
import RecommendedHomes from "@/components/homepage/RecommendedHomes";
import DiscoverCities from "@/components/homepage/DiscoverCities";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import BestPropertiesShowcase from "@/components/homepage/BestPropertiesShowcase";
import ExpertiseShowcase from "@/components/homepage/ExpertiseShowcase";
import Testimonials from "@/components/homepage/Testimonials";
import RecentArticles from "@/components/homepage/RecentArticles";
import ExploreLinksWithAgentCTA from "@/components/homepage/ExploreLinksWithAgentCTA";
import AgentCTA from "@/components/homepage/AgentCTA";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecommendedHomes />
      <DiscoverCities />
      <WhyChooseUs />
      <BestPropertiesShowcase />
      <ExpertiseShowcase />
      <Testimonials />
      <RecentArticles />
      <ExploreLinksWithAgentCTA />
      <AgentCTA />
    </>
  );
};
export default HomePage;
