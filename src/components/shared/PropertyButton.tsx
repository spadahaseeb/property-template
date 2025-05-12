import { twMerge } from "tailwind-merge";
import { PropertyButtonPropType } from "@/app/Home2/assets/types";
// components
import Button from "@/components/shared/Button";

const PropertyButton = ({
  src,
  text,
  buttonIcon,
  className,
  ButtonIconStyles,
}: PropertyButtonPropType) => {
  return (
    <>
      <a
        href={src || "/home2"}
        className={twMerge(
          "w-[147px] h-[50px] backdrop-blur-[50px] bg-white/30 text-[13px] rounded-lg font-normal text-white flex items-center p-[5px]",
          className
        )}
      >
        <Button
          variant="v4"
          buttonIcon={buttonIcon}
          className={twMerge("w-10 h-10", ButtonIconStyles)}
          buttonIconStyles="pl-0"
          isLinkEnable={false}
        />
        <p className="text-[13px] font-normal text-white pl-[10px]">{text}</p>
      </a>
    </>
  );
};

export default PropertyButton;
