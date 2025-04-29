"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// components
import Heading from "@/components/Heading";
import PropertyCard from "@/components/PropertyCard";
import { RecommendedHomesContent } from "@/components/homepage/content/content";

const RecommendedHomes = () => {
  return (
    <>
      <section className="bg-white-soft rounded-medium lg:py-[165px] py-[90px]">
        <div className="container">
          <div>
            {/* section-heading */}
            <Heading
              heading="foryou homes"
              discription="based on your view history."
              className="pb-[30px]"
            />

            {/* content */}
            <main>
              <Swiper
                className="xl:gap-[30px] gap-[20px] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{
                  clickable: true,
                }}
                loop={true}
                speed={600}
                breakpoints={{
                  10: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  880: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {RecommendedHomesContent.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <a href={"#"} className="select-none">
                      <PropertyCard
                        image={item.image}
                        title={item.title}
                        location={item.location}
                        price={item.price}
                        isForSale={item.isForSale}
                        isFeatured={item.isFeatured}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
export default RecommendedHomes;
