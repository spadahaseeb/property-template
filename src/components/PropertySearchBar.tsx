"use client";

// components
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs";
import { Search } from "lucide-react";
import { useState } from "react";

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
        <div className={"w-full flex justify-center"}>
          <form
            action="/"
            className={
              "p-[5px] min-w-[690px] w-full flex items-center bg-white rounded-lg"
            }
          >
            <input
              required
              type="text"
              name="searchbar"
              placeholder={placeholders[tab]}
              className="w-full pl-8 font-normal
               placeholder:text-black placeholder:font-normal 
               placeholder:text-16 border-none outline-none
               text-black text-18 inline-reset bg-transparent"
            />
            <button
              className="w-14 h-14 flex items-center justify-center
            bg-accent-gold rounded-lg"
            >
              <Search strokeWidth={1.5} className="text-black text-[20px]" />
            </button>
          </form>
        </div>
      </Tabs>
    </>
  );
};
export default PropertySearchBar;
