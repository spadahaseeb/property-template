"use client";
import { usePathname } from "next/navigation";
// components
import Header from "@/components/layout/footer/Header";
import Content from "@/components/layout/footer/Content";
import Copyright from "@/components/layout/footer/Copyright";
import BackToTop from "@/components/shared/BackToTop";

const Footer = () => {
  const hiddenRoutes = ["/Home", "/Home2"];
  const pathname = usePathname();

  if (hiddenRoutes.includes(pathname)) return null;
  return (
    <>
      <div className="md:p-5 p-[10px]">
        <footer className="bg-black-primary rounded-medium">
          <Header />
          <Content />
          <Copyright />

          <BackToTop />
        </footer>
      </div>
    </>
  );
};

export default Footer;
