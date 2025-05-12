// components
import { PopularMarketsContent } from "@/app/home2/assets/content";
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";

const PopularMarkets = () => {
  return (
    <>
      <section className="lg:pb-[165px] sm:pb-[100px] pb-[70px]">
        <main className="container">
          {/* heading-content  */}
          <Heading
            heading="Popular Real Estate Markets"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* markets-content */}
          <div className="flex flex-wrap justify-center md:gap-5 gap-[15px]">
            {PopularMarketsContent.map((location) => (
              <>
                <Button
                  key={location}
                  buttonText={location}
                  variant="v5"
                  hover={false}
                  className="lg:py-[10px] lg:px-[25px] py-[5px] px-[12px] text-[12px] lg:text-15px"
                />
              </>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default PopularMarkets;
