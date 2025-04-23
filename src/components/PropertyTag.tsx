import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// types
type PropertyTagPropsType = {
  className?: string;
  variant?: "v1" | "v2";
  text: string;
};

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
  base: "rounded-lg font-medium py-2 px-5 uppercase font-roboto text-[13px] w-[max-content]",
  variants: {
    variant: {
      v1: "bg-black-deep text-white",
      v2: "bg-accent-gold text-black",
    },
  },
  defaultVariants: {
    variant: "v1",
  },
});
