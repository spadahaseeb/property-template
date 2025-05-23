import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ExploreLinksWithAgentCTAContent } from "@/assets/content";
import Link from "next/link";
// components
import Heading from "@/components/shared/Heading";

const ExploreLinksWithAgentCTA = () => {
  return (
    <>
      <section className="section-spacing text-black">
        <div className="container">
          {/* section heading  */}
          <Heading />

          {/* content  */}
          <TabGroup>
            <TabList className="sm:flex grid grid-cols-2 items-center justify-start sm:gap-[30px] gap-[15px]">
              {ExploreLinksWithAgentCTAContent.map((item) => (
                <Tab
                  className="data-[selected]:border-b-black border-b-[2px] outline-none border-transparent bg-transparent text-black text-[19px] font-medium ease-out duration-300 capitalize inline-reset pb-3"
                  key={item.tab}
                >
                  {item.tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {ExploreLinksWithAgentCTAContent.map((item) => (
                <TabPanel key={item.tab}>
                  <div className="pt-[35px] pb-4 border-t-1 border-black/10 translate-y-[-1px]">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 pt-[30px] lg:pt-0">
                      {Array.from({
                        length: Math.ceil(item.links.length / 6),
                      }).map((_, colIdx) => (
                        <ul key={colIdx} className="space-y-2">
                          {item.links
                            .slice(colIdx * 6, colIdx * 6 + 6)
                            .map((link) => (
                              <li key={link} className="list-none p-[5px]">
                                <Link
                                  href="/"
                                  className="font-normal text-[15px] capitalize inline-reset group"
                                >
                                  {link}
                                  <span className="bg-black h-[0.5px] w-0 block group-hover:w-full duration-300 ease"></span>
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
