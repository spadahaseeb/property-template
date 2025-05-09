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
// components
import { RecommendedHomesContent } from "@/assets/content";
import Heading from "@/components/shared/Heading";
import RecomendedPropertyCard from "@/components/shared/RecomendedPropertyCard";
const breakpoints = {
  10: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1240: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const RecommendedHomes = () => {
  return (
    <>
      <section className="bg-white-soft rounded-medium section-spacing">
        {/* section-heading */}
        <div className="container">
          <Heading
            heading="Homes For You"
            discription="Based on your view history"
            className="pb-[30px]"
          />

          {/* content */}
          <main className="relative max-w-[1660px] m-auto">
            <div>
              <Swiper
                className="overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2500 }}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-button-next-recomendedHomes",
                  prevEl: ".swiper-button-prev-recomendedHomes",
                }}
                pagination={{ clickable: true }}
                loop={true}
                speed={500}
                breakpoints={breakpoints}
              >
                {RecommendedHomesContent.map((item) => (
                  <SwiperSlide key={item.title} className="select-none">
                    <RecomendedPropertyCard data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* navigation-buttons  */}
            <div
              className="absolute top-0 left-0 right-0 z-100 flex justify-between h-full 
                items-center pointer-events-none xmd:translate-y-[-30px] translate-y-[-100px]"
            >
              <div className="swiper-button-prev-recomendedHomes RecomendedHomesSwiperBtn">
                <ChevronLeft size={16} strokeWidth={1} />
              </div>
              <div className="swiper-button-next-recomendedHomes RecomendedHomesSwiperBtn">
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
