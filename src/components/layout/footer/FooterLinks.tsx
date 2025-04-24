// components
import { FooterLinksContent } from "@/components/homepage/content/content";

const FooterLinks = () => {
  return (
    <>
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
    </>
  );
};
export default FooterLinks;
