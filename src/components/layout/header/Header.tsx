"use client";
import Image from "next/image";
import Link from "next/link";
// components
import Navigation from "@/components/layout/header/Navigation";
import SideContent from "@/components/layout/header/SideContent";
import useScrollPosition from "@/hooks/useScrollPosition";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const isScrolled = useScrollPosition(100);
  const HeaderStyles = isScrolled
    ? "p-[30px_60px_40px_60px] bg-black-deep rounded-b-medium border-white/10"
    : "p-[51px_60px_60px_60px]";

  return (
    <>
      <header
        className={twMerge(
          "fixed top-0 left-0 w-full z-300 ease-out duration-300 border-b-1 border-transparent",
          HeaderStyles
        )}
      >
        <nav className="flex items-center">
          {/* loog  */}
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={150} height={42} />
          </Link>
          {/* navigation  */}
          <Navigation />
          {/* side content  */}
          <SideContent />
        </nav>
      </header>
    </>
  );
};
export default Header;
