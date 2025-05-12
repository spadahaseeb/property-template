// components
import { PropertyButtonsContent } from "@/app/home2/assets/content";
import PropertyButton from "@/components/shared/PropertyButton";

const PropertyButtons = () => {
  return (
    <div className="w-full text-center">
      <p className="text-regular text-white mb-[25px]">
        What are you looking for?
      </p>
      <div className="m-auto lg:w-[461px] w-[305px] flex items-center justify-center flex-wrap gap-[10px] text-white">
        {PropertyButtonsContent.map((item) => (
          <>
            <PropertyButton
              key={item.text}
              src={item.src}
              text={item.text}
              buttonIcon={<item.buttonIcon size={18} strokeWidth={1} />}
              className="md:w-[147px] md:h-[50px] w-[140px] h-[40px]"
              ButtonIconStyles="md:w-10 w-[30px] md:h-10 h-[30px]"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default PropertyButtons;
