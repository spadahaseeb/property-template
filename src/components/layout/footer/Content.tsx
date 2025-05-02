// components
import { FooterLinksContent } from "@/components/homepage/content/content";
import Newsletter from "@/components/layout/footer/Newsletter";
import LinksWrapper from "@/components/layout/footer/LinksWrapper";
import GetApp from "@/components/layout/footer/GetApp";

const Content = () => {
  return (
    <>
      <main className="footer-container py-[95px] 3xl:flex 3xl:justify-between">
        <div className="flex justify-between xxl:flex-row flex-col">
          <div>
            <Newsletter />
          </div>

          <div className="xmd:flex xmd:pt-[100px] xxl:pt-0 grid xs:grid-cols-2 grid-cols-1">
            <LinksWrapper
              data={FooterLinksContent[0]}
              className="3xl:pl-[135px] 3xl:min-w-[179px] xxl:pl-[70px] pt-10 xs:pt-20 xmd:pt-0"
            />
            <LinksWrapper
              data={FooterLinksContent[1]}
              className="3xl:pl-[50px] 3xl:min-w-[163px] xmd:pl-[70px] pt-10 xs:pt-20 xmd:pt-0"
            />
            <LinksWrapper
              data={FooterLinksContent[2]}
              className="3xl:pl-[50px] w-[max-content] xmd:pl-[70px] pt-10 xs:pt-20 xmd:pt-0"
            />
            <LinksWrapper
              data={FooterLinksContent[3]}
              className="3xl:pl-[139px] w-[max-content] xmd:pl-[70px] pt-10 xs:pt-20 xmd:pt-0"
            />
          </div>
        </div>

        <div className="pt-10 3xl:pt-0">
          <GetApp />
        </div>
      </main>
    </>
  );
};

export default Content;
