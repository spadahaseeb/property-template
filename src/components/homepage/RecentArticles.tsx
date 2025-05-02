// components
import Heading from "@/components/Heading";
import Article from "@/components/Article";
import { RecentArticlesContent } from "@/components/homepage/content/content";

const RecentArticles = () => {
  return (
    <>
      <section className="lg:py-[165px] py-[90px] bg-white-muted rounded-medium">
        <div className="container">
          {/* section heading  */}
          <Heading
            heading="Recent Articles & News"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            spacing="pb-5"
            className="pb-6"
          />

          {/* content  */}
          <main>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[15px]">
              {RecentArticlesContent.map((item, idx) => (
                <Article
                  key={idx}
                  date={item.date}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default RecentArticles;
