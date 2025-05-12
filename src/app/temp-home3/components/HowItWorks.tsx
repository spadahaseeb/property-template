import Image from "next/image";
// components
import Heading from "@/components/shared/Heading";
import { ServicesContent } from "@/app/home3/assets/content";

const HowItWorks = () => {
  return (
    <>
      <section className="lg:pb-[165px] md:pb-[100px] pb-[60px]">
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
          <main className="lg:grid xl:grid-cols-2 grid-cols-1 gap-[30px] items-center flex flex-col-reverse">
            {/* services  */}
            <div className="flex gap-[30px] items-center xl:block h-[max-content] lg:pl-[47px] lg:border-white-warm border-transparent border-l-3 justify-center flex-wrap lg:flex-nowrap max-w-[720px] lg:max-w-full pt-10 lg:pt-0">
              {ServicesContent.map((item) => (
                <div
                  key={item.title}
                  className="lg:py-10 lg:max-w-[453px] max-w-[320px]"
                >
                  {/* icon  */}
                  <div className="pb-5 flex flex-col items-center lg:block">
                    <item.icon
                      size={35}
                      strokeWidth={1}
                      className="relative z-10"
                    />
                  </div>

                  {/* service-text  */}
                  <div className="lg:text-left text-center">
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
                className="w-full xl:h-[max-content] h-[500px] object-cover rounded-md"
              />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
