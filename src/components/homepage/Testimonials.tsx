import Image from "next/image";
// components
import Stats from "@/components/Stats";
import Heading from "@/components/Heading";
import Review from "@/components/homepage/Review";
import TrustedBy from "@/components/homepage/TrustedBy";

const Testimonials = () => {
  return (
    <>
      <section className="pt-[187px] pb-[155px]">
        <div className="container">
          {/* heading & review wrapper  */}
          <div className="grid grid-cols-2 gap-5 pb-20">
            {/* heading content  */}
            <div className="max-w-[450px]">
              <Heading
                heading="What our customers are saying us?"
                discription="Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like."
                className="pb-5 text-left"
                spacing="pb-5"
              />

              {/* stats  */}
              <div className="flex items-center gap-[68px]">
                <Stats stat={"10m+"} statDiscription={"happy people"} />
                <Stats stat={"4.88"} statDiscription={"overall rating"}>
                  <Image
                    src={"/images/stars.png"}
                    alt={"rating"}
                    width={78}
                    height={10}
                    className="pt-[7px]"
                  />
                </Stats>
              </div>
            </div>

            {/* review content  */}
            <Review />
          </div>
        </div>

        {/* trusted by section  */}
        <hr className="w-full h-[1px] border-none bg-black-primary/15" />
        <div className="container">
          <TrustedBy />
        </div>
      </section>
    </>
  );
};
export default Testimonials;
