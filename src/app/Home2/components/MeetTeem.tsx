// components
import { MeetTeemContent } from "@/app/Home2/assets/content";
import Heading from "@/components/shared/Heading";
import TeemCard from "@/components/shared/TeemCard";

const MeetTeem = () => {
  return (
    <>
      <section className="lg:pt-[165px] lg:pb-[130px] sm:py-[100px] py-[60px]">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Meet Our Team Of Experts"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10 text-center"
          />

          {/* section-content  */}
          <main className="grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {MeetTeemContent.map((item) => (
              <TeemCard
                key={item.imgSrc}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                expertName={item.expertName}
                expertBio={item.expertBio}
              />
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default MeetTeem;
