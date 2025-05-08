"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// components
import DiscoverDealsCard from "@/components/shared/DiscoverDealsCard";
import Heading from "@/components/shared/Heading";
import { DiscoverDealsContent } from "../assets/content";

const DiscoverDeals = () => {
  return (
    <>
      <section className="pb-[165px]">
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
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
              speed={500}
              spaceBetween={30}
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
