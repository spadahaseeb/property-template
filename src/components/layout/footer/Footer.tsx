// components
import Header from "@/components/layout/footer/Header";

const Footer = () => {
  return (
    <>
      <footer className="py-[165px] bg-black-primary rounded-medium">
        {/* footer container  */}
        <div className="max-w-[1710px] m-auto">
          <div className="w-full px-[15px]">
            {/* Header  */}
            <Header />

            {/* Footer content  */}
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
