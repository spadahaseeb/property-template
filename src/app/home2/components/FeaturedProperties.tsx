"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
// components
import { FeaturedPropertiesContent } from "@/app/home2/assets/content";
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";
import FeaturedPropertyCard from "@/components/shared/FeaturedPropertyCard";

const FeaturedProperties = () => {
  const [filtered, setFiltered] = useState("*");

  const filteredData =
    filtered === "*"
      ? FeaturedPropertiesContent.FeaturedPropertiesGalleryContent
      : FeaturedPropertiesContent.FeaturedPropertiesGalleryContent.filter(
          (item) => item.type === filtered
        );

  return (
    <section>
      <div className="container lg:pb-[165px] sm:pb-[100px] pb-[70px]">
        {/* heading */}
        <div className="pb-10">
          <Heading
            heading="Featured Properties"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>

        {/* tabs */}
        <div
          className="m-auto flex justify-center items-center flex-wrap pb-[45px] md:gap-3 gap-[7px]
        md:w-[345px] lg:w-full w-[230px]"
        >
          {FeaturedPropertiesContent.FeaturedPropertiesTabsContent.map(
            (item) => (
              <Button
                key={item.tab}
                buttonText={item.tab}
                onClick={() => setFiltered(item.type)}
                variant={filtered === item.type ? "v4" : "default"}
                className={twMerge(
                  "font-medium md:text-[16px] md:w-[139px] md:h-[40px] text-[13px] w-[110px] h-[30px]",
                  filtered === item.type
                    ? "bg-white-warm border-black border-1"
                    : "border-transparent"
                )}
              />
            )
          )}
        </div>

        {/* grid with animation */}
        <div className="grid xxl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pb-[50px]">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 45, scale: 0.75 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -45, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="xmd:min-h-[446px] md:min-h-[350px] min-h-[446px] xxl:min-w-[446px] rounded-md overflow-hidden"
              >
                <FeaturedPropertyCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* button */}
        <div className="flex justify-center">
          <Button
            className="lg:w-[180px] lg:h-[54px] w-[150px] h-[40px] text-[13px] lg:text-[15px] bg-accent-gold border-none"
            buttonText="See all listing"
            buttonIcon={<ArrowRight size={18} strokeWidth={1} />}
            variant="v3"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
