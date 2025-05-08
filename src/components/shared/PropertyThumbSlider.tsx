"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import { PropertyThumbSliderPropType } from "@/assets/types";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

const PropertyThumbSlider = ({
  className,
  data,
}: PropertyThumbSliderPropType) => {
  const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

  return (
    <>
      <div className={twMerge("", className)}>
        <div className="relative">
          {/* thumbnail 1  */}
          <Swiper
            className="overflow-hidden"
            modules={modules}
            autoplay={{ delay: 2000 }}
            navigation={{
              prevEl: ".swiper-naviagtion-button-left-BestProperties",
              nextEl: ".swiper-naviagtion-button-right-BestProperties",
            }}
            loop={true}
            speed={500}
            slidesPerView={1}
            spaceBetween={15}
          >
            {data &&
              data.map((item) => (
                <SwiperSlide className="select-none" key={item.alt}>
                  <Thumbnail image={item.img} />
                </SwiperSlide>
              ))}
          </Swiper>

          <div
            className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center m-auto 
            sm:m-0 gap-[25px] pt-[25px] justify-between w-full px-[10px] pointer-events-none"
          >
            <div
              className="swiper-naviagtion-button-left-BestProperties BestPropertiesSwiperBtn  
              bg-transparent border-none text-white backdrop-blur-[70px] pointer-events-auto"
            >
              <ChevronLeft size={16} strokeWidth={1} />
            </div>
            <div
              className="swiper-naviagtion-button-right-BestProperties BestPropertiesSwiperBtn 
              bg-transparent border-none text-white backdrop-blur-[70px] pointer-events-auto"
            >
              <ChevronRight size={16} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyThumbSlider;
