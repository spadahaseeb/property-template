import { BuySellCtaContent } from "@/app/home4/assets/content";
// components
import BuySellCtaCard from "@/components/shared/BuySellCtaCard";
import Heading from "@/components/shared/Heading";

const BuySellCta = () => {
  return (
    <>
      <section className="pt-[150px] pb-[165px]">
        <div className="container">
          {/* section-content  */}
          <main className="flex gap-[30px]">
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
