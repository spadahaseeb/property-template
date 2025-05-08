import { twMerge } from "tailwind-merge";
// components
import { PropertyPricePropType } from "@/assets/types";

const PropertyPrice = ({
  className,
  isMonthly,
  price,
}: PropertyPricePropType) => {
  return (
    <>
      <p
        className={twMerge(
          "font-semibold text-[21px] leading-8 text-accent-coral",
          className
        )}
      >
        {price}
        {isMonthly && <span className="font-normal text-[14px]">/month</span>}
      </p>
    </>
  );
};

export default PropertyPrice;
