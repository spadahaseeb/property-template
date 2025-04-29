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
import { useState } from "react";

const Header = () => {
  const [IsMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const handleToogleNavbar = () => setIsMenuClicked(!IsMenuClicked);

  const isScrolled = useScrollPosition(100);
  const HeaderStyles = isScrolled
    ? `border-white/10  rounded-medium bg-black-muted bg-black-deep
       py-[25px] px-[20px] w-[calc((100%)-80px] md:top-5 top-[10px] left-[10px] right-[10px] 
       md:py-[30px] md:px-[30px] md:left-10 md:right-10`
    : `top-0 left-0 right-0 bg-transparent md:py-[51px] md:px-[60px] py-[40px] px-[25px]`;

  return (
    <>
      <header
        className={twMerge(
          "fixed z-300 ease-in-out duration-300 border-1 border-transparent",
          HeaderStyles,
          IsMenuClicked
            ? "top-0 left-0 right-0 md:top-0 md:left-0 md:right-0 bg-black-deep rounded-none md:px-[30px] md:py-[30px] py-[30px] px-[30px]"
            : ""
        )}
      >
        <div className="flex items-center w-full flex-wrap xl:flex-nowrap">
          {/* logo and menu-icon  */}
          <div className="flex xl:w-[max-content] w-full items-center justify-between">
            <Link href={"/"}>
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={150}
                height={42}
                loading="lazy"
              />
            </Link>

            <div className="xl:hidden block">
              <Button
                linkEnable={false}
                buttonIcon={<Menu size={20} strokeWidth={1} />}
                onClick={handleToogleNavbar}
              />
            </div>
          </div>

          {/* navigation  */}
          <div
            className={twMerge(
              `w-full flex flex-col items-center xl:flex-row py-10 xl:py-0
               xl:justify-between justify-center bg-black-deep xl:bg-transparent 
               absolute xl:static top-full left-0 right-0 h-[calc((100vh)-100px)]
               xl:h-auto duration-300 ease-out`,
              IsMenuClicked
                ? "translate-x-0 xl:translate-y-0 translate-y-1"
                : "xl:translate-x-0 translate-x-[100vw] translate-y-0"
            )}
          >
            <div className="xl:flex-1 pb-5 xl:pb-0">
              <Navigation />
            </div>
            {/* side content  */}
            <SideContent />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
