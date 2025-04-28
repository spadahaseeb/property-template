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
      <div
        className="footer-container md:pb-[50px] lg:pb-[96px] px-[20px] md:px-[40px]
       lg:px-[100px] "
      >
        {/* footer-header  */}
        <div
          className="sm:py-[55px] py-10 flex flex-col md:flex-row items-center justify-between 
        border-b-1 border-white/10"
        >
          <Image
            src={"/images/logo.png"}
            width={200}
            height={56}
            alt="logo"
            className="md:w-[200px] w-[150px]"
          />

          <div className="text-white flex items-center xs:flex-row flex-col pt-[60px] md:pt-0">
            {/* follow-us link */}
            <a
              href="#"
              className="capitalize font-medium text-[19px] leading-[19px] xs:pr-5 w-[max-content]"
            >
              follow us
            </a>

            {/* social-icons  */}
            <div className="flex items-center pt-[30px] xs:pt-0">
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
