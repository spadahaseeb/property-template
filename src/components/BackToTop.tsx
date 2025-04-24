"use client";
import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
// components
import Button from "@/components/Button";
import useScrollPosition from "@/hooks/useScrollPosition";

const BackToTop = () => {
  const isScrolled = useScrollPosition(100);

  return (
    <>
      <div
        className={twMerge(
          "fixed right-[30px] bottom-[30px] transition-all duration-300 ease-in-out",
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <Button
          variant="v3"
          linkEnable={false}
          buttonIcon={<ArrowUp size={20} strokeWidth={1} />}
          className={twMerge(
            "bg-black-smooth w-[50px] h-[50px] text-white hidden ",
            isScrolled ? "block" : "hidden"
          )}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </>
  );
};
export default BackToTop;
