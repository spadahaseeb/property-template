import Image from "next/image";
// components
import { twMerge } from "tailwind-merge";
import { TrustedByPropType } from "@/assets/types";

const TrustedBy = ({ className, data }: TrustedByPropType) => {
  return (
    <>
      <div className={twMerge("text-center pt-[75px]", className)}>
        <div className="container">
          <p className="font-normal text-[17px] leading-8 pb-[30px]">
            Thousands of world’s leading companies trust Space
          </p>

          <div className="justify-items-center grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[30px] place-items-center pt-10 sm:pt-0">
            {data.map((elem) => (
              <Image
                src={`/images/${elem.src}`}
                alt={elem.alt}
                key={elem.src}
                width={elem.width}
                height={elem.height}
                className={`h-auto`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
