import { Bath, Bed, Copy, MapPin } from "lucide-react";
import Image from "next/image";
// components
import PropertyDetail from "@/components/PropertyDetail";
import PropertyTag from "./PropertyTag";
import { twMerge } from "tailwind-merge";

// types
type PropertyCardPropType = {
  image: string;
  title: string;
  location: string;
  price: string;
  isFeatured: boolean;
  isForSale: boolean;
};

const PropertyCard = ({
  image,
  title,
  location,
  price,
  isFeatured,
  isForSale,
}: PropertyCardPropType) => {
  return (
    <>
      <div className="w-full xxl:w-[max-content] h-[max-content] rounded-medium text-black p-[11px] bg-white border-1 border-black/10">
        {/* property-image */}
        <div className="relative">
          <img
            src={`/images/${image}`}
            alt="property-product-image"
            className="rounded-medium w-full"
          />
          <div className="absolute top-6 left-5 w-full flex items-center gap-[10px]">
            {isForSale && <PropertyTag text="for sale" variant="v1" />}
            {isFeatured && <PropertyTag text="featured" variant="v2" />}
          </div>

          {/* property-details */}
          <div className="p-5">
            {/* title location price */}
            <div className="flex justify-between pb-5">
              <div>
                <h4 className="font-medium text-18 leading-6 pb-3 capitalize">
                  {title}
                </h4>
                <p className="flex items-center">
                  <MapPin size={22} strokeWidth={1} className="mr-1" />
                  <span className="inline-reset font-normal text-16 leading-8 capitalize">
                    {location}
                  </span>
                </p>
              </div>
              <p className="font-semibold text-xl leading-8 text-accent-coral">
                {price}
              </p>
            </div>

            {/* details */}
            <div>
              <ul className="flex items-center text-black font-normal">
                {propertyDetailContent.map((item, idx) => (
                  <PropertyDetail
                    key={idx}
                    detail={item.detail}
                    icon={item.icon}
                    className={twMerge(
                      idx !== propertyDetailContent.length - 1
                        ? "border-r border-black-primary/30 mr-3 pr-3"
                        : "border-none"
                    )}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyCard;

const propertyDetailContent = [
  {
    detail: "4 beds",
    icon: <Bed strokeWidth={0.75} size={22} />,
  },
  {
    detail: "4 baths",
    icon: <Bath strokeWidth={0.75} size={22} />,
  },
  {
    detail: "400 sqft",
    icon: <Copy strokeWidth={0.75} size={22} />,
  },
];
