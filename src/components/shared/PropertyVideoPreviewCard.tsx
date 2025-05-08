import { Play } from "lucide-react";
// components
import Button from "@/components/shared/Button";
import Thumbnail from "@/components/shared/Thumbnail";

const PropertyVideoPreviewCard = () => {
  return (
    <>
      <div>
        <Thumbnail image="bp2.webp" className="min-h-[329px]">
          <div className="flex items-center justify-center h-full">
            <Button
              buttonIcon={
                <Play size={23} strokeWidth={0.8} className="text-white" />
              }
              variant="v3"
              className="bg-black-primary/20 w-[70px] h-[70px]"
              buttonIconStyles="p-0"
              isLinkEnable={true}
              buttonLink="/"
            />
          </div>
        </Thumbnail>
      </div>
    </>
  );
};

export default PropertyVideoPreviewCard;
