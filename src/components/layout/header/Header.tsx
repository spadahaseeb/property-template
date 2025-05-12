"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
// components
import Navigation from "@/components/layout/header/Navigation";
import SideContent from "@/components/layout/header/SideContent";
import useScrollPosition from "@/hooks/useScrollPosition";
import Button from "@/components/shared/Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const [IsMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const handleToogleNavbar = () => setIsMenuClicked(!IsMenuClicked);

  const isScrolled = useScrollPosition(50);
  const pathname = usePathname();

  const headerEffect = useMemo(() => {
    return isScrolled
      ? "w-[calc((100%)-80px] border-white/10 rounded-medium bg-black-muted bg-black-deep py-[25px] px-[20px] md:top-5 top-[10px] left-[10px] right-[10px] md:py-[30px] md:px-[30px] md:left-10 md:right-10"
      : pathname !== "/"
      ? "bg-black/50 top-0 left-0 right-0 md:py-[50px] md:px-[60px] py-[40px] px-[25px]"
      : "top-0 left-0 right-0 bg-transparent md:py-[50px] md:px-[60px] py-[40px] px-[25px]";
  }, [pathname, isScrolled]);

  return (
    <>
      <header
        className={twMerge(
          "fixed z-300 ease-in-out duration-300 border-1 border-transparent",
          headerEffect,
          IsMenuClicked
            ? "top-0 left-0 right-0 md:top-0 md:left-0 md:right-0 bg-black-deep rounded-none md:px-[30px] md:py-[30px] py-[30px] px-[30px] border-none"
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
                priority
                className="sm:w-[151px] w-[120px]"
              />
            </Link>

            <div className="xl:hidden block">
              <Button
                isLinkEnable={false}
                buttonIcon={
                  IsMenuClicked ? (
                    <X size={20} strokeWidth={1} />
                  ) : (
                    <Menu size={20} strokeWidth={1} />
                  )
                }
                className="outline-none border-none text-white bg-black-muted"
                variant="v3"
                buttonIconStyles="pl-0"
                onClick={handleToogleNavbar}
              />
            </div>
          </div>

          {/* navigation  */}
          <div
            className={twMerge(
              `xl:w-full flex flex-col xl:items-center items-start xl:flex-row 
               xl:justify-between bg-black-deep xl:bg-transparent 
               absolute xl:static top-full left-[-1px] right-[-1px] h-[calc((100vh)-100px)]
               xl:h-auto duration-300 ease-out p-10 xl:p-0 justify-start`,
              IsMenuClicked
                ? "translate-x-0 translate-y-[-1px]"
                : "xl:translate-x-0 translate-x-[110vw]"
            )}
          >
            <div className="xl:flex-1 pb-5 xl:pb-0">
              <Navigation />
            </div>
            <SideContent />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
