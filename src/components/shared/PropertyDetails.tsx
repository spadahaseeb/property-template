import { twMerge } from "tailwind-merge";
// components
import { PropertyDetailsPropType } from "@/assets/types";

const PropertyDetails = ({
  data,
  className,
  detailStyles,
  veryChildStyles,
}: PropertyDetailsPropType) => {
  return (
    <>
      <div className={twMerge("flex items-center h-[max-content]", className)}>
        {data.map((item) => (
          <div
            key={item.detail}
            className={twMerge(
              "mr-[10px] pr-[10px] border-r-1 border-white-secondary last:border-r-0 last:mr-0 last:pr-0",
              veryChildStyles
            )}
          >
            <p className={twMerge("flex items-center gap-[9px]", detailStyles)}>
              <item.icon size={20} strokeWidth={0.75} />
              <span>{item.detail}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyDetails;
