import { Bath, Bed, Copy, MapPin } from "lucide-react";
// components
import { PropertyDetailsPropType } from "@/app/home2/assets/types";
import { twMerge } from "tailwind-merge";

const FeateuredPropertyDetailsBox = ({
  data,
  className,
  priceStyles,
  adressStyles,
}: PropertyDetailsPropType) => {
  return (
    <>
      <div className={twMerge("p-5 rounded-md bg-white", className)}>
        <h5 className="text-[19px] font-medium pb-[7px]">
          <a href="#">{data.title}</a>
        </h5>
        <p
          className={twMerge(
            "font-normal text-[16px] flex items-center pb-[7px]",
            adressStyles
          )}
        >
          <MapPin size={18} strokeWidth={1} />
          <span className="pl-[7px]">{data.adress}</span>
        </p>

        <div className="flex xs:items-center justify-between w-full xs:flex-row flex-col-reverse">
          <p
            className={twMerge(
              "font-semibold text-[21px] text-accent-coral",
              priceStyles
            )}
          >
            {data.price}
            {data.isMonthly ? (
              <span className="font-normal text-[14px]">/month</span>
            ) : null}
          </p>
          <div className="flex items-center py-[10px] xs:py-0">
            {[
              {
                icon: Bed,
                name: "bed",
              },
              {
                icon: Bath,
                name: "bath",
              },
              {
                icon: Copy,
                name: "copy",
              },
            ].map((item) => (
              <p
                key={item.name}
                className="flex items-center mr-[15px] pr-[15px] border-r-1 border-white-secondary last:border-r-0 last:mr-0 last:pr-0"
              >
                <Bed size={18} strokeWidth={1} />
                <span className="pl-[7px]">{data.beds}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeateuredPropertyDetailsBox;
