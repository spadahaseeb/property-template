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
            className="flex  md:flex-row flex-col items-center
           justify-between px-[50px] md:px-0"
          >
            {/* section heading  */}
            <Heading
              heading="Become a Real Estate Agent"
              discription="We only work with the best companies around the globe"
              className="font-medium text-center md:text-left"
              spacing="text-[30px] leading-8 pb-[10px]"
            />

            {/* section content  */}
            <Button
              buttonText="register now"
              buttonIcon={<ArrowRight size={20} strokeWidth={1.2} />}
              buttonIconStyle="ml-2"
              variant="v2"
              linkEnable={true}
              buttonLink="/"
              className="mt-[30px] md:mt-0"
              hover={true}
            />
          </main>
        </div>
      </section>
    </>
  );
};
export default AgentCTA;
