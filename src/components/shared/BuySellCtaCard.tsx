import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BuySellCtaCardPropType } from "@/app/home4/assets/types";
// components
import Button from "@/components/shared/Button";

const BuySellCtaCard = ({ data, className }: BuySellCtaCardPropType) => {
  return (
    <>
      <div
        className={twMerge(
          "md:pl-[70px] md:pt-[69px] md:pr-10 md:pb-[70px] xs:p-10 p-[20px] flex sm:items-end sm:justify-between sm:flex-row flex-col-reverse items-center",
          className
        )}
      >
        <div>
          <h5 className="leading-[33px] text-[26px] font-medium pb-5 max-w-[230px] m-auto sm:m-0 text-center sm:text-left">
            {data.title}
          </h5>
          <p className="leading-[30px] text-regular pb-[19px] max-w-[378px] m-auto sm:m-0 text-center sm:text-left">
            {data.discription}
          </p>
          <Button
            buttonText={data.buttonText}
            buttonIcon={
              <data.buttonIcon className="text-white w-[18px] h-[18px]" />
            }
            buttonLink={data.buttonLink}
            variant="v2"
            className="bg-black-deep w-[163px] h-[54px] text-white m-auto sm:m-0"
            hover={true}
          />
        </div>

        <div>
          <Image
            src={`/images/${data.imgSrc}`}
            alt="cta-image"
            width={130}
            height={131}
            className="md:w-[130px] md:h-[131px] w-[100px] sm:ml-10 mb-5 sm:mb-0"
          />
        </div>
      </div>
    </>
  );
};

export default BuySellCtaCard;
