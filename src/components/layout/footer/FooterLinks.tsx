// components
import { FooterLinksContent } from "@/components/homepage/content/content";
import AppDownloadLink from "./AppDownloadLink";

const FooterLinks = () => {
  return (
    <>
      <div className="flex justify-between flex-1 xs:grid-cols-2 xs:grid  xl:grid-cols-3 xxl:grid-cols-5">
        {FooterLinksContent.map((item, idx) => (
          <div className="xl:pt-[70px] text-white xs:pt-[70px]" key={idx}>
            <h6 className="footer-links-heading">{item.tab}</h6>

            {item.links.map((link, idxx) => (
              <a
                href="#"
                key={idxx}
                className="block w-full font-normal text-[15px] leading-7 mb-[15px] capitalize max-w-[170px]  "
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="text-white xl:pt-[70px] lg:pt-[70px]">
          <h6 className="footer-links-heading">get the app</h6>

          <div className="xl:flex xl:items-center gap-[15px] xxl:flex-col lg:flex-col">
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
