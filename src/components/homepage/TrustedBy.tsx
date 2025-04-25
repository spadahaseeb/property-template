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

        <div className="grid grid-cols-3 justify-items-center lg:grid-cols-4 xl:grid-cols-6 m-auto justify-between items-center gap-[30px]">
          {TrustedByContent.map((elem: any, index: number) => (
            <Image
              src={`/images/${elem.src}`}
              alt={elem.alt}
              key={index}
              width={100}
              height={100}
              className="w-[90px] h-[max-content]"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustBy;
