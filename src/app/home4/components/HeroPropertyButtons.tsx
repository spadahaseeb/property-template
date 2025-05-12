// components

import Button from "@/components/shared/Button";

const HeroPropertyButtons = () => {
  return (
    <>
      <p className="text-black-deep pb-5 text-center text-[16px] font-medium">
        Explore all things property
      </p>
      <div className="flex items-center gap-[10px]">
        <Button
          variant="v1"
          className="hover:bg-black-deep hover:text-white text-black-deep bg-white border-white-secondary text-[13px] w-[115px] h-[33px]"
          buttonText="All properties"
        />
        <Button
          variant="v1"
          className="hover:bg-black-deep hover:text-white text-black-deep bg-white border-white-secondary text-[13px] w-[84px] h-[33px]"
          buttonText="for sale"
        />
        <Button
          variant="v1"
          className="hover:bg-black-deep hover:text-white text-black-deep bg-white border-white-secondary text-[13px] w-[86px] h-[33px]"
          buttonText="for rent"
        />
      </div>
    </>
  );
};

export default HeroPropertyButtons;
