import Image from "next/image";
// components
import { FindDreamHouseCardPropType } from "@/app/home4/assets/types";

const FindDreamHouseCard = ({ data }: FindDreamHouseCardPropType) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="pb-[49px]">
            <Image
              src={`/images/${data.imgSrc}`}
              alt={"service-image"}
              className="xmd:w-[200px] xmd:h-[155px] w-[120px]"
              width={200}
              height={155}
            />
          </div>

          <div className="">
            <h4 className="text-[21px] font-medium max-w-[321px] pb-[14px] leading-[25px] m-auto xl:m-0">
              {data.title}
            </h4>
            <p className="text-[15px] font-normal max-w-[278px] leading-7 m-auto xl:m-0">
              {data.discription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDreamHouseCard;
