import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// types
interface ButtonPropType {
  hover?: boolean;
  variant?: "v1" | "v2" | "v3";
  className?: string;
  buttonText?: string;
  buttonIcon?: ReactNode;
  buttonIconStyles?: string;
  isLinkEnable: boolean;
  buttonLink?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

// component
const ButtonT = ({
  hover = false,
  variant,
  className,
  buttonText,
  buttonIcon,
  buttonIconStyles,
  isLinkEnable,
  buttonLink,
  onClick,
}: ButtonPropType) => {
  const Content = () => (
    <div
      aria-label={buttonText}
      className={twMerge("flex items-center justify-center")}
    >
      <p>{buttonText}</p>
      {buttonIcon && (
        <span
          aria-hidden="true"
          className={twMerge(
            "pl-[7px] ease-out duration-300",
            buttonIconStyles,
            hover ? "group-hover:translate-x-2" : ""
          )}
        >
          {buttonIcon}
        </span>
      )}
    </div>
  );

  return isLinkEnable ? (
    <Link
      href={buttonLink || "/"}
      className={twMerge("group", ButtonVariant({ variant, className }))}
    >
      <Content />
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={twMerge("group", ButtonVariant({ variant, className }))}
    >
      <Content />
    </button>
  );
};

export default ButtonT;

// tailwind-variants
const ButtonVariant = tv({
  base: "ease-out duration-300 relative capitalize text-center flex items-center justify-center",
  variants: {
    variant: {
      v1: "w-[148px] h-[42px] text-[15px] font-medium border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-black",
      v2: "w-[161px] h-[54px] bg-accent-gold text-black text-[15px] rounded-normal font-medium",
      v3: "w-[51px] h-[51px] rounded-full font-medium",
      default: "w-[max-content] h-[max-content] text-[15px] font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
