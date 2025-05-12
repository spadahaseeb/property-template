"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecentPropertiesSaleContent } from "@/app/Home3/assets/content";
// components
import DiscoverDealsCard from "@/components/shared/DiscoverDealsCard";
import Heading from "@/components/shared/Heading";
// components

const RecentPropertiesSale = () => {
  const swiperBreakpoints = {
    10: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <section className="lg:pb-[150px] md:pb-[100px] pb-[60px]">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Recent Properties for Sale"
              discription="Lorem ipsum dolor sit amet"
              className="pb-10 text-center m-auto"
            />
          </div>

          {/* section-content  */}
          <main>
            <Swiper
              className="overflow-visible"
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
              loop={true}
              speed={500}
              breakpoints={swiperBreakpoints}
            >
              {RecentPropertiesSaleContent.map((item) => (
                <div key={item.imgSrc}>
                  <SwiperSlide key={item.title} className="select-none">
                    <DiscoverDealsCard data={item} />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </main>
        </div>
      </section>
    </>
  );
};

export default RecentPropertiesSale;
