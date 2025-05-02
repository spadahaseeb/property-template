// components
import Header from "@/components/layout/footer/Header";
import Content from "@/components/layout/footer/Content";
import Copyright from "@/components/layout/footer/Copyright";
import BackToTop from "@/components/BackToTop";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-primary rounded-medium">
        <Header />
        <Content />
        <Copyright />
        <BackToTop />
      </footer>
    </>
  );
};

export default Footer;
