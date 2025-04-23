// componnets
import PropertySearchBar from "@/components/PropertySearchBar";

const HeroSection = () => {
  return (
    <>
      <section className="w-full p-[255px_0_220px_0] text-white bg-[url('/images/hero_background.png')] bg-cover bg-center rounded-medium ">
        <div className="container">
          <main>
            {/* heading */}
            <div className="flex flex-col items-center justify-center pb-8">
              <span className="inline-reset uppercase text-12 text-white border-1 border-white py-3 px-7 rounded-lg mb-5">
                let us guide your home
              </span>
              <h1 className="text-left text-[60px] font-medium lowercase pb-6 leading-snug">
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
