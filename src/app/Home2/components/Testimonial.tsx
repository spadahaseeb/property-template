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
import Image from "next/image";
// components
import Heading from "@/components/shared/Heading";
import Stats from "@/components/shared/Stats";
import Review from "@/components/shared/Review";
import TrustBy from "@/components/homepage/TrustedBy";

const Testimonials = () => {
  return (
    <>
      <section className="pt-[187px] pb-[106px] bg-white-warm">
        <div className="container">
          <main className="flex justify-between gap-[60px]">
            {/* heading-section  */}
            <div>
              <div className="max-w-[450px]">
                <Heading
                  heading="What our customers are <br className='hidden sm:block' /> saying us?"
                  discription="Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like."
                  className="pb-5 sm:text-left text-left"
                  headingStyles="pb-5"
                />
              </div>

              {/* stats  */}
              <div className="flex gap-[67px] w-[max-content]">
                <Stats
                  stat={"10m+"}
                  statDiscription={"happy people"}
                  statStyle="text-[26px]"
                  statDiscriptionStyle="text-[15px]"
                />
                <Stats
                  stat={"4.88"}
                  statDiscription={"overall rating"}
                  statStyle="text-[26px]"
                  statDiscriptionStyle="text-[15px]"
                >
                  <Image
                    src="/images/stars.webp"
                    alt="rating"
                    width={80}
                    height={10}
                    className="pt-[7px] w-[78px] h-auto"
                  />
                </Stats>
              </div>
            </div>

            {/* section-content  */}
            <div className="max-w-[600px] w-full">
              <Swiper
                className="overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
                navigation={{
                  prevEl: ".swiper-naviagtion-button-left-tstm",
                  nextEl: ".swiper-naviagtion-button-right-tstm",
                }}
                loop={true}
                speed={500}
                slidesPerView={1}
                spaceBetween={15}
              >
                <SwiperSlide className="select-none">
                  <Review />
                </SwiperSlide>
                <SwiperSlide className="select-none">
                  <Review />
                </SwiperSlide>
              </Swiper>

              <div className="flex items-center w-[max-content] gap-[25px] pt-[25px]">
                <div className="swiper-naviagtion-button-left-tstm swiper-naviagtion-button-tstm">
                  <ChevronLeft size={16} strokeWidth={1} />
                </div>
                <div className="swiper-naviagtion-button-right-tstm swiper-naviagtion-button-tstm">
                  <ChevronRight size={16} strokeWidth={1} />
                </div>
              </div>
            </div>
          </main>

          <TrustBy />
        </div>
      </section>
    </>
  );
};
export default Testimonials;
