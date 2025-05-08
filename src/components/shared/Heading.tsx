import { HeadingPropType } from "@/assets/types";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
// components

const Heading = ({
  heading,
  discription,
  Children,
  className,
  headingStyles,
  discriptionStyles,
}: HeadingPropType) => {
  return (
    <>
      <div className={twMerge("text-center text-black capitalize", className)}>
        <h4 className={twMerge("heading pb-[5px]", headingStyles)}>
          {parse(heading || "")}
        </h4>
        <p className={twMerge("heading-discription", discriptionStyles)}>
          {discription}
        </p>
        {Children}
      </div>
    </>
  );
};

export default Heading;
