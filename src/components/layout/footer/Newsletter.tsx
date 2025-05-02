// componemts
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <>
      <div className="text-white">
        <h6 className="footer-links-heading pb-[35px]">subscribe</h6>

        <form
          action="/"
          className="pb-[13px] w-[370px] border-b-1
           border-white border-opacity-[8%] flex items-center"
        >
          <input
            required
            name="email"
            type="email"
            placeholder="Your e-mail"
            className="placeholder:font-normal placeholder:text-[15px]
             placeholder:text-white text-4 text-white placeholder:normal-case
              outline-none border-none flex-1 bg-transparent"
          />

          <Button
            isLinkEnable={false}
            buttonText="send"
            buttonIcon={<ArrowRight size={20} strokeWidth={2} />}
            buttonIconStyles="pl-[5px]"
            className="text-white bg-gray-normal border-none text-[15px] w-[117px]"
            variant="v1"
          />
        </form>

        <p
          className="text-white-secondary text-[15px] font-normal 
        leading-6 text-center lg:text-left pt-10"
        >
          Subscribe to our newsletter to receive our weekly feed.
        </p>
      </div>
    </>
  );
};

export default Newsletter;
