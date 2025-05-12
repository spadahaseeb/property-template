// components
import { DiscoverDealsCardPropType } from "@/app/home3/assets/types";
import PropertyAdress from "@/components/shared/PropertyAdress";
import PropertyDetails from "@/components/shared/PropertyDetails";
import PropertyPrice from "@/components/shared/PropertyPrice";
import PropertyTag from "@/components/shared/PropertyTag";
import Thumbnail from "@/components/shared/Thumbnail";

const DiscoverDealsCard = ({ data }: DiscoverDealsCardPropType) => {
  return (
    <>
      <div>
        <a href="#">
          <Thumbnail image={data.imgSrc} className="min-h-[311px] w-full">
            <div className="flex items-center gap-[10px] pl-5 pt-[23px]">
              {data.forSale && <PropertyTag variant="v1" text="for sale" />}
              {data.isFeatured && <PropertyTag variant="v2" text="featured" />}
            </div>
          </Thumbnail>
        </a>

        <div className="pt-[19px] pb-[30px]">
          <PropertyAdress
            title={data.title}
            adress={data.adress}
            titleStyles="pb-[5px]"
            adressStyles="pb-[15px]"
          />
          <hr className="border-none outline-none h-[1px] w-full bg-white-secondary" />

          <div className="flex items-center justify-between pt-5">
            <PropertyDetails
              data={data.detailsData}
              veryChildStyles="border-white-secondary"
            />
            <PropertyPrice
              price={data.price}
              isMonthly={data.isMonthly || false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverDealsCard;
