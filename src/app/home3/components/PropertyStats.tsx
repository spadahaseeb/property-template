// components
import Heading from "@/components/shared/Heading";
import PropertyStatsCard from "@/components/shared/PropertyStatCard";
import { PropertyStatsContent } from "@/app/home3/assets/content";

const PropertyStats = () => {
  return (
    <>
      <section className="pt-[15px] lg:pb-pb-[179px] md:pb-[100x] pb-[60px]">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Our mission is to redefine real estate in the customer's favor."
              discription="Lorem ipsum dolor sit amet"
              headingStyles="pb-[5px]"
              className="pb-10 max-w-[656px] normal-case text-center m-auto"
            />
          </div>

          {/* section-content  */}
          <main className="grid xxl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {PropertyStatsContent.map((item) => (
              <div key={item.title1}>
                <PropertyStatsCard
                  className="bg-white-muted text-black xxl:w-[327px]"
                  title1={item.title1}
                  title2={item.title2}
                  discription={item.discription}
                  discriptionStyles="pb-[31px]"
                  title1Styles="pb-[39px] text-red-500"
                  title2Styles="pb-[19px]"
                />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default PropertyStats;
