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
      <ul className="flex items-center justify-center flex-1">
        {NavigationLinksContent.map((item, idx) => (
          <li key={idx} className="px-5 inline-reset text-white text-16">
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
                  className="border-none shadow-none w-[max-content] z-300"
                >
                  <div className="bg-black-muted mt-10 rounded-normal p-[50px_150px_15px_40px]">
                    {item.hoverLinks.map((linkx, idxx) => (
                      <Link
                        key={idxx}
                        href={linkx.link}
                        className="mb-4 block text-white text-16 capitalize hover:text-white-secondary/90"
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

{
  /* <ul className="flex items-center justify-center flex-1">
        {NavigationLinksContent.map((item, idx) => (
          <HoverCard openDelay={0} closeDelay={0}>
            <li key={idx} className="px-5 inline-reset text-white text-16">
              <HoverCardTrigger>
                <Link
                  href={"/"}
                  className="capitalize font-medium flex items-center"
                >
                  {item.text}
                  {item.icon && <ChevronDown className="ml-1" size={16} />}
                </Link>
              </HoverCardTrigger>

              <HoverCardContent className="text-white delay-0">
                {item.hoverLinks &&
                  item.hoverLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.link}
                      className="text-white text-16 capitalize hover:text-accent-gold"
                    >
                      {link.text}
                    </Link>
                  ))}
              </HoverCardContent>
            </li>
          </HoverCard>
        ))}
      </ul> */
}
