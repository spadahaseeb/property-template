import Image from "next/image";
// components

// types
type AppDownloadLinkPropType = {
  imageSrc: string;
  altText: string;
  linkText: string;
  linkTextBold: string;
  link: string;
};

const AppDownloadLink = ({
  imageSrc,
  altText,
  linkText,
  linkTextBold,
  link,
}: AppDownloadLinkPropType) => {
  return (
    <>
      <a
        href={link}
        className="w-[max-content] h-[max-content] flex items-center md:py-7 md:px-8 rounded-medium bg-black-smooth  min-w-[230px] py-4 px-6"
      >
        <Image
          src={`/images/${imageSrc}`}
          alt={altText}
          width={35}
          height={35}
          className="pr-4 border-r-1 border-white-secondary/70"
        />
        <p className="text-white font-normal text-[13px] leading-4 capitalize pl-4">
          {linkText} <br />
          <span className="font-medium text-[16px] leading-[18px] mt-[7px] inline-reset">
            {linkTextBold}
          </span>
        </p>
      </a>
    </>
  );
};
export default AppDownloadLink;
