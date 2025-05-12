// components

import Heading from "@/components/shared/Heading";
import { FeaturedCategoriesContent } from "../assets/content";

const FeaturedCategories = () => {
  return (
    <>
      <section className="bg-white-muted py-[165px]">
        <div className="container">
          {/* heading-content  */}
          <Heading
            heading="Featured Categories"
            discription="Lorem ipsum dolor sit amet"
            headingStyles="pb-[5px]"
            className="pb-[60px]"
          />

          <main>
            <div className="flex items-center gap-[30px]">
              {FeaturedCategoriesContent.map((item) => (
                <div
                  key={item.title}
                  className="border-1 border-white-secondary rounded-md w-[328px] h-[122px]
                  flex items-center justify-between p-[31px]"
                >
                  <div className="flex items-center">
                    <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-white-warm">
                      <item.icon
                        size={26}
                        strokeWidth={1}
                        className="text-black"
                      />
                    </div>
                    <div className="pl-5">
                      <h5 className="text-[19px] font-medium pb-[5px]">
                        {item.title}
                      </h5>
                      <p className="text-[13px] font-normals">
                        {item.discription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination  */}
            <div className="pt-[60px]">pagination</div>
          </main>
        </div>
      </section>
    </>
  );
};

export default FeaturedCategories;
