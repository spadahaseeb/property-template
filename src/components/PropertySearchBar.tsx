"use client";
import { Search, SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
// components
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { SearchKeywordsContent } from "./homepage/content/content";

const PropertySearchBar = () => {
  // search-keywords functionality
  const [searchValue, setSearchValue] = useState<string>("");
  const [matchedKeywords, setMatchedKeywords] = useState<any[]>([]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  useEffect(() => {
    const filteredKeywords = SearchKeywordsContent.filter((elem) =>
      elem.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchedKeywords(filteredKeywords);
  }, [searchValue]);

  // search-Tabs functionality
  const [tab, setTab] = useState("sale");
  const placeholders: Record<string, string> = {
    sale: "Search properties for sale",
    rent: "Search properties for rent",
  };

  return (
    <>
      <Tabs
        defaultValue="sale"
        className="w-[max-content] m-auto"
        value={tab}
        onValueChange={setTab}
      >
        {/* tabs  */}
        <TabsList className="bg-transparent flex md:gap-16 gap-5 mb-[35px]">
          <TabsTrigger
            value="sale"
            className="bg-transparent text-white text-18 font-roboto font-normal border-b-2 border-transparent data-[state=active]:border-white duration-300 ease-out capitalize p-0 pb-2"
          >
            sale
          </TabsTrigger>
          <TabsTrigger
            value="rent"
            className="bg-transparent text-white text-18 font-roboto font-normal border-b-2 border-transparent data-[state=active]:border-white duration-300 ease-out capitalize p-0 pb-2"
          >
            rent
          </TabsTrigger>
        </TabsList>

        <div className="relative">
          {/* search bar  */}
          <div className={"w-full bg-white-soft rounded-full overflow-hidden"}>
            <form action="/" className="w-full relative">
              <div className="p-[5px] w-full">
                {/* search input  */}
                <input
                  type="text"
                  required
                  name="searchbar"
                  placeholder={placeholders[tab]}
                  className="lg:w-[690px] md:w-[490px] xs:w-[340px] xs:h-[40px] lg:h-[60px] md:h-[50px]  bg-transparent border-none outline-none text-black md:placeholder:text-[16px]
                md:text-[18px] sm:text-[16px] text-[14px] xs:pl-5 pl-[7px] w-[280px] h-[35px] xs:placeholder:text-[17px] placeholder:text-[12px] placeholder:font-normal placeholder:text-black placeholder:capitalize "
                  value={searchValue}
                  onChange={handleSearchValue}
                />
                {/* search button  */}
                <button className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-10 xs:h-10 flex items-center justify-center bg-accent-gold rounded-full absolute top-[50%] right-[5px] translate-y-[-50%] w-[35px] h-[35px]">
                  <Search
                    size={20}
                    strokeWidth={1.5}
                    className="text-black text-[20px]"
                  />
                </button>
              </div>
            </form>
          </div>

          {/* search keywords box  */}
          {searchValue !== "" ? (
            <div className="z-100 absolute top-full left-0 right-0 w-full bg-black-deep/70 mt-3 rounded-medium px-5 py-[25px] max-h-[450px] overflow-y-scroll scrl">
              {matchedKeywords.length > 0 ? (
                matchedKeywords.map((item, idx) => (
                  <p
                    className="flex items-center py-[10px] px-[10px] cursor-pointer select-none w-full
                   hover:bg-black-muted rounded-[6px]"
                    onClick={() => setSearchValue(item)}
                    key={idx}
                  >
                    <SearchIcon size={20} strokeWidth={1.2} />
                    <span className="pl-3 lowercase text-[16px] text-white">
                      {item}
                    </span>
                  </p>
                ))
              ) : (
                <p className="py-[10px] px-[10px] select-none w-full">
                  no reults found!
                </p>
              )}
            </div>
          ) : null}
        </div>
      </Tabs>
    </>
  );
};
export default PropertySearchBar;
