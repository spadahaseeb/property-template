// components

import Heading from "@/components/shared/Heading";
import Image from "next/image";
import { ServicesContent } from "../assets/content";

const HowItWorks = () => {
  return (
    <>
      <section className="pb-[165px]">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="How It works? Find a perfect home"
              discription="Lorem ipsum dolor sit amet"
              headingStyles="pb-[5px]"
              className="pb-10"
            />
          </div>

          {/* section-content  */}
          <main className="grid grid-cols-2 gap-[30px] items-center">
            {/* services  */}
            <div className="max-w-[453px] h-[max-content] pl-[47px] border-white-warm border-l-3">
              {ServicesContent.map((item) => (
                <div key={item.title} className="py-10">
                  {/* icon  */}
                  <div className="pb-5">
                    <item.icon
                      size={35}
                      strokeWidth={1}
                      className="relative z-10"
                    />
                  </div>

                  {/* service-text  */}
                  <div className="text-center sm:text-left">
                    <h5 className="text-[21px] font-medium capitalize">
                      {item.title}
                    </h5>
                    <p className="leading-7">{item.discription}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* image  */}
            <div>
              <Image
                src={"/images/services3.png"}
                alt="services-background"
                width={685}
                height={748}
                className="w-full h-[max-content] object-cover rounded-md"
              />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
