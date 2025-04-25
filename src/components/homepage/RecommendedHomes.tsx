// components
import Heading from "@/components/Heading";
import PropertyCard from "@/components/PropertyCard";
import { RecommendedHomesContent } from "@/components/homepage/content/content";

const RecommendedHomes = () => {
  return (
    <>
      <section className="bg-white-soft rounded-medium py-[165px]">
        <div className="container">
          <div>
            {/* section-heading */}
            <Heading
              heading="foryou homes"
              discription="based on your view history."
              className="pb-[30px]"
            />

            {/* content */}
            <main className="gap-[30px] grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 items-center">
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
