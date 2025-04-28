import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
// components
import Heading from "@/components/Heading";
import { ExploreLinksWithAgentCTAContent } from "@/components/homepage/content/content";

const ExploreLinksWithAgentCTA = () => {
  return (
    <>
      <section className="py-[165px] text-black">
        <div className="container">
          {/* section heading  */}
          <Heading />

          {/* content  */}
          <TabGroup>
            <TabList className="flex items-center justify-start gap-[30px]">
              {ExploreLinksWithAgentCTAContent.map((item, idx) => (
                <Tab
                  className="data-[selected]:border-b-black border-b-[2px] outline-none border-transparent bg-transparent text-black text-[19px] font-medium ease-out duration-300 capitalize inline-reset pb-3"
                  key={idx}
                >
                  {item.tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {ExploreLinksWithAgentCTAContent.map((item, idx) => (
                <TabPanel key={idx}>
                  <div className="pt-[35px] pb-4 border-t-1 border-black/10 translate-y-[-1px]">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 pt-[30px] lg:pt-0">
                      {Array.from({
                        length: Math.ceil(item.links.length / 6),
                      }).map((_, colIdx) => (
                        <ul key={colIdx} className="space-y-2">
                          {item.links
                            .slice(colIdx * 6, colIdx * 6 + 6)
                            .map((link, linkIdx) => (
                              <li key={linkIdx} className="list-none pb-[10px]">
                                <Link
                                  href="/"
                                  className="font-normal text-[15px] capitalize inline-reset"
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </>
  );
};
export default ExploreLinksWithAgentCTA;
