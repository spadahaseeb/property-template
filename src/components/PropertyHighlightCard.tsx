import { twMerge } from "tailwind-merge";
import { MapPin } from "lucide-react";
// components
import Thumbnail from "@/components/Thumbnail";
import PropertyDetail from "@/components/PropertyDetail";
import PropertyTag from "@/components/PropertyTag";
import { PropertyHighlightCardContent } from "@/components/homepage/content/content";

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
      <Thumbnail image="bp3.webp">
        <div
          className={twMerge(
            "flex flex-col justify-between w-full h-full xl:p-10 xs:p-[25px] p-[15px] text-white   rounded-medium",
            className
          )}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(26, 26, 26, 0.1) 60%, rgba(26, 26, 26, 0.8) 100%)",
          }}
        >
          {/* propert tags  */}
          <div className="flex items-center gap-3">
            {isForSle && <PropertyTag text="for sale" variant="v1" />}
            {isFeatured && <PropertyTag text="featured" variant="v2" />}
          </div>

          {/* property details  */}
          <div className="">
            {/* title and location  */}
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

            {/* price and details  */}
            <div className="flex sm:items-center sm:flex-row flex-col">
              <p className="font-semibold text-[21px] pb-[10px] sm:pb-0">
                280,000
              </p>

              <div className="xl:pl-[60px] sm:pl-[15px] flex items-center">
                {PropertyHighlightCardContent.map((item, idx) => (
                  <PropertyDetail
                    key={item.detail}
                    detail={item.detail}
                    icon={<item.icon size={20} strokeWidth={1.2} />}
                    className={twMerge(
                      idx !== PropertyHighlightCardContent.length - 1
                        ? "border-r-1 border-black-white/20 pr-1 xs:pr-3 mr-1 xs:mr-3 gap-2"
                        : ""
                    )}
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
