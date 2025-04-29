import { ChevronDown } from "lucide-react";
import Link from "next/link";
// components
import { NavigationLinksContent } from "@/components/homepage/content/content";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";

const Navigation = () => {
  return (
    <>
      <ul
        className="flex flex-col xl:flex-row h-[max-content]
      items-center justify-center "
      >
        {NavigationLinksContent.map((item, idx) => (
          <li
            key={idx}
            className="py-[7px] xl:py-0 xl:px-5 inline-reset text-white text-[14px] xl:text-[16px]"
          >
            {item.hoverLinks && item.hoverLinks.length > 0 ? (
              // HoverTrigger
              <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <div className="capitalize font-medium flex items-center cursor-pointer">
                    {item.text}
                    {item.icon && <ChevronDown className="ml-1" size={16} />}
                  </div>
                </HoverCardTrigger>

                {/* HoverCardContent */}
                <HoverCardContent
                  side="bottom"
                  sideOffset={0}
                  className="border-none shadow-none w-[max-content] z-500"
                >
                  <div
                    className="bg-black-muted mt-10 rounded-normal pt-[50px] pr-[150px]
                  pb-[15px] pl-10"
                  >
                    {item.hoverLinks.map((linkx, idxx) => (
                      <Link
                        key={idxx}
                        href={linkx.link}
                        className="mb-4 block text-white capitalize hover:text-white-secondary/90"
                      >
                        {linkx.text}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link
                href={item.link}
                className="capitalize font-medium flex items-center"
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Navigation;
