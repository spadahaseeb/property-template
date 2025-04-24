// components
import { FooterLinksContent } from "@/components/homepage/content/content";
import Image from "next/image";
import AppDownloadLink from "./AppDownloadLink";

const FooterLinks = () => {
  return (
    <>
      <div className="flex justify-between flex-1">
        {FooterLinksContent.map((item, idx) => (
          <div className="pr-[50px] text-white" key={idx}>
            <h6 className="footer-links-heading">{item.tab}</h6>

            {item.links.map((link, idxx) => (
              <a
                href="#"
                key={idxx}
                className="block w-[max-content] font-normal text-[15px] leading-7 mb-[15px] capitalize max-w-[170px]"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="text-white">
          <h6 className="footer-links-heading">get the app</h6>

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
    </>
  );
};
export default FooterLinks;
