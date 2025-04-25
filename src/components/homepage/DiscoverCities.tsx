// components
import Heading from "@/components/Heading";
import { DiscoverCitiesContent } from "@/components/homepage/content/content";

const DiscoverCities = () => {
  return (
    <>
      <section className="py-[165px]">
        <div className="container">
          {/* section-heading  */}
          <Heading
            heading="Find Properties in These Cities"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* section content  */}
          <main>
            <div className="grid grid-cols-1 xxl:grid-cols-4 md:grid-cols-2 gap-[30px]">
              {DiscoverCitiesContent.map((card, index) => {
                let layoutClass = "";
                if (index === 0 || index === 5) {
                  layoutClass = "md:col-span-2 ";
                } else {
                  layoutClass = "min-w-[327px]";
                }
                return (
                  <div
                    key={index}
                    style={{ backgroundImage: `url('/images/${card.image}')` }}
                    className={`rounded-medium overflow-hidden bg-no-repeat bg-cover bg-center h-[395px] ${layoutClass}`}
                  >
                    <div className="text-white p-[45px_0_0_50px] w-full h-full bg-gradient-to-b from-black-primary/80 via-black-primary/10 to-black/0">
                      <p className="font-normal text-16 pb-[10px]">
                        {card.properties} properties
                      </p>
                      <h4 className="font-medium text-[21px]">{card.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default DiscoverCities;
