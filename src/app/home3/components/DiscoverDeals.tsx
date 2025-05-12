"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// components
import DiscoverDealsCard from "@/components/shared/DiscoverDealsCard";
import Heading from "@/components/shared/Heading";
import { DiscoverDealsContent } from "@/app/home3/assets/content";

const DiscoverDeals = () => {
  const swiperBreakpoints = {
    10: { spaceBetween: 15, slidesPerView: 1 },
    768: { spaceBetween: 20, slidesPerView: 2 },
    1080: { spaceBetween: 30, slidesPerView: 3 },
  };

  return (
    <>
      <section className="lg:pb-[165px] md:pb-[100x] pb-[60px]">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Discover Our Best Deals"
              discription="Lorem ipsum dolor sit amet"
              headingStyles="pb-[5px]"
              className="pb-10 text-center w-[max-content] m-auto"
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
              {DiscoverDealsContent.map((item) => (
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

export default DiscoverDeals;
