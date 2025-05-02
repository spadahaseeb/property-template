// components
import { FooterLinksContent } from "@/components/homepage/content/content";
import Newsletter from "@/components/layout/footer/Newsletter";
import LinksWrapper from "@/components/layout/footer/LinksWrapper";
import GetApp from "@/components/layout/footer/GetApp";

const Content = () => {
  return (
    <>
      <main className="footer-container py-[95px] flex justify-between">
        <Newsletter />

        <div className="flex">
          <LinksWrapper
            data={FooterLinksContent[0]}
            className="pl-[135px] min-w-[179px]"
          />
          <LinksWrapper
            data={FooterLinksContent[1]}
            className="pl-[50px] min-w-[163px]"
          />
          <LinksWrapper
            data={FooterLinksContent[2]}
            className="pl-[50px] w-[max-content]"
          />
          <LinksWrapper
            data={FooterLinksContent[3]}
            className="pl-[139px] w-[max-content]"
          />
        </div>

        <GetApp />
      </main>
    </>
  );
};

export default Content;
