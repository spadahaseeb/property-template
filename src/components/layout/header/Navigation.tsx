"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
// components
import { NavigationLinksContent } from "@/components/homepage/content/content";

const Navigation = () => {
  return (
    <ul
      className="text-white flex flex-1 xl:items-center xl:justify-center xl:flex-row
    flex-col items-start"
    >
      {NavigationLinksContent.map((item) => (
        // tap trigger
        <li
          key={item.text}
          className="cursor-pointer inline-reset capitalize font-medium py-[7px] xl:py-0 xl:px-5 xl:text-[16px] sm:text-[21px] text-[16px]"
        >
          {item.hoverLinks && item.hoverLinks.length > 0 ? (
            <div className="relative group flex items-center select-none">
              {item.text}
              {item.icon && <ChevronDown className="ml-1" size={16} />}

              {/* Dropdown on hover or tap */}
              <div
                className="absolute left-0 top-full z-400 hidden group-hover:block         
                 group-focus-within:block xl:pt-10 pt-4"
              >
                <div className="flex flex-col gap-2 p-6 bg-black-muted min-w-[200px] rounded-medium">
                  {item.hoverLinks &&
                    item.hoverLinks.map((linkx) => (
                      <Link
                        key={linkx.text}
                        href={linkx.link}
                        className="text-[14px] block xl:inline-block text-white capitalize hover:text-white-secondary/90"
                      >
                        {linkx.text}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={item.link}
              className="capitalize font-medium flex items-center py-[7px] xl:py-0 text-[21px] xl:text-[16px]"
            >
              {item.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
