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
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[40px] justify-items-center">
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
