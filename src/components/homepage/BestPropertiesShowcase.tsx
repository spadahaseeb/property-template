"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
// components
import { BestPropertiesShowcaseContent } from "@/components/homepage/content/content";
import Heading from "@/components/Heading";
import Thumbnail from "@/components/Thumbnail";
import Button from "@/components/Button";
import PropertyStatsCard from "@/components/PropertyStatsCard";
import PropertyHighlightCard from "@/components/PropertyHighlightCard";

const BestPropertiesShowcase = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* section-heading  */}
          <Heading
            heading="Best Properties"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* section-content  */}
          <main>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[15px]">
                <div className="lg:col-span-2 min-h-[334px] relative">
                  {/* thumbnail 1  */}
                  <Swiper
                    className="overflow-visible"
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    autoplay={{ delay: 2000 }}
                    navigation={{
                      prevEl: ".swiper-naviagtion-button-left-bstprpt",
                      nextEl: ".swiper-naviagtion-button-right-bstprpt",
                    }}
                    loop={true}
                    speed={500}
                    slidesPerView={1}
                    spaceBetween={15}
                  >
                    {BestPropertiesShowcaseContent.map((item) => (
                      <SwiperSlide className="select-none min-h-[334px] w-full h-full">
                        <Image
                          src={`/images/${item.img}`}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          className="w-full h-full rounded-medium"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center m-auto sm:m-0 gap-[25px] pt-[25px] justify-between w-full px-[10px] pointer-events-none">
                    <div className="swiper-naviagtion-button-left-bstprpt swiper-naviagtion-button-bstprpt bg-transparent border-none text-white backdrop-blur-[70px] pointer-events-auto">
                      <ChevronLeft size={16} strokeWidth={1} />
                    </div>
                    <div className="swiper-naviagtion-button-right-bstprpt swiper-naviagtion-button-bstprpt bg-transparent border-none text-white backdrop-blur-[70px] pointer-events-auto">
                      <ChevronRight size={16} strokeWidth={1} />
                    </div>
                  </div>
                </div>

                {/* thumbnail 2  */}
                <PropertyStatsCard />

                {/* thumbnail 3  */}
                <div>
                  <Thumbnail image="bp2.webp" className="min-h-[329px]">
                    <div className="flex items-center justify-center h-full">
                      <Button
                        buttonIcon={
                          <Play
                            size={23}
                            strokeWidth={0.8}
                            className="text-white"
                          />
                        }
                        variant="v3"
                        className="bg-black-primary/20 w-[70px] h-[70px]"
                        buttonIconStyles="p-0"
                        isLinkEnable={true}
                        buttonLink="/"
                      />
                    </div>
                  </Thumbnail>
                </div>
              </div>

              {/* thumbnail 4  */}
              <a href="#" className="duration-300 ease-out hover:scale-[1.01]">
                <PropertyHighlightCard
                  isForSle={true}
                  isFeatured={true}
                  className="min-h-[700px]"
                />
              </a>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default BestPropertiesShowcase;
