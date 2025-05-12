// components
import Heading from "@/components/shared/Heading";
import Thumbnail from "@/components/shared/Thumbnail";

const WhyChooseUs = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <div className="xxl:grid grid-cols-2 items-center flex flex-col">
            <div>
              <Thumbnail
                image="chooseus3.webp"
                className="w-full xxl:h-[685px]"
              />
            </div>

            <div className="xxl:pl-[130px] pt-10">
              <Heading
                heading="Why You Should Work With Us"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non."
                headingStyles="m-auto max-w-[391px] pb-5 xxl:m-0"
                discriptionStyles="max-w-[556px] leading-[30px] xxl:pb-10 pb-20 m-auto zzl:m-0"
                className="xxl:text-left text-center m-auto xxl:m-0"
              />

              <div className="xxl:gap-[55px] flex justify-center xxl:justify-start text-center xxl:text-left flex-col xxl:flex-row gap-5">
                <div className="pb-10">
                  <h5 className="pb-[19px] text-[21px] font-medium">
                    Buy or Rent Homes
                  </h5>
                  <p className="font-normal text-[15px] leading-7">
                    We sell your home at the best market price and very quickly
                    as well.
                  </p>
                </div>

                <div className="pb-10">
                  <h5 className="pb-[19px] text-[21px] font-medium">
                    Buy or Rent Homes
                  </h5>
                  <p className="font-normal text-[15px] leading-7">
                    We sell your home at the best market price and very quickly
                    as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
