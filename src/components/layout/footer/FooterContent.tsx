// components
import NewsletterSignup from "@/components/layout/footer/NewsletterSignup";
import FooterLinks from "@/components/layout/footer/FooterLinks";

const FooterContent = () => {
  return (
    <>
      <div className="footer-container py-[95px] px-[40px] lg:px-[100px]">
        <div className="flex justify-between 2xl:flex-row flex-col">
          <NewsletterSignup />
          <FooterLinks />
        </div>
      </div>
    </>
  );
};
export default FooterContent;
