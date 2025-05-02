// components

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const AgentCTA = () => {
  return (
    <>
      <section className="bg-white-warm rounded-medium lg:py-[104px] py-[70px] mb-5">
        <div className="container">
          <main
            className="flex xmd:flex-row flex-col items-center
           justify-between px-[50px] md:px-0"
          >
            {/* section heading  */}
            <Heading
              heading="Become a Real Estate Agent"
              discription="We only work with the best companies around the globe"
              className="font-medium xmd:text-left text-center"
              spacing="text-[30px] leading-8 pb-[10px]"
            />

            {/* section content  */}

            <Button
              hover={true}
              variant="v2"
              buttonText="register now"
              isLinkEnable={true}
              buttonLink="/"
              buttonIcon={<ArrowRight size={18} strokeWidth={1.2} />}
              className="w-[174px] h-[54px] mt-[25px] xmd:mt-0"
            />
          </main>
        </div>
      </section>
    </>
  );
};
export default AgentCTA;
