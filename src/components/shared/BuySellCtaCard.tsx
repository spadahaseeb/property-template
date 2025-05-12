import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BuySellCtaCardPropType } from "@/app/Home4/assets/types";
// components
import Button from "@/components/shared/Button";

const BuySellCtaCard = ({ data, className }: BuySellCtaCardPropType) => {
  return (
    <>
      <div
        className={twMerge(
          "pl-[70px] pt-[69px] pr-10 pb-[70px] flex items-end justify-between",
          className
        )}
      >
        <div>
          <h5 className="leading-[33px] text-[26px] font-medium pb-5 max-w-[230px]">
            {data.title}
          </h5>
          <p className="leading-[30px] text-regular pb-[19px] max-w-[378px]">
            {data.discription}
          </p>
          <Button
            buttonText={data.buttonText}
            buttonIcon={
              <data.buttonIcon className="text-white w-[18px] h-[18px]" />
            }
            buttonLink={data.buttonLink}
            variant="v2"
            className="bg-black-deep w-[163px] h-[54px] text-white"
            hover={true}
          />
        </div>

        <div>
          <Image
            src={`/images/${data.imgSrc}`}
            alt="cta-image"
            width={130}
            height={131}
          />
        </div>
      </div>
    </>
  );
};

export default BuySellCtaCard;
