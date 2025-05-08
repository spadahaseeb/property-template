// components
import Heading from "@/components/shared/Heading";
import Article from "@/components/shared/Article";
import { RecentArticlesContent } from "@/assets/content";

const RecentArticles = () => {
  return (
    <>
      <section className="section-spacing bg-white-muted rounded-medium">
        <div className="container">
          {/* section heading  */}
          <Heading
            heading="Recent Articles & News"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            headingStyles="pb-5"
            className="pb-6"
          />

          {/* content  */}
          <main>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[15px]">
              {RecentArticlesContent.map((item) => (
                <Article
                  key={item.date}
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
