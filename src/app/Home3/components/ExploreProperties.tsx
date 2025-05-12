import { ExplorePropertiesContent } from "@/app/Home3/assets/content";
// components
import Heading from "@/components/shared/Heading";
import PropertyCityCard from "@/components/shared/PropertyCityCard";

const ExploreProperties = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Explore Our Properties"
              discription="Lorem ipsum dolor sit amet"
              headingStyles="pb-[5px]"
              className="text-center pb-5"
            />
          </div>

          {/* section-content  */}
          <main className="grid xxl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] text-black">
            {ExplorePropertiesContent.map((item) => (
              <div key={item.title}>
                <PropertyCityCard data={item} contentInside={true} />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default ExploreProperties;
