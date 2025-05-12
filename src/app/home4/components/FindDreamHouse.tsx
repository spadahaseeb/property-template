import { FindDreamHouseContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";
import FindDreamHouseCard from "@/app/home4/components/FindDreamHouseCard";

const FindDreamHouse = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Find Your Dream House as Easy as 1,2,3"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            className="xmd:pb-10 pb-20 text-center xmd:max-w-[750px] md:max-w-[360px] max-w-[280px] m-auto"
          />

          <main className="flex justify-center items-center flex-wrap gap-[50px] m-auto xl:max-w-[1110px] xmd:max-w-[722px] max-w-[380px]">
            {FindDreamHouseContent.map((item) => (
              <div key={item.imgSrc}>
                <FindDreamHouseCard data={item} />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default FindDreamHouse;
