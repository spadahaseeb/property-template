import { twMerge } from "tailwind-merge";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import { PropertyCityCardPropType } from "@/app/Home3/assets/types";

const PropertyCityCard = ({
  data,
  className,
  contentStyles,
  contentInside,
}: PropertyCityCardPropType) => {
  return (
    <>
      {contentInside ? (
        <div className={twMerge("rounded-md overflow-hidden", className)}>
          <Thumbnail image={data.imgSrc} className="w-full min-h-[338px]">
            <div className={twMerge("p-10", contentStyles)}>
              <h5 className="text-[19px] font-medium pb-[9px]">{data.title}</h5>
              <p className="text-[15px] font-normal">{data.discription}</p>
            </div>
          </Thumbnail>
        </div>
      ) : (
        <div className={twMerge("rounded-md overflow-hidden", className)}>
          <div className="min-h-[318px]">
            <Thumbnail image={data.imgSrc} className="w-full h-[318px]" />
          </div>
          <div className={twMerge("pt-5", contentStyles)}>
            <p className="text-[15px] font-normal pb-[19px]">
              {data.discription}
            </p>
            <h5 className="text-[19px] font-medium">{data.title}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCityCard;
