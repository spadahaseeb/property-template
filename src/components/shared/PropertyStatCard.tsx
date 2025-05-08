import { ArrowRight } from "lucide-react";
// components
import Button from "@/components/shared/Button";
import { twMerge } from "tailwind-merge";
import { PropertyStatsCardPropType } from "@/assets/types";

const PropertyStatsCard = ({ className }: PropertyStatsCardPropType) => {
  return (
    <>
      <div
        className={twMerge(
          "min-h-[329px] h-full w-full bg-accent-gold text-black rounded-medium flex p-10 flex-col justify-between",
          className
        )}
      >
        <div>
          <span className="font-medium text-[40px] font-roboto pb-[5px]">
            280+
          </span>
          <h6 className="text-[19px] font-normal pb-5">properties</h6>
          <p className="pb-10 font-roboto font-normal text-16 leading-7">
            Explore our wide variety of properties to find your dream home today
          </p>
        </div>

        <div className="flex items-center justify-end">
          <Button
            buttonIcon={<ArrowRight size={20} strokeWidth={1} />}
            variant="v3"
            className="bg-black-primary/20 bg-white text-black"
            buttonIconStyles="p-0"
            isLinkEnable={true}
            buttonLink="/"
          />
        </div>
      </div>
    </>
  );
};

export default PropertyStatsCard;
