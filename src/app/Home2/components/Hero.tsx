import Image from "next/image";
// componnets
import PropertySearchBar from "@/components/shared/PropertySearchBar";
import PropertyButtons from "@/app/home2/components/PropertyButtons";

const Hero = () => {
  return (
    <>
      <section className="relative md:pt-[305px] pt-[200px] pb-[125px]">
        {/* background-image  */}
        <div className="w-full h-full absolute top-0 left-0 right-0">
          <Image
            src={"/images/background2.png"}
            alt="background"
            width={1920}
            height={700}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* container  */}
        <div className="container relative">
          <main className="">
            {/* heading  */}
            <div className="flex flex-col items-center text-center">
              <button
                className="relative rounded-lg border-black border-1 leading-[0px]
                mb-5 flex items-center justify-center lg:w-[210px] lg:h-10 xs:h-[35px] xs:w-[170px] lg:text-[13px] xs:text-[11px] text-[9px] w-[140px] h-[28px]"
              >
                <p className="font-medium uppercase">let us guide your home</p>
              </button>

              <h1 className="md:text-[60px] xs:text-[40px] text-[36px] font-medium mb-5 text-black-muted">
                Believe in finding it
              </h1>
              <p className="text-regular text-black pb-[50px]">
                Search properties for sale and to rent in the UK
              </p>
            </div>

            {/* property-searchbar  */}
            <div className="w-[max-content] m-auto pb-[45px]">
              <PropertySearchBar isTabEnable={false} />
            </div>

            {/* propertyLook-buttons-content  */}
            <div>
              <PropertyButtons />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;
