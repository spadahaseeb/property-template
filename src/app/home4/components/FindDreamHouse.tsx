import { FindDreamHouseContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";
import FindDreamHouseCard from "@/app/home4/components/FindDreamHouseCard";

const FindDreamHouse = () => {
  return (
    <>
      <section className="py-[165px]">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Find Your Dream House as Easy as 1,2,3"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px] max-w-[750px] m-auto"
            className="pb-10 text-center"
          />

          <main className="flex items-center justify-center gap-[50px]">
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
