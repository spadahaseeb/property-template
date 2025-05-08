import { MapPin } from "lucide-react";
// components
import { PropertyAdressPropType } from "@/assets/types";
import { twMerge } from "tailwind-merge";

const PropertyAdress = ({
  title,
  adress,
  titleStyles,
  adressStyles,
  className,
}: PropertyAdressPropType) => {
  return (
    <>
      <div className={twMerge("", className)}>
        <a href="#">
          <h5
            className={twMerge(
              "font-medium text-[19px] leading-6 mb-[9px]",
              titleStyles
            )}
          >
            {title}
          </h5>
        </a>

        <p
          className={twMerge(
            "flex items-center w-full font-normal text-[16px] leading-8 gap-[5px]",
            adressStyles
          )}
        >
          <MapPin size={22} strokeWidth={1} />
          {adress}
        </p>
      </div>
    </>
  );
};

export default PropertyAdress;
