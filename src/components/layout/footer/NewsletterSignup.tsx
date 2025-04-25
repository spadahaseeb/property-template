// componemts
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <>
      <div className="xs:max-w-[500px]">
        <h6 className="footer-links-heading">subscribe</h6>

        <form
          action="/"
          className="pb-[13.5px] border-b-1 border-white/20 flex items-center"
        >
          <input
            required
            name="email"
            type="email"
            placeholder="your email"
            className="placeholder:font-normal placeholder:text-[15px] placeholder:text-white text-4 text-white flex-1 bg-transparent border-none outline-none capitalize xs:w-[250px]"
          />
          <Button
            linkEnable={false}
            buttonText="send"
            buttonIcon={<ArrowRight size={20} strokeWidth={2} />}
            buttonIconStyle="ml-2"
            className="text-white bg-black-secondary border-none"
            variant="v1"
          />
        </form>

        <p className="text-white-secondary text-[15px] font-normal leading-6 pt-10">
          Subscribe to our newsletter to receive our weekly feed.
        </p>
      </div>
    </>
  );
};
export default NewsletterSignup;
