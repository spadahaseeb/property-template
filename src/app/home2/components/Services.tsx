// components
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import { ServicesContent } from "@/app/home2/assets/content";

const Services = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <main className="flex xl:items-center justify-between gap-[89px] flex-col xl:flex-row">
            {/* services-image  */}
            <div>
              <Image
                src={"/images/services.webp"}
                alt="services-background"
                width={780}
                height={818}
                className="xxl:w-[781px] sm:w-[600px] w-full"
              />
            </div>

            {/* heading & text content  */}
            <div>
              {/* heading-content  */}
              <Heading
                heading="How It works?<br />Find a perfect home"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam."
                headingStyles="pb-5"
                className="pb-[30px] sm:max-w-[436px] sm:text-left text-center w-full"
              />

              {/* services-content  */}
              {ServicesContent.map((item) => (
                <div
                  className="flex sm:flex-row flex-col items-center sm:items-start pt-10 sm:pt-0"
                  key={item.title}
                >
                  {/* icon  */}
                  <div className="relative">
                    <span className="absolute top-0 left-0 w-[30px] h-[30px] bg-accent-gold rounded-full translate-x-[-30%] translate-y-[45%]"></span>
                    <item.icon
                      size={35}
                      strokeWidth={1}
                      className="relative z-10"
                    />
                  </div>

                  {/* service-text  */}
                  <div className="pl-5 pb-[29px] text-center sm:text-left">
                    <h5 className="text-[21px] font-medium capitalize">
                      {item.title}
                    </h5>
                    <p className="leading-7">{item.discription}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Services;
