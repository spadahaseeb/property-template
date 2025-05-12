import Image from "next/image";
import { WhyChooseUsContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-white-warm section-spacing">
        <div className="container">
          <main className="grid xxl:grid-cols-2 grid-cols-1 items-center">
            {/* images  */}
            <div className="flex xmd:flex-row flex-col-reverse gap-5 m-auto">
              <div className="flex flex-col items-end gap-5 relative">
                <Image
                  src={"/images/hom4chooseus1.webp"}
                  alt="choose-us preview"
                  width={309}
                  height={350}
                  className="h-auto rounded-md xmd:max-w-[309px] max-w-[400px] w-full"
                />
                <Image
                  src={"/images/hom4chooseus2.webp"}
                  alt="choose-us preview"
                  width={209}
                  height={182}
                  className="h-auto rounded-md xmd:static absolute z-10 bottom-[10px] left-[10px]
                  sm:w-[209px] w-[180px]"
                />
              </div>

              <Image
                src={"/images/hom4chooseus3.webp"}
                alt="choose-us preview"
                width={400}
                height={474}
                className="h-auto rounded-md xxl:mt-[140px]"
              />
            </div>

            {/* heading/ text content  */}
            <div className="xxl:pl-[128px] m-auto xxl:m-0 pt-[70px] xxl:pt-0">
              <Heading
                heading="Why You Should Work With Us"
                discription="Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam."
                headingStyles="xxl:max-w-[391px] md:max-w-[550px] max-w-[290px] md:leading-[52px] leading-[42px] pb-5 m-auto xxl:m-0"
                discriptionStyles="xxl:max-w-[436px] max-w-[370px] xxl:pb-5 pb-10 m-auto xxl:m-0"
                className="xxl:text-left text-center"
              />

              <ul className="grid sm:grid-cols-2 grid-cols-1 gap-[22px]">
                {WhyChooseUsContent.map((item) => (
                  <li
                    className="flex items-center m-auto sm:m-0"
                    key={item.text}
                  >
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
