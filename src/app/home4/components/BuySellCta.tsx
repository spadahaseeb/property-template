import { BuySellCtaContent } from "@/app/home4/assets/content";
// components
import BuySellCtaCard from "@/components/shared/BuySellCtaCard";

const BuySellCta = () => {
  return (
    <>
      <section className="lg:pt-[150px] lg:pb-[165px] md:py-[70px]">
        <div className="container">
          {/* section-content  */}
          <main className="flex gap-[30px] xxl:flex-row flex-col">
            {BuySellCtaContent.map((item) => (
              <div
                key={item.title}
                className="first-of-type:bg-white-muted last-of-type:bg-white-warm rounded-md w-full"
              >
                <BuySellCtaCard data={item} />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default BuySellCta;
