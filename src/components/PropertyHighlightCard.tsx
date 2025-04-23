// components
import { twMerge } from "tailwind-merge";
import { MapPin } from "lucide-react";
// components
import Thumbnail from "@/components/Thumbnail";
import PropertyDetail from "./PropertyDetail";
import PropertyTag from "./PropertyTag";
import { PropertyHighlightCardContent } from "./homepage/content/content";

// types
type PropertyHighlightCardPropsType = {
  isForSle?: boolean;
  isFeatured?: boolean;
  className?: string;
};

const PropertyHighlightCard = ({
  isForSle,
  isFeatured,
  className,
}: PropertyHighlightCardPropsType) => {
  return (
    <>
      <Thumbnail image="bp3.jfif">
        <div
          className={twMerge(
            "flex flex-col justify-between w-full h-full p-10 text-white bg-black-primary/30 rounded-medium",
            className
          )}
        >
          {/* propert tags  */}
          <div className="flex items-center gap-3">
            {isForSle && <PropertyTag text="for sale" variant="v1" />}
            {isFeatured && <PropertyTag text="featured" variant="v2" />}
          </div>

          {/* property details  */}
          <div>
            <div>
              <h5 className="text-[26px] font-medium leading-8 pb-4">
                Villa One Hyde Park
              </h5>
              <p className="flex items-center pb-8">
                <MapPin size={20} strokeWidth={1} />
                <span className="inline-reset pl-2 font-normal text-16">
                  2050 Bloomingdale Ave
                </span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="font-semibold text-[21px]">280,000</p>
              <div className="pl-[60px] flex items-center">
                {PropertyHighlightCardContent.map((item, idx) => (
                  <PropertyDetail
                    key={idx}
                    detail={item.detail}
                    icon={<item.icon size={25} strokeWidth={1.2} />}
                    className={
                      idx !== PropertyHighlightCardContent.length - 1
                        ? "border-r-1 border-black-white/20 pr-3 mr-3"
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Thumbnail>
    </>
  );
};
export default PropertyHighlightCard;
