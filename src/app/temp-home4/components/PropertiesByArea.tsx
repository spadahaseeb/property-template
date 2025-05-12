import Image from "next/image";
// components
import Heading from "@/components/shared/Heading";
import { PropertiesByAreaContent } from "@/app/home4/assets/content";

const PropertiesByArea = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Properties by Area"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            discriptionStyles="pb-10"
            className="text-center m-auto"
          />

          <main className="grid gap-x-[30px] gap-y-[50px] grid-cols-3">
            {PropertiesByAreaContent.map((item) => (
              <div
                className="max-w-[446px] h-[100px] rounded-md flex items-center"
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
