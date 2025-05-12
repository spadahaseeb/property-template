"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// components
import Heading from "@/components/shared/Heading";
import { FeaturedCategoriesContent } from "../assets/content";

const FeaturedCategories = () => {
  const swiperBreakpoints = {
    10: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <section className="bg-white-muted section-spacing">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Featured Categories"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            className="pb-[60px]"
          />

          <main>
            <div>
              <Swiper
                className="overflow-visible"
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                loop={true}
                speed={500}
                breakpoints={swiperBreakpoints}
              >
                {FeaturedCategoriesContent.map((item) => (
                  <div>
                    <SwiperSlide className="select-none">
                      <div
                        key={item.title}
                        className="border-1 border-white-secondary rounded-md xxl:max-w-[328px] max-w-full h-[122px]
                        flex items-center justify-between p-[31px]"
                      >
                        <div className="flex items-center">
                          <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-white-warm">
                            <item.icon
                              size={26}
                              strokeWidth={1}
                              className="text-black"
                            />
                          </div>
                          <div className="pl-5">
                            <h5 className="text-[19px] font-medium pb-[5px]">
                              {item.title}
                            </h5>
                            <p className="text-[13px] font-normals">
                              {item.discription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default FeaturedCategories;
