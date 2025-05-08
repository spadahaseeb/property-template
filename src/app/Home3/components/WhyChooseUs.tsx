// components
import Heading from "@/components/shared/Heading";
import Thumbnail from "@/components/shared/Thumbnail";

const WhyChooseUs = () => {
  return (
    <>
      <section className="py-[165px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Thumbnail image="chooseus3.png" className="w-full h-[685px]" />
            </div>

            <div className="pl-[130px]">
              <Heading
                heading="Why You Should Work With Us"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non."
                headingStyles="max-w-[391px] pb-5"
                discriptionStyles="max-w-[556px] leading-[30px] pb-10"
                className="text-left"
              />

              <div className="gap-[55px] flex">
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
