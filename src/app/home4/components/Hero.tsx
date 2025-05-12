import PropertySearchBar from "@/components/shared/PropertySearchBar";
import Image from "next/image";
import HeroPropertyButtons from "./HeroPropertyButtons";
// components

const Hero = () => {
  return (
    <>
      <section className="relative pt-[247px] pb-[175px]">
        {/* background-image  */}
        <div className="w-full h-full absolute top-0 left-0 right-0">
          <Image
            src={"/images/background4.png"}
            alt="home4-background"
            className="w-full h-full object-cover object-[100%_20%] md:object-center"
            fill
          />
        </div>

        <div className="container relative">
          {/* heading  */}
          <div className="flex flex-col items-center text-center">
            <button
              className="relative rounded-lg border-black-deep border-1 leading-[0px]
                mb-5 flex items-center justify-center lg:w-[210px] lg:h-10 xs:h-[35px] xs:w-[170px] lg:text-[13px] xs:text-[11px] text-[9px] w-[140px] h-[28px]"
            >
              <p className="font-medium uppercase text-black-deep">
                let us guide your home
              </p>
            </button>

            <div className="flex lg:flex-col flex-col-reverse">
              <p className="text-regular text-black text-[16px] max-w-[370px] text-center m-auto pb-[50px] lg:pb-5">
                We’ve more than 745,000 apartments, place & plot.
              </p>
              <h1 className="md:text-[60px] xs:text-[40px] text-[36px] font-medium text-black-deep lg:pb-[50px]">
                Believe in finding it
              </h1>
            </div>
          </div>

          {/* property-searchbar  */}
          <div className="w-[max-content] m-auto pb-[49px]">
            <PropertySearchBar
              isTabEnable={false}
              searchBarStyles="bg-white border-white-secondary border-1 "
              className="drop-shadow-[0px_6px_15px_#404F68]"
            />
          </div>

          <div className="w-[max-content] m-auto">
            <HeroPropertyButtons />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
