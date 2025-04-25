// components

import Heading from "@/components/Heading";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const AgentCTA = () => {
  return (
    <>
      <section className="bg-white-warm rounded-medium py-[104px] mb-5">
        <div className="container">
          {/* section heading  */}
          <Heading />

          {/* section content  */}
          <main className="flex items-center justify-between md:flex-row xs:flex-col">
            <div>
              <h5 className="font-medium text-[30px] leading-8 pb-[10px]">
                Become a Real Estate Agent
              </h5>
              <p className="font-normal text-[17] leading-8">
                We only work with the best companies around the globe
              </p>
            </div>

            <Button
              buttonText="register now"
              buttonIcon={<ArrowRight size={20} strokeWidth={1.2} />}
              buttonIconStyle="ml-2"
              variant="v2"
              linkEnable={true}
              buttonLink="/"
              className="xs:mt-[30px] md:mt-0"
            />
          </main>
        </div>
      </section>
    </>
  );
};
export default AgentCTA;
