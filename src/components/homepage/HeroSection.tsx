// componnets
import PropertySearchBar from "@/components/PropertySearchBar";

const HeroSection = () => {
  return (
    <>
      <section className="w-full pb-[220px] pt-[200px] lg:pt-[225px] text-white bg-[url('/images/hero_background.png')] bg-cover bg-center rounded-medium">
        <div className="container">
          <main>
            {/* heading */}
            <div className="flex flex-col items-center justify-center pb-8">
              <span className="inline-reset uppercase text-[12px] text-white border-1 border-white py-2 rounded-lg mb-5 px-5">
                let us guide your home
              </span>
              <h1 className="text-center xs:text-left lg:text-[60px] md:text-[46px] text-[38px] font-medium lowercase lg:pb-6 pb-[50px] leading-snug">
                a place {"you'll"}
                <br /> love to live
              </h1>
            </div>

            {/* search-bar */}
            <PropertySearchBar />
          </main>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
