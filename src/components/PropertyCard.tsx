import { Bath, Bed, Copy, MapPin } from "lucide-react";
import Image from "next/image";
// components
import PropertyDetail from "@/components/PropertyDetail";
import PropertyTag from "@/components/PropertyTag";

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
      <div className="h-[max-content] rounded-medium text-black p-[11px] bg-white border-1 border-black/10">
        {/* property-image */}
        <div className="relative">
          <a href="#">
            <Image
              src={`/images/${image}`}
              width={425}
              height={425}
              alt="property-product-image"
              className="rounded-medium w-full"
              loading="lazy"
            />
          </a>
          <div className="absolute top-6 left-5 w-full flex items-center gap-[10px]">
            {isForSale && <PropertyTag text="for sale" variant="v1" />}
            {isFeatured && <PropertyTag text="featured" variant="v2" />}
          </div>

          {/* property-details */}
          <div className="lg:p-5 xs:p-[15px] py-[10px] capitalize">
            {/* title location price */}
            <div className="flex lg:justify-between lg:flex-row flex-col">
              {/* col1 title & location  */}
              <div>
                <a href="#">
                  <h4 className="font-medium text-[19px] leading-6 mb-[9px]">
                    {title}
                  </h4>
                </a>
                <p className="flex items-center w-full font-normal text-[16px] leading-8">
                  <MapPin size={22} strokeWidth={1} className="mr-[5px]" />
                  {location}
                </p>
              </div>

              {/* col2 price  */}
              <p className="font-normal text-[16px] leading-8 text-accent-coral pt-[15px] lg:pt-0">
                {price}
              </p>
            </div>

            {/* details */}
            <div>
              <ul className="flex flex-wrap text-black font-normal">
                {propertyDetailContent.map((item, idx) => (
                  <PropertyDetail
                    key={idx}
                    detail={item.detail}
                    icon={item.icon}
                    className="border-r-1 border-black-primary/30 last:border-r-0 mt-5
                     w-[max-content] pr-1 mr-1 xs:pr-[12px] xs:mr-[12px] last:mr-0 last:pr-0"
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
    icon: <Bed strokeWidth={0.75} size={20} />,
  },
  {
    detail: "4 baths",
    icon: <Bath strokeWidth={0.75} size={20} />,
  },
  {
    detail: "400 sqft",
    icon: <Copy strokeWidth={0.75} size={20} />,
  },
];
