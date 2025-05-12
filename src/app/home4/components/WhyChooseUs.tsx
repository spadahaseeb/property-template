import Image from "next/image";
import { WhyChooseUsContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-white-warm section-spacing">
        <div className="container">
          <main className="grid grid-cols-2 items-center">
            {/* images  */}
            <div className="flex gap-5">
              <div className="flex flex-col items-end gap-5">
                <Image
                  src={"/images/hom4chooseus1.png"}
                  alt="choose-us preview"
                  width={309}
                  height={350}
                  className="h-auto rounded-md"
                />
                <Image
                  src={"/images/hom4chooseus2.png"}
                  alt="choose-us preview"
                  width={209}
                  height={182}
                  className="h-auto rounded-md"
                />
              </div>

              <Image
                src={"/images/hom4chooseus3.png"}
                alt="choose-us preview"
                width={400}
                height={474}
                className="h-auto rounded-md mt-[140px]"
              />
            </div>

            {/* heading/ text content  */}
            <div className="pl-[128px]">
              <Heading
                heading="Why You Should Work With Us"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam."
                headingStyles="max-w-[391px] leading-[52px] pb-5"
                discriptionStyles="max-w-[436px] pb-5"
                className="text-left"
              />

              <ul className="grid grid-cols-2 gap-[22px]">
                {WhyChooseUsContent.map((item) => (
                  <li className="flex items-center" key={item.text}>
                    <Image
                      src={`/images/${item.imgSrc}`}
                      alt="check-icon"
                      width={30}
                      height={30}
                    />
                    <p className="pl-[14px] text-regular">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
