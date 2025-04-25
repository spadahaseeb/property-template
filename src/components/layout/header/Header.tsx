"use client";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
// components
import Navigation from "@/components/layout/header/Navigation";
import SideContent from "@/components/layout/header/SideContent";
import useScrollPosition from "@/hooks/useScrollPosition";
import Button from "@/components/Button";
import { Menu } from "lucide-react";

const Header = () => {
  const isScrolled = useScrollPosition(100);
  const HeaderStyles = isScrolled
    ? `hdr:p-[35px_60px_40px_60px] hdr:rounded-medium hdr:border-white/10 hdr:top-5 hdr:right-20 hdr:left-20 w-[calc(100%-(160px)] hdr:bg-black-deep`
    : `top-0 left-0 right-0 w-full  `;

  return (
    <>
      <header
        className={twMerge(
          "fixed top-0 left-0 right-0 w-full flex items-center p-[51px_60px_60px_60px] flex-wrap z-300 duration-300 ease-out",
          HeaderStyles
        )}
      >
        <div className="flex items-center justify-between w-full hdr:w-[max-content]">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={150} height={42} />
          </Link>
          <div className="hdr:hidden">
            <Button
              linkEnable={false}
              buttonIcon={<Menu size={40} strokeWidth={1} />}
              className="bg-transparent p-[10px_0]"
            />
          </div>
        </div>

        <div className="hdr:items-center hdr:justify-between hdr:flex-1 hdr:flex w-full hdr:w-[max-content] translate-x-[150vw] hdr:translate-x-0 hdr:bg-transparent ">
          <div className="flex flex-1 justify-center">
            <Navigation />
          </div>
          <SideContent />
        </div>
      </header>
    </>
  );
};
export default Header;
