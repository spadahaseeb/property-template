// components
import { FeatureItemPropType } from "@/assets/types";
import { twMerge } from "tailwind-merge";

// types

const FeatureItem = ({
  featureIcon,
  featureTitle,
  discription,
  className,
}: FeatureItemPropType) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center text-center",
        className
      )}
    >
      <span className="mb-[26px] inline-reset">{featureIcon}</span>
      <h5 className="font-roboto font-medium text-[20px] leading-[22.8px] pb-[14px]">
        {featureTitle}
      </h5>
      <p className="font-normal font-roboto text-[15px] leading-[28.5px]">
        {discription}
      </p>
    </div>
  );
};

export default FeatureItem;
