// components

import { twMerge } from "tailwind-merge";

// types
type ThumbnailPropType = {
  image: string;
  children?: React.ReactNode;
  className?: string;
};

const Thumbnail = ({ image, children, className }: ThumbnailPropType) => {
  return (
    <div
      style={{ backgroundImage: `url(/images/${image})` }}
      className={twMerge(
        "bg-cover bg-center w-full h-full rounded-medium ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Thumbnail;
