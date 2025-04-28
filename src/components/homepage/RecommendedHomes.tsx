// components
import Heading from "@/components/Heading";
import PropertyCard from "@/components/PropertyCard";
import { RecommendedHomesContent } from "@/components/homepage/content/content";

const RecommendedHomes = () => {
  return (
    <>
      <section className="bg-white-soft rounded-medium lg:py-[165px] py-[90px]">
        <div className="container">
          <div>
            {/* section-heading */}
            <Heading
              heading="foryou homes"
              discription="based on your view history."
              className="pb-[30px]"
            />

            {/* content */}
            <main className="xl:gap-[30px] gap-[20px] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center">
              {RecommendedHomesContent.map((item, idx) => (
                <PropertyCard
                  key={idx}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                  isForSale={item.isForSale}
                  isFeatured={item.isFeatured}
                />
              ))}
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
export default RecommendedHomes;
