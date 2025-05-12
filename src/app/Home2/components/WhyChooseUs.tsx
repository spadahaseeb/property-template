// components
import { WhyChooseUsContent } from "@/app/Home2/assets/content";
import Heading from "@/components/shared/Heading";

const WhyChooseUs = () => {
  return (
    <>
      <section className="lg:pb-[190px] lg:pt-[165px] sm:py-[100px] py-[70px]">
        <div className="container">
          {/* heading-content  */}
          <div className=" m-auto xxl:pb-10 pb-[70px]">
            <Heading
              heading="Why You Should Work With Us"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className="sm:w-[max-content] w-[260px] m-auto"
            />
          </div>

          {/* section-content  */}
          <main className="m-auto flex items-center justify-center flex-wrap sm:gap-[61px] gap-[40px] xxl:max-w-[1440px] md:max-w-[750px] max-w-[350px]">
            {WhyChooseUsContent.map((item) => (
              <div key={item.heading}>
                <div className="flex flex-col items-center text-center max-w-[343px]">
                  <div className="pb-[27px]">
                    <item.icon
                      strokeWidth={1}
                      className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                    />
                  </div>

                  <div>
                    <h6 className="pb-[15px] font-medium leading-[21px]">
                      {item.heading}
                    </h6>
                    <p className="text-[15px] font-normal leading-[28px]">
                      {item.discription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
