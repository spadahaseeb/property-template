import { FeaturedPropertyCardPropType } from "@/app/home2/assets/types";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import PropertyTag from "@/components/shared/PropertyTag";
import FeateuredPropertyDetailsBox from "@/components/shared/FeateuredPropertyDetailsBox";

const FeaturedPropertyCard = ({
  data,
}: {
  data: FeaturedPropertyCardPropType;
}) => {
  return (
    <>
      <Thumbnail image={data.imgSrc}>
        <div className="w-full h-full sm:p-5 p-[10px] flex flex-col justify-between">
          {/* tags  */}
          <div className="flex items-center gap-[10px]">
            {data.isForSale && <PropertyTag text="For Sale" variant="v1" />}
            {data.isFeatured && <PropertyTag text="Featured" variant="v2" />}
          </div>

          {/* property-details box */}
          <FeateuredPropertyDetailsBox data={data} />
        </div>
      </Thumbnail>
    </>
  );
};

export default FeaturedPropertyCard;
