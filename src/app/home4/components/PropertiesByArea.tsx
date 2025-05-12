import Image from "next/image";
// components
import Heading from "@/components/shared/Heading";
import { PropertiesByAreaContent } from "@/app/home4/assets/content";

const PropertiesByArea = () => {
  return (
    <>
      <section className="">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Properties by Area"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            discriptionStyles="pb-10"
            className="text-center m-auto"
          />

          <main className="grid lg:gap-x-[30px] lg:gap-y-[50px] gap-[30px] xxl:grid-cols-3 xmd:grid-cols-2 grid-cols-1">
            {PropertiesByAreaContent.map((item) => (
              <div
                className="xxl:max-w-[446px] max-w-full h-[100px] rounded-md flex items-center border-black-secondary/30 border-1 xxl:border-transparent"
                key={item.title}
              >
                <div className="w-[100px] h-[100px]">
                  <Image
                    src={`/images/${item.image}`}
                    alt="city-image"
                    width={100}
                    height={100}
                    className="object-cover rounded-md h-full"
                  />
                </div>

                <div className="pl-[30px]">
                  <h4 className="font-medium text-[19px] capitalize pb-[2px]">
                    {item.title}
                  </h4>
                  <p className="text-[13px] font-normal">
                    {item.properties} properties
                  </p>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default PropertiesByArea;
