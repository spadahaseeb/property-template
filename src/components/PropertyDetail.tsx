import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// types
type propertyDetailPropsType = {
  className?: string;
  detail: string;
  icon: ReactNode;
};

// component
const PropertyDetail = ({
  detail,
  className,
  icon,
}: propertyDetailPropsType) => {
  return (
    <>
      <li
        className={twMerge(
          "flex items-center list-none text-[16px] xs:gap-[10px] gap-1",
          className
        )}
      >
        <span>{icon}</span>
        {detail}
      </li>
    </>
  );
};
export default PropertyDetail;
