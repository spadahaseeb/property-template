"use client";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
// components
import Navigation from "@/components/layout/header/Navigation";
import SideContent from "@/components/layout/header/SideContent";
import useScrollPosition from "@/hooks/useScrollPosition";

const Header = () => {
  const isScrolled = useScrollPosition(100);
  const HeaderStyles = isScrolled
    ? "p-[35px_60px_40px_60px] bg-black-muted bg-black-deep rounded-medium border-white/10 top-5 left-20 right-20 w-[calc(100%-(160px)]"
    : "p-[51px_60px_60px_60px] top-0 left-0 right-0";

  return (
    <>
      <header
        className={twMerge(
          "fixed z-300 ease-in-out duration-300 border-1 border-transparent ",
          HeaderStyles
        )}
      >
        <nav className="flex items-center">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={150} height={42} />
          </Link>
          <Navigation />
          <SideContent />
        </nav>
      </header>
    </>
  );
};
export default Header;
