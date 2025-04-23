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
      <section className="py-[165px]">
        <div className="container">
          {/* section-heading  */}
          <Heading
            heading="Best Properties"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* section-content  */}
          <main>
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="grid grid-cols-2 gap-[30px]">
                <Thumbnail
                  image="bp1.jfif"
                  className="col-span-2 min-h-[330px]"
                />
                <PropertyStatsCard />

                <Thumbnail
                  image="bp2.png"
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
                  />
                </Thumbnail>
              </div>

              <PropertyHighlightCard isForSle={true} isFeatured={true} />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default BestPropertiesShowcase;
