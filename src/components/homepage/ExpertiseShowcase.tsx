import Image from "next/image";
import { ArrowRight } from "lucide-react";
// components
import Thumbnail from "@/components/Thumbnail";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ExpertiseStats from "@/components/homepage/ExpertiseStats";

const ExpertiseShowcase = () => {
  return (
    <>
      <section className="py-[165px] bg-black-deep text-white rounded-medium overflow-hidden">
        <div className="container">
          <main className="grid grid-cols-1 xl:grid-cols-2 items-center pb-20 ">
            {/* image with-label  */}
            <Thumbnail
              image="expertise.png"
              className=" h-[640px] xl:w-[640px] w-full p-[25px] bg-top xl:bg-center"
            >
              <Image
                src={"/images/totalclients.png"}
                width={255}
                height={100}
                alt="total-clients"
              />
            </Thumbnail>

            {/* heading content  */}
            <div className="xl:pl-[185px] pt-[60px] xl:pt-0">
              <Heading
                heading="Local expertise for luxury homes"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                egestas ut morbi. Leo diam diam nibh eget fermentum massa
                pretium. Mi mauris nulla ac dictum ut mauris non."
                className="pb-5 text-left"
                spacing="pb-[20px]"
              />
              <Button
                buttonText="Learn more"
                buttonIcon={<ArrowRight size={20} strokeWidth={1.3} />}
                buttonIconStyle="pl-2"
                variant="v2"
                linkEnable={true}
                buttonLink="/"
              />
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
