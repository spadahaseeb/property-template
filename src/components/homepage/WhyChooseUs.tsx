// components
import FeatureItem from "@/components/FeatureItem";
import Heading from "@/components/Heading";
import { WhyChooseUsContent } from "@/components/homepage/content/content";

const WhyChooseUs = () => {
  return (
    <section className="bg-accent-gold rounded-medium pt-[155px] pb-[185px]">
      <div className="container">
        {/* section-heading  */}
        <Heading
          heading="why choose us"
          discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="pb-12"
        />

        {/* section-content  */}
        <main>
          <div className="flex items-center justify-between">
            {WhyChooseUsContent.map((item, idx) => (
              <FeatureItem
                key={idx}
                featureTitle={item.title}
                discription={item.description}
                featureIcon={<item.icon size={50} strokeWidth={0.75} />}
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default WhyChooseUs;
