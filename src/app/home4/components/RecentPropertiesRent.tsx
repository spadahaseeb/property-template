"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecentPropertiesRentContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";
import RecentPropertyCard from "@/app/home4/components/RecentPropertyCard";

const RecentPropertiesRent = () => {
  const swiperBreakpoints = {
    10: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* headng-content  */}
          <Heading
            heading="Recent Properties for Rent"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            className="pb-10"
          />

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
              {RecentPropertiesRentContent.map((item) => (
                <div key={item.title}>
                  <SwiperSlide className="select-none">
                    <RecentPropertyCard data={item} />
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
