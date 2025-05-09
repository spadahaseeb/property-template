import Image from "next/image";
// componnets
import PropertySearchBar from "@/components/shared/PropertySearchBar";

const Hero = () => {
  return (
    <>
      <section className="pt-[275px] pb-[274px] relative text-black">
        {/* background-image  */}
        <div className="w-full h-full absolute top-0 left-0 right-0">
          <Image
            src={"/images/background3.png"}
            alt="background3"
            className="w-full h-full object-cover"
            width={1920}
            height={700}
            priority
          />
        </div>

        <div className="container relative">
          {/* heading-content  */}
          <div className="text-center m-auto w-[max-content]">
            <h1 className="lg:text-[60px] md:text-[50px] text-[40px] md:leading-[78px] leading-[60px] normal-case pb-[35px]">
              The <span className="text-blue-primary">#1</span> site real estate
              <br />
              professionals trust*
            </h1>
            <p className="text-[17px] font-normal pb-[35px] leading-8">
              From as low as $10 per day with limited time offer discounts.
            </p>
          </div>

          {/* search bar & tabs content  */}
          <div>
            <PropertySearchBar
              isTabEnable={true}
              TabsTriggerStyles="data-[state=active]:border-black"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
