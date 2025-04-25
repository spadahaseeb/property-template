// components
import NewsletterSignup from "@/components/layout/footer/NewsletterSignup";
import FooterLinks from "@/components/layout/footer/FooterLinks";

const FooterContent = () => {
  return (
    <>
      <div className="footer-container py-[95px]">
        <div className="flex flex-col justify-between">
          <NewsletterSignup />
          <FooterLinks />
        </div>
      </div>
    </>
  );
};
export default FooterContent;
