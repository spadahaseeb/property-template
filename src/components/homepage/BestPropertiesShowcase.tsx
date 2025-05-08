import {
  BestPropertiesShowcaseContent,
  PropertyHighlightCardContent,
} from "@/assets/content";
// components
import Heading from "@/components/shared/Heading";
import PropertyThumbSlider from "@/components/shared/PropertyThumbSlider";
import PropertyStatsCard from "@/components/shared/PropertyStatCard";
import PropertyHighlightCard from "@/components/shared/PropertyHighlightCard";
import PropertyVideoPreviewCard from "@/components/shared/PropertyVideoPreviewCard";
import PropertyDetails from "@/components/shared/PropertyDetails";
import PropertyAdress from "@/components/shared/PropertyAdress";
import PropertyPrice from "@/components/shared/PropertyPrice";
import { ArrowRight } from "lucide-react";

const BestPropertiesShowcase = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* section-heading  */}
          <Heading
            heading="Best Properties"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* section-content  */}
          <main>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-[30px]">
              {/* col1  */}
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[15px]">
                <div className="lg:col-span-2 relative">
                  <PropertyThumbSlider data={BestPropertiesShowcaseContent} />
                </div>

                <PropertyStatsCard
                  className="bg-black-primary text-white"
                  isButton={true}
                  buttonLink="/"
                  buttonIcon={<ArrowRight size={20} strokeWidth={1} />}
                  buttonVariant="v3"
                  title1="280+"
                  title2="properties"
                  discription="Explore our wide variety of properties to fid your dream home today"
                />

                <PropertyVideoPreviewCard />
              </div>

              {/* col2  */}
              <PropertyHighlightCard
                imgSrc="bp3.webp"
                isForSle={true}
                isFeatured={true}
                className="min-h-[700px]"
              >
                <div>
                  <PropertyAdress
                    title="Villa One Hyde Park"
                    adress="2050 Bloomingdale Ave"
                    className="pb-[29px]"
                  />

                  <div className="flex items-center">
                    <PropertyPrice
                      className="text-white"
                      isMonthly={false}
                      price="$200,0000"
                    />
                    <PropertyDetails
                      data={PropertyHighlightCardContent}
                      className="bg-transparent p-0 pl-[59px]"
                      priceStyles="text-white pr-[60px]"
                      veryChildStyles="border-white/30"
                    />
                  </div>
                </div>
              </PropertyHighlightCard>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default BestPropertiesShowcase;
