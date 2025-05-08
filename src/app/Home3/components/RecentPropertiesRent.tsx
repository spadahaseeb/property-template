"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecentPropertiesRentContent } from "@/app/Home3/assets/content";
// components
import DiscoverDealsCard from "@/components/shared/DiscoverDealsCard";
import Heading from "@/components/shared/Heading";

const RecentPropertiesRent = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* heading-content  */}
          <div>
            <Heading
              heading="Recent Properties for Rent"
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
              slidesPerView={4}
              pagination={{ clickable: true }}
              loop={true}
              speed={500}
              spaceBetween={30}
            >
              {RecentPropertiesRentContent.map((item) => (
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

export default RecentPropertiesRent;
