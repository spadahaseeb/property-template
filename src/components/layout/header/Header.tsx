// components
import Image from "next/image";
import Link from "next/link";
// components
import Navigation from "@/components/layout/header/Navigation";
import SideContent from "@/components/layout/header/SideContent";

const Header = () => {
  return (
    <>
      <header className="px-14 py-12 fixed top-0 left-0 right-0 w-full z-300">
        <nav className="flex items-center">
          {/* logo  */}
          <Link href={"/"}>
            <Image
              src="/images/logo_white.png"
              alt="logo"
              width={150}
              height={42}
            />
          </Link>
          {/* navigation links  */}
          <Navigation />
          {/* side content  */}
          <SideContent />
        </nav>
      </header>
    </>
  );
};

export default Header;
