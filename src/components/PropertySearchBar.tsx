"use client";
import { Search } from "lucide-react";
import { useState } from "react";
// components
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const PropertySearchBar = () => {
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
        <TabsList className="bg-transparent flex gap-16 pb-9">
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

        {/* search bar  */}
        <div className={"w-full bg-white-soft rounded-full"}>
          <form action="/" className="w-full relative">
            <div className="p-[5px] w-full">
              {/* search input  */}
              <input
                type="text"
                required
                name="searchbar"
                placeholder={placeholders[tab]}
                className="lg:w-[690px] md:w-[490px] xs:w-[340px] xs:h-[40px] lg:h-[60px] md:h-[50px]  bg-transparent border-none outline-none text-black 
                text-[18px] xs:pl-5 pl-[7px] w-[280px] h-[35px]"
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
      </Tabs>
    </>
  );
};
export default PropertySearchBar;
