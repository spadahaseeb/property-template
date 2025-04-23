import { ChevronDown } from "lucide-react";
import Link from "next/link";
// components
import { NavigationLinksContent } from "@/components/homepage/content/content";

const Navigation = () => {
  return (
    <>
      <ul className="flex items-center justify-center flex-1">
        {NavigationLinksContent.map((item, idx) => (
          <li key={idx} className="px-5 inline-reset text-white text-16">
            <Link
              href={"/"}
              className="capitalize font-medium flex items-center"
            >
              {item.text}
              {item.icon && <ChevronDown className="ml-1" size={16} />}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
