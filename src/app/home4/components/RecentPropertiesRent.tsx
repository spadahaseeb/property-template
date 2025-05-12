import { RecentPropertiesRentContent } from "@/app/home4/assets/content";
// components
import Heading from "@/components/shared/Heading";
import RecentPropertyCard from "@/app/home4/components/RecentPropertyCard";

const RecentPropertiesRent = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* headng-content  */}
          <Heading
            heading="Recent Properties for Rent"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            className="pb-10"
          />

          <main>
            <div className="grid grid-cols-4 gap-[30px]">
              {RecentPropertiesRentContent.map((item) => (
                <div key={item.title}>
                  <RecentPropertyCard data={item} />
                </div>
              ))}
            </div>

            <div className="pt-[60px]">pagination</div>
          </main>
        </div>
      </section>
    </>
  );
};

export default RecentPropertiesRent;
