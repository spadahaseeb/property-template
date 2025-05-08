// components
import { PopularMarketsContent } from "@/app/Home2/assets/content";
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
          <div className="flex flex-wrap justify-center gap-5">
            {PopularMarketsContent.map((location) => (
              <>
                <Button
                  key={location}
                  buttonText={location}
                  variant="v5"
                  hover={false}
                  className="py-[10px] px-[25px]"
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
