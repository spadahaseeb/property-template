// components
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const PropertyStatsCard = () => {
  return (
    <>
      <div className="h-full w-full bg-black-primary rounded-medium flex p-10 flex-col justify-between">
        <div className="text-white">
          <span className="font-medium text-[40px] font-roboto pb-[5px]">
            280+
          </span>
          <h6 className="text-[19px] font-normal pb-5">properties</h6>
          <p className="pb-10 font-roboto font-normal text-16 leading-7">
            Explore our wide variety of properties to fid your dream home today
          </p>
        </div>

        <div className="flex items-center justify-end">
          <Button
            buttonIcon={<ArrowRight size={20} strokeWidth={1} />}
            variant="v3"
            className="bg-white text-black w-[51px] h-[51px]"
            linkEnable={true}
            buttonLink="/"
          />
        </div>
      </div>
    </>
  );
};

export default PropertyStatsCard;
