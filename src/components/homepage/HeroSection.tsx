// componnets
import PropertySearchBar from "@/components/PropertySearchBar";

const HeroSection = () => {
  return (
    <>
      <section className="w-full mb-5 pt-[255px] pb-[220px] text-white bg-[url('/images/hero_background.webp')] bg-cover lg:bg-center rounded-medium bg-[30%_100%]">
        {/* custom-container  */}
        <main className="container">
          {/* hero-container*/}
          <div className="max-w-[690px] w-full m-auto flex flex-col items-center">
            {/* let-us-guide tag  */}
            <p
              className="uppercase text-white font-medium border-1 border-white 
              rounded-lg lg:w-[210px] lg:h-10 xs:h-[35px] xs:w-[170px] lg:text-[13px] xs:text-[11px] text-[9px] flex items-center justify-center mx-auto mb-5 w-[140px] h-[28px]"
            >
              <span>let us guide your home</span>
            </p>

            {/* heading  */}
            <div className="lg:max-w-[610px] md:max-w-[450px] xs:max-w-[300px] max-w-[250px] w-full m-auto mb-[30px]">
              <h1 className="text-center lg:text-[60px] md:text-[48px] xs:text-[38px] text-[30px] font-medium md:leading-[78px] xs:leading-[60px] leading-[50px]">
                Discover a place you'll love to live
              </h1>
            </div>

            {/* search-bar */}
            <PropertySearchBar />
          </div>
        </main>
      </section>
    </>
  );
};
export default HeroSection;
