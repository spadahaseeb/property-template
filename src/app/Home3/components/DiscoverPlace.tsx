// components

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const DiscoverPlace = () => {
  return (
    <>
      <section className="py-[220px] relative">
        {/* background-image  */}
        <div className="absolute top-0 left-0 right-0 bottom-0s">
          <Image
            src={"/images/DiscoverPlace.png"}
            alt="discover-place background"
            width={1920}
            height={700}
            className="w-full h-[max-content]"
          />
        </div>

        {/* heading  */}
        <div
          className="lg:max-w-[610px] md:max-w-[450px] xs:max-w-[300px] max-w-[250px] 
          w-full m-auto relative z-10 text-center"
        >
          <h1
            className="text-center lg:text-[60px] md:text-[48px] xs:text-[38px] text-[30px] 
            pb-5 font-medium md:leading-[78px] xs:leading-[60px] leading-[50px]"
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
              className="bg-blue-primary normal-case text-white w-[191px] h-[54px]"
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
