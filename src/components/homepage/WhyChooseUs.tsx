// components
import FeatureItem from "@/components/FeatureItem";
import Heading from "@/components/Heading";
import { WhyChooseUsContent } from "@/components/homepage/content/content";

const WhyChooseUs = () => {
  return (
    <section className="bg-accent-gold rounded-medium lg:pt-[155px] lg:pb-[185px] py-[90px]">
      <div className="container">
        {/* section-heading  */}
        <Heading
          heading="why choose us"
          discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="pb-12"
        />

        {/* section-content  */}
        <main>
          <div className="w-[max-content] m-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] justify-items-center">
            {WhyChooseUsContent.map((item, idx) => (
              <FeatureItem
                key={idx}
                featureTitle={item.title}
                discription={item.description}
                featureIcon={<item.icon size={50} strokeWidth={0.75} />}
                className="xl:w-[300px] w-[250px]"
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default WhyChooseUs;
