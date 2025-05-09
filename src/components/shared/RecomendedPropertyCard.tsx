// components
import { PropertyCardPropType } from "@/assets/types";
import Thumbnail from "@/components/shared/Thumbnail";
import PropertyAdress from "@/components/shared/PropertyAdress";
import PropertyPrice from "@/components/shared/PropertyPrice";
import PropertyTag from "@/components/shared/PropertyTag";
import PropertyDetails from "@/components/shared/PropertyDetails";

const RecomendedPropertyCard = ({ data }: { data: PropertyCardPropType }) => {
  return (
    <>
      <div
        className="h-[max-content] rounded-medium text-black bg-white 
        border-1 border-black/10 p-[11px]"
      >
        {/* card-image */}
        <div>
          <a href="#">
            <Thumbnail image={data.image} className="min-h-[296px]">
              <div className="pt-6 pl-5 w-full flex items-center gap-[10px]">
                {data.isForSale && <PropertyTag text="for sale" variant="v1" />}
                {data.isFeatured && (
                  <PropertyTag text="featured" variant="v2" />
                )}
              </div>
            </Thumbnail>
          </a>
        </div>

        {/* card-detail  */}
        <div className="xs:pl-5 xs:pt-[19px] xs:pr-[30px] xs:pb-6 py-5 px-0">
          <div className="flex justify-between pb-5 flex-col xs:flex-row">
            <PropertyAdress title={data.title} adress={data.adress} />
            <PropertyPrice
              price={data.price}
              isMonthly={data.isMonthly || false}
              className="pt-5 xs:pt-0"
            />
          </div>

          <PropertyDetails data={data.details} />
        </div>
      </div>
    </>
  );
};
export default RecomendedPropertyCard;
