import { twMerge } from "tailwind-merge";
import { PropertyStatsCardPropType } from "@/assets/types";
import parse from "html-react-parser";
// components
import Button from "@/components/shared/Button";

const PropertyStatsCard = ({
  className,
  cardBoxStyles,
  title1,
  title2,
  discription,
  isButton,
  buttonIcon,
  buttonVariant,
  buttonLink,
  title1Styles,
  title2Styles,
  discriptionStyles,
}: PropertyStatsCardPropType) => {
  return (
    <>
      <div
        className={twMerge(
          "h-[max-content] w-full bg-accent-gold text-black rounded-medium p-10",
          className
        )}
      >
        <div
          className={twMerge("flex flex-col justify-between", cardBoxStyles)}
        >
          <div>
            {title1 && (
              <span
                className={twMerge(
                  "font-medium text-[40px] font-roboto pb-[5px] block",
                  title1Styles
                )}
              >
                {parse(title1)}
              </span>
            )}
            {title2 && (
              <h6
                className={twMerge(
                  "text-[19px] font-normal pb-5",
                  title2Styles
                )}
              >
                {parse(title2)}
              </h6>
            )}
            {discription && (
              <p
                className={twMerge(
                  "pb-10 font-roboto font-normal text-16 leading-7",
                  discriptionStyles
                )}
              >
                {discription}
              </p>
            )}
          </div>

          {isButton && (
            <div className="flex items-center justify-end">
              <Button
                buttonIcon={buttonIcon}
                variant={buttonVariant}
                className="bg-black-primary/20 bg-white text-black"
                buttonIconStyles="p-0"
                isLinkEnable={true}
                buttonLink={buttonLink}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyStatsCard;
