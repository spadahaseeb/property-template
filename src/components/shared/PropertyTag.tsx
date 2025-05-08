import { PropertyTagPropsType } from "@/assets/types";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const PropertyTag = ({ variant, className, text }: PropertyTagPropsType) => {
  return (
    <div className={twMerge("", TagVariants({ variant }), className)}>
      {text}
    </div>
  );
};
export default PropertyTag;

// tag-variants
const TagVariants = tv({
  base: "rounded-lg font-medium uppercase font-roboto text-[13px] flex items-center justify-center",
  variants: {
    variant: {
      v1: "bg-black-deep text-white w-[88px] h-[33px]",
      v2: "bg-accent-gold text-black w-[92px] h-[33px]",
    },
  },
  defaultVariants: {
    variant: "v1",
  },
});
