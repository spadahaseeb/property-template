import { twMerge } from "tailwind-merge";
import { PropertyHighlightCardPropType } from "@/assets/types";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import PropertyTag from "@/components/shared/PropertyTag";

const PropertyHighlightCard = ({
  isForSle,
  isFeatured,
  className,
  imgSrc,
  children,
}: PropertyHighlightCardPropType) => {
  return (
    <>
      <div className="duration-300 ease-out hover:scale-[1.01]">
        <Thumbnail image={imgSrc}>
          <div
            className={twMerge(
              "flex flex-col justify-between w-full h-full sm:px-10 sm:pt-10 sm:pb-[34px] text-white rounded-medium p-5",
              className
            )}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(26, 26, 26, 0.1) 60%, rgba(26, 26, 26, 0.8) 100%)",
            }}
          >
            {/* propert tags  */}
            <div className="flex items-center gap-[10px]">
              {isForSle && <PropertyTag text="for sale" variant="v1" />}
              {isFeatured && <PropertyTag text="featured" variant="v2" />}
            </div>

            {/* price and details  */}
            {children}
          </div>
        </Thumbnail>
      </div>
    </>
  );
};
export default PropertyHighlightCard;
