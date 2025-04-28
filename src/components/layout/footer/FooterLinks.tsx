// components
import { FooterLinksContent } from "@/components/homepage/content/content";
import AppDownloadLink from "@/components/layout/footer/AppDownloadLink";

const FooterLinks = () => {
  return (
    <>
      <div className="flex justify-between flex-col xl:flex-row">
        <div
          className="grid-col-1 sm:grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between   
        justify-items-center text-center lg:text-left"
        >
          {FooterLinksContent.map((item, idx) => (
            <div
              className="pr-0 lg:pr-[50px] last:pr-0 xl:last:pr-[50px]
                text-white pt-[40px] lg:pt-0"
              key={idx}
            >
              <h6 className="footer-links-heading">{item.tab}</h6>

              {item.links.map((link, idxx) => (
                <a
                  href="#"
                  key={idxx}
                  className="block w-full lg:w-[max-content] font-normal text-[15px] 
                  leading-7 mb-[15px] capitalize max-w-[170px]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="text-white pt-[60px] xl:pt-0 grid justify-items-center lg:justify-items-start">
          <h6 className="footer-links-heading">get the app</h6>

          <div className="flex gap-[15px] lg:items-start items-center sm:flex-row lg:flex-col flex-col">
            <AppDownloadLink
              imageSrc={"apple.png"}
              altText={"app-store"}
              linkText={"download on the"}
              linkTextBold={"apple store"}
              link={"/"}
            />
            <AppDownloadLink
              imageSrc={"play.png"}
              altText={"play-store"}
              linkText={"get it on"}
              linkTextBold={"gogole play"}
              link={"/"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterLinks;
