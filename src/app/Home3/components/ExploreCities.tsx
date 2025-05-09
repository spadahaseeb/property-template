import { ExploreCitiesContent } from "@/app/Home3/assets/content";
// components
import Heading from "@/components/shared/Heading";
import PropertyCityCard from "@/components/shared/PropertyCityCard";

const ExploreCities = () => {
  return (
    <>
      <section className="section-spacing bg-white-muted">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Explore Cities"
              discription="Lorem ipsum dolor sit amet"
              headingStyles="pb-[5px]"
              className="pb-[30px]"
            />
          </div>

          <main className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] text-black">
            {ExploreCitiesContent.map((item) => (
              <div key={item.title}>
                <PropertyCityCard data={item} contentInside={false} />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default ExploreCities;
