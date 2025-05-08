"use client";
// components
import { ThumbnailPropType } from "@/assets/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Thumbnail = ({
  image,
  children,
  className,
  background,
}: ThumbnailPropType) => {
  return (
    <>
      {background === true ? (
        <div
          style={{ backgroundImage: `url(/images/${image})` }}
          className={twMerge(
            "bg-cover bg-center w-full h-full rounded-medium overflow-hidden",
            className
          )}
        >
          {children}
        </div>
      ) : (
        <div
          className={twMerge(
            "rounded-medium relative w-full h-full overflow-hidden",
            className
          )}
        >
          <div
            className={`${
              children ? "absolute" : `static`
            } top-0 left-0 w-full h-full`}
          >
            <Image
              src={`/images/${image}`}
              alt={image}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full relative">{children}</div>
        </div>
      )}
    </>
  );
};

export default Thumbnail;
