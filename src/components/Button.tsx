import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// Button props types
interface ButtonPropsType {
  hover?: boolean;
  variant?: "default" | "v1" | "v2" | "v3";
  className?: string;
  buttonText?: string;
  buttonIcon?: ReactNode;
  buttonIconStyle?: string;
  linkEnable: boolean;
  buttonLink?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

// button component
const Button = ({
  hover,
  variant,
  className,
  buttonText,
  buttonIcon,
  buttonIconStyle,
  linkEnable,
  buttonLink,
  onClick,
}: ButtonPropsType) => {
  return (
    <>
      {linkEnable ? (
        <Link
          href={buttonLink || "/"}
          className={twMerge(
            buttonVariants({ variant, className }),
            "inline-reset flex items-center group :"
          )}
          onClick={onClick}
        >
          {buttonText && <p>{buttonText}</p>}
          <span
            className={twMerge(
              "inline-reset duration-300",
              buttonIconStyle,
              hover ? "group-hover:translate-x-1" : ""
            )}
          >
            {buttonIcon}
          </span>
        </Link>
      ) : (
        <button
          className={twMerge(
            buttonVariants({ variant, className }),
            "inline-reset flex items-center group"
          )}
          onClick={onClick}
        >
          {buttonText && <p>{buttonText}</p>}
          <span
            className={twMerge(
              "inline-reset duration-300",
              buttonIconStyle,
              hover ? "group-hover:translate-x-2" : ""
            )}
          >
            {buttonIcon}
          </span>
        </button>
      )}
    </>
  );
};
export default Button;

// button tailwind varians
const buttonVariants = tv({
  base: "flex items-center justify-center text-center capitalize w-[max-content]",
  variants: {
    variant: {
      v1: "text-16 font-medium border-1 py-2 px-7 border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-black ease-out duration-300",
      v2: "bg-accent-gold text-black text-[15px] rounded-normal py-3 px-6 font-medium",
      v3: "rounded-full font-medium w-[70px] h-[70px] pl-0",
      default:
        "bg-white/10 text-16 font-medium py-2 px-7 rounded-xlg text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
