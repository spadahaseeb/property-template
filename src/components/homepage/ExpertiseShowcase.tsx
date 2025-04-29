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
      <section className="lg:py-[165px] py-[90px] bg-black-deep text-white rounded-medium overflow-hidden">
        <div className="container">
          <main className="grid lg:grid-cols-2 grid-cols-1 items-center pb-20">
            {/* image with-label  */}
            <Thumbnail
              image="expertise.webp"
              className="md:h-[640px] h-[500px] w-full p-[25px]"
            >
              <Image
                src={"/images/totalclients.webp"}
                width={255}
                height={100}
                alt="total-clients"
                className="md:w-[255px] w-[170px]"
              />
            </Thumbnail>

            {/* heading content  */}
            <div className="lg:pl-[70px] xl:pl-[185px] pt-[30px] lg:pt-0">
              <Heading
                heading="Local expertise for luxury homes"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                egestas ut morbi. Leo diam diam nibh eget fermentum massa
                pretium. Mi mauris nulla ac dictum ut mauris non."
                className="pb-5 md:text-left text-center"
                spacing="pb-[20px]"
              />
              <Button
                buttonText="Learn more"
                buttonIcon={<ArrowRight size={20} strokeWidth={1.3} />}
                buttonIconStyle="pl-2"
                variant="v2"
                linkEnable={true}
                buttonLink="/"
                className="w-[max-content] m-auto md:m-0"
                hover={true}
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
