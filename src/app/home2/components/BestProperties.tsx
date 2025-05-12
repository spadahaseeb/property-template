// components
import PropertyHighlightCard from "@/components/shared/PropertyHighlightCard";
import Heading from "@/components/shared/Heading";
import PropertyThumbSlider from "@/components/shared/PropertyThumbSlider";
import PropertyStatsCard from "@/components/shared/PropertyStatCard";
import PropertyVideoPreviewCard from "@/components/shared/PropertyVideoPreviewCard";
import {
  BestPropertiesShowcaseContent,
  PropertyHighlightCardContent,
} from "@/assets/content";
import PropertyDetails from "@/components/shared/PropertyDetails";
import PropertyPrice from "@/components/shared/PropertyPrice";
import PropertyAdress from "@/components/shared/PropertyAdress";
import { ArrowRight } from "lucide-react";

const BestProperties = () => {
  return (
    <>
      <section className="lg:pt-[165px] lg:pb-[169px] sm:py-[100px] py-[70px] bg-black-primary">
        <div className="container">
          {/* heading-section  */}
          <Heading
            heading="Best Properties"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-6 text-white"
            headingStyles="pb-[5px]"
          />

          {/* section-content  */}
          <main>
            <div className="grid xxl:grid-cols-2 grid-cols-1 gap-[30px] h-[max-content]">
              {/* highlight-card  */}
              <PropertyHighlightCard
                imgSrc="bp3.webp"
                isFeatured={true}
                isForSle={true}
                className="w-full md:min-h-[700px] min-h-[450px]"
              >
                <div>
                  <PropertyAdress
                    title="Villa One Hyde Park"
                    adress="2050 Bloomingdale Ave"
                    className="pb-[29px]"
                  />

                  <div className="flex md:items-center md:flex-row flex-col">
                    <PropertyPrice
                      className="text-white"
                      isMonthly={false}
                      price="$200,0000"
                    />
                    <PropertyDetails
                      data={PropertyHighlightCardContent}
                      className="bg-transparent p-0 md:pl-[59px] pt-5 flex-wrap"
                      priceStyles="text-white pr-[60px]"
                      veryChildStyles="border-white/30"
                    />
                  </div>
                </div>
              </PropertyHighlightCard>

              {/* slider/ stats/ video-preview card  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                <PropertyThumbSlider
                  className="md:min-h-[334px] md:col-span-2"
                  data={BestPropertiesShowcaseContent}
                />
                <PropertyVideoPreviewCard />
                <PropertyStatsCard
                  className="bg-accent-gold text-black"
                  isButton={true}
                  buttonLink="/"
                  buttonIcon={<ArrowRight size={20} strokeWidth={1} />}
                  buttonVariant="v3"
                  title1="280+"
                  title2="properties"
                  discription="Explore our wide variety of properties to fid your dream home today"
                />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default BestProperties;
