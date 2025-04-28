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
      <li className={twMerge("flex items-center list-none ", className)}>
        <p className="text-[16px] flex items-center gap-2">
          {icon} {detail}
        </p>
      </li>
    </>
  );
};
export default PropertyDetail;
