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
          "flex items-center list-none text-[16px] gap-[10px]",
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
