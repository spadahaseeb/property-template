import { twMerge } from "tailwind-merge";
// components
import { WhyChooseUsContent } from "@/assets/content";
import Heading from "@/components/shared/Heading";
import FeatureItem from "@/components/shared/FeatureItem";

const WhyChooseUs = () => {
  return (
    <section
      className={twMerge(
        "bg-accent-gold rounded-medium section-spacing",
        "xxl:pt-[155px] xxl:pb-[185px]"
      )}
    >
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
            {WhyChooseUsContent.map((item) => (
              <FeatureItem
                key={item.title}
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
