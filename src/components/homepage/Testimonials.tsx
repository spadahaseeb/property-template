import Image from "next/image";
// components
import Stats from "@/components/Stats";
import Heading from "@/components/Heading";
import Review from "@/components/homepage/Review";
import TrustedBy from "@/components/homepage/TrustedBy";

const Testimonials = () => {
  return (
    <>
      <section className="lg:pt-[187px] lg:pb-[155px] py-[90px]">
        <div className="container">
          {/* heading & review wrapper  */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 pb-[76px]">
            {/* heading content  */}
            <div className="xl:max-w-[450px] w-full">
              <Heading
                heading="What our customers are saying us?"
                discription="Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like."
                className="pb-5 xs:text-left text-transform-none"
                spacing="pb-5"
              />

              {/* stats  */}
              <div className="flex xs:gap-[67px] gap-5 w-[max-content] m-auto xs:m-0">
                <Stats stat={"10m+"} statDiscription={"happy people"} />
                <Stats stat={"4.88"} statDiscription={"overall rating"}>
                  <Image
                    src="/images/stars.webp"
                    alt="rating"
                    width={80}
                    height={10}
                    className="pt-[7px] w-[78px] h-auto"
                  />
                </Stats>
              </div>
            </div>

            {/* review content  */}
            <div className="xl:max-w-[600px]">
              <Review />
            </div>
          </div>
        </div>

        {/* trusted by section  */}
        <hr className="w-full h-[1px] border-none outline-none bg-gray-light" />
        <div className="container">
          <TrustedBy />
        </div>
      </section>
    </>
  );
};
export default Testimonials;
