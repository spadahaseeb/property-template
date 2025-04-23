import { twMerge } from "tailwind-merge";

type HeadingPropsType = {
  className?: string;
  heading?: string;
  discription?: string;
  spacing?: string;
};

const Heading = ({
  heading,
  discription,
  className,
  spacing,
}: HeadingPropsType) => {
  return (
    <>
      <div className={twMerge("text-center", className)}>
        {heading && (
          <h2 className={twMerge("heading pb-[5px]", spacing)}>{heading}</h2>
        )}
        {discription && <p className="heading-discription">{discription}</p>}
      </div>
    </>
  );
};
export default Heading;
