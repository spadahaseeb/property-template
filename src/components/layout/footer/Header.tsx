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
      <div className="footer-container">
        {/* footer-header  */}
        <div
          className="lg:py-[55px] py-[30px] flex xmd:flex-row items-center justify-between 
        border-b-1 border-white/10 flex-col"
        >
          <Image
            src={"/images/logo.webp"}
            width={150}
            height={56}
            alt="logo"
            className="xmd:w-[200px]"
          />

          <div className="text-white flex items-center sm:flex-row flex-col-reverse mt-10 xmd:mt-0">
            {/* follow-us link */}
            <a
              href="#"
              className="capitalize font-medium text-[19px] leading-[19px] sm:pr-5 pt-5 sm:pt-0"
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
              <a href="#" className="md:mr-8">
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
