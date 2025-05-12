import { RecentPropertyCardPropType } from "@/app/home4/assets/types";
import { twMerge } from "tailwind-merge";
import { Heart } from "lucide-react";
// components
import PropertyAdress from "@/components/shared/PropertyAdress";
import PropertyTag from "@/components/shared/PropertyTag";
import Thumbnail from "@/components/shared/Thumbnail";
import PropertyPrice from "@/components/shared/PropertyPrice";

const RecentPropertyCard = ({
  data,
  className,
}: RecentPropertyCardPropType) => {
  return (
    <>
      <div
        className={twMerge(
          "border-1 border-white-secondary rounded-md overflow-hidden w-full",
          className
        )}
      >
        <a href="#">
          <Thumbnail
            image={data.imgSrc}
            className="rounded-bl-none rounded-br-none xxl:min-h-[227px] min-h-[350px] min-w-[326px] w-full"
          >
            <div className="pt-[23px] pl-5 flex gap-[10px]">
              {data.isForSle && <PropertyTag text="For Rent" variant="v1" />}
              {data.isFeatured && <PropertyTag text="Featured" variant="v2" />}
            </div>
          </Thumbnail>
        </a>

        <div className="pt-[19px] px-5 pb-5">
          {/* adress/ title  */}
          <div>
            <PropertyAdress
              title={data.title}
              adress={data.adress}
              className="pb-[15px]"
            />
          </div>

          {/* details  */}
          <div className="pb-5 border-b-1 border-white-secondary flex items-center gap-[10px]">
            {data.details.map((item) => (
              <div
                key={item.detail}
                className="w-[max-content] py-[7px] px-4 rounded-lg border-black-secondary/30 border-1 flex items-center"
              >
                <item.icon size={18} strokeWidth={1} />
                <p className="pl-[5px] text-[15px] font-normal">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* price/ favTag  */}
          <div className="pt-[26px] flex items-center justify-between w-full">
            <PropertyPrice price={data.price} isMonthly={data.isMonthly} />
            <div
              className="w-10 h-10 rounded-full border-black-secondary/50 border-1
              flex items-center justify-center cursor-pointer"
            >
              <Heart size={16} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPropertyCard;
