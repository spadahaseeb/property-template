import Image from "next/image";
import { ArrowRight } from "lucide-react";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";
import ExpertiseStats from "@/components/homepage/ExpertiseStats";

const ExpertiseShowcase = () => {
  return (
    <>
      <section className="section-spacing bg-black-deep text-white rounded-medium overflow-hidden">
        <div className="container">
          <main className="grid lg:grid-cols-2 grid-cols-1 items-center pb-20">
            {/* image with-label  */}
            <Thumbnail
              image="expertise.webp"
              className="md:h-[638px] h-full min-h-[400px] w-full p-[25px]"
              background={true}
            >
              <Image
                src={"/images/totalclients.webp"}
                width={170}
                height={100}
                alt="total-clients"
                className="md:w-[255px] w-[170px] h-auto"
              />
            </Thumbnail>

            {/* heading content  */}
            <div className="lg:pl-[70px] xl:pl-[165px] pt-[30px] lg:pt-0">
              <div className="pb-5">
                <Heading
                  heading="Local expertise for luxury homes"
                  className="pb-5 sm:text-left text-center normal-case sm:max-w-[334px] text-white"
                />
                <Heading
                  className="normal-case max-w-[700px] w-full sm:text-left text-center text-white"
                  discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non."
                />
              </div>

              <div className="m-auto sm:m-0 w-[max-content]">
                <Button
                  hover={true}
                  variant="v2"
                  buttonText="Learn more"
                  isLinkEnable={true}
                  buttonLink="/"
                  buttonIcon={<ArrowRight size={18} strokeWidth={1.2} />}
                  className="lg:w-[161px] lg:h-[54px] w-[120px] h-[32px] text-[11px] lg:text-[15px]"
                />
              </div>
            </div>
          </main>

          {/* stats  */}
          <ExpertiseStats />
        </div>
      </section>
    </>
  );
};
export default ExpertiseShowcase;
