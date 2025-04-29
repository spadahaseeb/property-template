import { Play } from "lucide-react";
// components
import Heading from "@/components/Heading";
import Thumbnail from "@/components/Thumbnail";
import Button from "@/components/Button";
import PropertyStatsCard from "@/components/PropertyStatsCard";
import PropertyHighlightCard from "@/components/PropertyHighlightCard";

const BestPropertiesShowcase = () => {
  return (
    <>
      <section className="lg:py-[165px] py-[90px]">
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
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[15px]">
                <Thumbnail
                  image="bp1.webp"
                  className="lg:col-span-2 min-h-[330px]"
                />
                <PropertyStatsCard />

                <Thumbnail
                  image="bp2.webp"
                  className="min-h-[330px] flex items-center justify-center"
                >
                  <Button
                    buttonIcon={
                      <Play
                        size={23}
                        strokeWidth={0.8}
                        className="text-white"
                      />
                    }
                    variant="v3"
                    className="bg-black-primary/20"
                    linkEnable={true}
                    buttonLink="/"
                  />
                </Thumbnail>
              </div>

              <a href="#" className="duration-300 ease-out hover:scale-[1.01]">
                <PropertyHighlightCard
                  isForSle={true}
                  isFeatured={true}
                  className="min-h-[450px]"
                />
              </a>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default BestPropertiesShowcase;
