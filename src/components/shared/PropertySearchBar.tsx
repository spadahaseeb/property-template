"use client";

import { Search, SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { SearchKeywordsContent } from "@/assets/content";
import { PropertySearchBarPropType } from "@/assets/types";

type ContentProps = {
  tab: string;
  searchValue: string;
  matchedKeywords: string[];
  handleSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearchValue: (value: string) => void;
};

const placeholders: Record<string, string> = {
  sale: "Search properties for sale",
  rent: "Search properties for rent",
};

const Content = ({
  tab,
  searchValue,
  matchedKeywords,
  handleSearchValue,
  setSearchValue,
}: ContentProps) => (
  <div className="relative">
    {/* Search bar */}
    <div className="w-full bg-white-soft rounded-full overflow-hidden">
      <form action="/" className="w-full relative">
        <div className="p-[5px] w-full">
          <input
            type="text"
            required
            name="searchbar"
            placeholder={placeholders[tab]}
            className="lg:w-[690px] md:w-[450px] xs:w-[330px] xs:h-[30px] lg:h-[60px] md:h-[40px] bg-transparent border-none outline-none text-black md:placeholder:text-[16px] md:text-[18px] sm:text-[16px] text-[14px] xs:pl-5 pl-[7px] w-[280px] h-[35px] xs:placeholder:text-[17px] placeholder:text-[12px] placeholder:font-normal placeholder:text-black placeholder:capitalize"
            value={searchValue}
            onChange={handleSearchValue}
          />
          <button
            type="submit"
            className="lg:w-[60px] lg:h-[60px] md:w-10 md:h-10 flex items-center justify-center bg-accent-gold rounded-full absolute top-[50%] right-[5px] translate-y-[-50%] w-[35px] h-[35px]"
          >
            <Search size={18} strokeWidth={1.5} className="text-black" />
          </button>
        </div>
      </form>
    </div>

    {/* search keywords */}
    {searchValue !== "" && (
      <div className="z-100 absolute top-full left-0 right-0 w-full bg-black-deep/70 mt-3 rounded-medium px-5 py-[25px] max-h-[450px] overflow-y-scroll scrl">
        {matchedKeywords.length > 0 ? (
          matchedKeywords.map((item) => (
            <p
              key={item}
              className="flex items-center py-[10px] px-[10px] cursor-pointer select-none w-full hover:bg-black-muted rounded-[6px]"
              onClick={() => setSearchValue(item)}
            >
              <SearchIcon size={20} strokeWidth={1.2} className="text-white" />
              <span className="pl-3 lowercase text-[16px] text-white">
                {item}
              </span>
            </p>
          ))
        ) : (
          <p className="py-[10px] px-[10px] select-none w-full">
            no results found!
          </p>
        )}
      </div>
    )}
  </div>
);

const PropertySearchBar = ({ isTabEnable }: PropertySearchBarPropType) => {
  const [searchValue, setSearchValue] = useState("");
  const [matchedKeywords, setMatchedKeywords] = useState<string[]>([]);
  const [tab, setTab] = useState("sale");

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    const filtered = SearchKeywordsContent.filter((elem) =>
      elem.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchedKeywords(filtered);
  }, [searchValue]);

  return isTabEnable ? (
    <Tabs
      defaultValue="sale"
      className="w-[max-content] m-auto"
      value={tab}
      onValueChange={setTab}
    >
      <TabsList className="bg-transparent flex md:gap-16 gap-5 mb-[35px]">
        <TabsTrigger
          value="sale"
          className="rounded-none bg-transparent text-white text-18 font-roboto font-normal border-b-2 border-transparent data-[state=active]:border-white duration-300 ease-out capitalize p-0 pb-2"
        >
          sale
        </TabsTrigger>
        <TabsTrigger
          value="rent"
          className="rounded-none bg-transparent text-white text-18 font-roboto font-normal border-b-2 border-transparent data-[state=active]:border-white duration-300 ease-out capitalize p-0 pb-2"
        >
          rent
        </TabsTrigger>
      </TabsList>
      <Content
        tab={tab}
        searchValue={searchValue}
        matchedKeywords={matchedKeywords}
        handleSearchValue={handleSearchValue}
        setSearchValue={setSearchValue}
      />
    </Tabs>
  ) : (
    <Content
      tab={tab}
      searchValue={searchValue}
      matchedKeywords={matchedKeywords}
      handleSearchValue={handleSearchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export default PropertySearchBar;
