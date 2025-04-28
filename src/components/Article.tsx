import { MoveRight } from "lucide-react";
import parse from "html-react-parser";
// components
import Thumbnail from "@/components/Thumbnail";
import Button from "@/components/Button";

// types
type ArticlePropType = {
  date: string;
  title: string;
  image: string;
};

// component
const Article = ({ date, title, image }: ArticlePropType) => {
  return (
    <>
      <div className="rounded-medium border-1 border-black/10">
        <div>
          <Thumbnail
            image={image}
            className="rounded-br-none rounded-bl-none w-full h-[217px]"
          />
        </div>

        <div className="lg:px-[45px] px-[15px] pt-5 pb-[26px] text-center flex flex-col items-center">
          <p className="text-[15px] font-normal pb-[10px] text-black-secondary">
            {parse(date)}
          </p>
          <h6 className="capitalize text-[17px] font-medium leading-[26px] pb-[16px]">
            {title}
          </h6>

          <Button
            buttonText="Learn more"
            buttonIconStyle="ml-2"
            buttonIcon={<MoveRight size={20} strokeWidth={1} />}
            variant="v2"
            className="bg-transparent"
            linkEnable={true}
            buttonLink="/"
          />
        </div>
      </div>
    </>
  );
};
export default Article;
