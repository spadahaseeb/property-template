// components
import Heading from "@/components/Heading";
import Article from "@/components/Article";
import { RecentArticlesContent } from "@/components/homepage/content/content";

const RecentArticles = () => {
  return (
    <>
      <section className="py-[165px] bg-white-muted rounded-medium">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
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
