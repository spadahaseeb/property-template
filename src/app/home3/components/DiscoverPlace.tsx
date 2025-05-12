import Image from "next/image";
import { ArrowRight } from "lucide-react";
// components
import Button from "@/components/shared/Button";

const DiscoverPlace = () => {
  return (
    <>
      <section className="relative xl:py-[220px] lg:py-[150px] md:py-[100px] py-[70px]">
        {/* background-image  */}
        <div className="absolute inset-0">
          <Image
            fill
            src="/images/DiscoverPlace.webp"
            alt="discover-place background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* heading  */}
        <div
          className="lg:max-w-[610px] md:max-w-[450px] xs:max-w-[300px] max-w-[250px] 
          w-full m-auto relative z-10 text-center"
        >
          <h1
            className="text-center lg:text-[60px] md:text-[48px] xs:text-[38px] text-[30px] 
            pb-5 font-medium md:leading-[78px] lg:leading-[60px] leading-[45px]"
          >
            Discover a place {"you'll"} love to live
          </h1>
          <p className="max-w-[475px] m-auto leading-[30px] pb-5">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam
          </p>

          {/* button  */}
          <div className="flex justify-center m-auto">
            <Button
              variant="v2"
              className="w-[140px] h-[38px] text-[11px] bg-blue-primary normal-case text-white lg:w-[191px] lg:h-[54px] lg:text-[15px]"
              buttonText="View Properties"
              buttonIcon={<ArrowRight size={18} strokeWidth={1} />}
              isLinkEnable={true}
              buttonLink="/"
              hover={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default DiscoverPlace;
