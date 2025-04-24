import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
// components

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full py-[55px] text-white">
        {/* footer logo  */}
        <div>
          <Image src={"/images/logo.png"} width={200} height={56} alt="logo" />
        </div>

        {/* footer social-media  */}
        <div className="flex items-center gap-x-[30px]">
          <a href="#">follow us</a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
