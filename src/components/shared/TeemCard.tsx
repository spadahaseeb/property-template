import { twMerge } from "tailwind-merge";
// components
import { TeemCardPropType } from "@/app/Home2/assets/types";
import Image from "next/image";

const TeemCard = ({
  imgSrc,
  imgAlt,
  expertName,
  expertBio,
  className,
}: TeemCardPropType) => {
  return (
    <>
      <div
        className={twMerge("w-full h-full capitalize text-black", className)}
      >
        <a href="#">
          <div className="rounded-md overflow-hidden">
            <Image
              src={`/images/${imgSrc}`}
              alt={imgAlt}
              width={329}
              height={398}
              className="object-cover xxl:w-[329px] w-full h-auto"
            />
          </div>
        </a>

        <div className="pt-[19px]">
          <h5 className="text-[21px] font-medium pb-[7px]">
            <a href="#">{expertName}</a>
          </h5>
          <p className="text-[15px] font-normal">{expertBio}</p>
        </div>
      </div>
    </>
  );
};

export default TeemCard;
