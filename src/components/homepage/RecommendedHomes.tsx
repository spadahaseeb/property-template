"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// components
import Heading from "@/components/Heading";
import PropertyCard from "@/components/PropertyCard";
import { RecommendedHomesContent } from "@/components/homepage/content/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecommendedHomes = () => {
  const breakpoints = {
    10: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <section className="bg-white-soft rounded-medium section-spacing">
        <div>
          {/* section-heading */}
          <div className="container">
            <Heading
              heading="Homes For You"
              discription="Based on your view history"
              className="pb-[30px]"
            />
          </div>

          {/* content */}
          <main className="relative max-w-[1660px] m-auto">
            <div className="container">
              <Swiper
                className="overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2000 }}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-button-next-rh",
                  prevEl: ".swiper-button-prev-rh",
                }}
                pagination={{ clickable: true }}
                loop={true}
                speed={500}
                breakpoints={breakpoints}
              >
                {RecommendedHomesContent.map((item) => (
                  <SwiperSlide key={item.title} className="select-none">
                    <PropertyCard
                      image={item.image}
                      title={item.title}
                      location={item.location}
                      price={item.price}
                      isForSale={item.isForSale}
                      isFeatured={item.isFeatured}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* navigation-buttons  */}
            <div
              className="absolute top-0 left-0 right-0 z-100 flex justify-between h-full 
              items-center pointer-events-none xmd:translate-y-[-30px] translate-y-[-100px]"
            >
              <div className="swiper-button-prev-rh swiper-naviagtion-button-rh">
                <ChevronLeft size={16} strokeWidth={1} />
              </div>
              <div className="swiper-button-next-rh swiper-naviagtion-button-rh">
                <ChevronRight size={16} strokeWidth={1} />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default RecommendedHomes;
