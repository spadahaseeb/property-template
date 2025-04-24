// components
import Header from "@/components/layout/footer/Header";
import Copyright from "@/components/layout/footer/Copyright";
import FooterContent from "@/components/layout/footer/FooterContent";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-primary rounded-medium">
        <div>
          <Header />
          <FooterContent />
          <Copyright />
        </div>
      </footer>
    </>
  );
};
export default Footer;
