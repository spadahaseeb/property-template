import Image from "next/image";
// components
import { TrustedByContent } from "@/components/homepage/content/content";

const TrustBy = () => {
  return (
    <>
      <div className="text-center pt-[75px]">
        <p className="font-normal text-[17px] leading-8 pb-[30px]">
          Thousands of world’s leading companies trust Space
        </p>

        <div className="justify-items-center grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[30px] place-items-center pt-10 sm:pt-0">
          {TrustedByContent.map((elem) => (
            <Image
              src={`/images/${elem.src}`}
              alt={elem.alt}
              key={elem.src}
              width={elem.width}
              height={elem.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustBy;
