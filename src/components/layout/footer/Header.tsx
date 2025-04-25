import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
// components

const Header = () => {
  return (
    <>
      {/* footer-container  */}
      <div className="footer-container pb-[96px]">
        {/* footer-header  */}
        <div className="py-[55px] flex items-center justify-between border-b-1 border-white/10 xs:flex-col lg:flex-row">
          <Image src={"/images/logo.png"} width={200} height={56} alt="logo" />

          <div className="text-white flex items-center xs:pt-[60px]">
            {/* follow-us link */}
            <a
              href="#"
              className="capitalize font-medium text-[19px] leading-[19px] pr-5 inline-reset"
            >
              follow us
            </a>

            {/* social-icons  */}
            <div className="flex items-center">
              <a href="#" className="mr-8">
                <FacebookIcon size={20} strokeWidth={1} />
              </a>
              <a href="#" className="mr-8">
                <TwitterIcon size={20} strokeWidth={1} />
              </a>
              <a href="#" className="mr-8">
                <InstagramIcon size={20} strokeWidth={1} />
              </a>
              <a href="#" className="mr-8">
                <LinkedinIcon size={20} strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
