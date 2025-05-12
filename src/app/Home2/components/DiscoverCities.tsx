"use client";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { DiscoverCitiesContent } from "@/app/home2/assets/content";
import { Swiper, SwiperSlide } from "swiper/react";
// components
import Thumbnail from "@/components/shared/Thumbnail";
import Heading from "@/components/shared/Heading";

const DiscoverCities = () => {
  const modules = [Pagination, Scrollbar, A11y, Autoplay];
  const breakpoints = {
    250: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    668: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1830: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <section className="bg-white-grayed section-spacing">
        <div className="container-lg 3xl:max-w-[1830px] max-w-[1430px]">
          {/* heading-content  */}
          <div className="pb-10">
            <Heading
              heading="Find Properties in These Cities"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              headingStyles="pb-[5px]"
              className="m-auto max-w-[250px] xs:max-w-full"
            />
          </div>

          {/* section-content  */}
          <main>
            <Swiper
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={modules}
              loop={true}
              speed={500}
              pagination={{ clickable: true }}
              className="swiper-discover-cities"
              breakpoints={breakpoints}
            >
              {DiscoverCitiesContent.map((item) => (
                <SwiperSlide
                  className="select-none lg:pb-[50px] md:pb-[30px] sm:pb-[20px] pb-0"
                  key={item.city}
                >
                  <a
                    href="#"
                    className={`hover:scale-[1.01] hover:shadow-[1px_1px_12px_6px_rgba(0,0,0,0.20)] duration-300 ease-out`}
                  >
                    <Thumbnail
                      image={item.img}
                      className="rounded-md xxl:min-w-[336px] h-[474px]"
                    >
                      <div className="text-white pl-[40px] pt-[45px] w-full h-full bg-gradient-to-b from-black/80 via-black/10 to-black/0 capitalize">
                        <h5 className="font-medium text-[19px] pb-[5px]">
                          {item.city}
                        </h5>
                        <p className="font-normal text-[15px]">
                          {item.properties} properties
                        </p>
                      </div>
                    </Thumbnail>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </main>
        </div>
      </section>
    </>
  );
};

export default DiscoverCities;
