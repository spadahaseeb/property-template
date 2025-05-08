"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
// components
import { NavigationLinksContent } from "@/assets/content";
import { useState } from "react";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <ul
      className="text-white flex flex-1 xl:items-center xl:justify-center 
      xl:flex-row flex-col items-start"
    >
      {NavigationLinksContent.map((item) => (
        // tap trigger
        <li
          key={item.text}
          className="cursor-pointer inline-reset capitalize font-medium py-[7px] xl:py-0 xl:px-5 
          xl:text-[16px] sm:text-[21px] text-[16px]"
          onMouseEnter={() => setHoveredItem(item.text)}
          onClick={() => setHoveredItem(item.text)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.hoverLinks && item.hoverLinks.length > 0 ? (
            <div className="relative group flex items-center select-none">
              {item.text}
              {item.icon && <ChevronDown className="ml-1" size={16} />}

              {/* Dropdown on hover or tap */}
              <div
                className="absolute left-0 top-full z-400          
                group-focus-within:block xl:pt-10 pt-4"
              >
                <AnimatePresence mode="wait">
                  {hoveredItem === item.text && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, top: "30px" }}
                      animate={{ height: "auto", opacity: 1, top: 0 }}
                      exit={{ height: 0, opacity: 0, top: "30px" }}
                      className="relative"
                    >
                      <div className="flex flex-col gap-2 p-6 bg-black-muted min-w-[200px] rounded-medium">
                        {item.hoverLinks &&
                          item.hoverLinks.map((linkx) => (
                            <Link
                              key={linkx.text}
                              href={linkx.link}
                              className="text-[14px] block xl:inline-block text-white capitalize hover:text-white-secondary/90"
                              onClick={() => setHoveredItem(null)}
                            >
                              {linkx.text}
                            </Link>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
