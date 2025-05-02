// componnets

import Image from "next/image";

const GetApp = () => {
  return (
    <>
      <div className="pl-[90px]">
        <h6 className="font-medium text-[19px] text-white text-opacity-[47%] normal-case pb-[29px]">
          Get the app
        </h6>

        <div className="flex flex-col gap-5">
          {/* 1 apple-store */}
          <div className="rounded-normal bg-gray-normal text-white w-[210px] h-[63px]">
            <a href="#" className="flex items-center  w-full h-full">
              {/* logo  */}
              <Image
                src={"/images/apple.webp"}
                alt="apple-logo"
                width={19}
                height={24}
                className="ml-[25px]"
              />

              {/* download text  */}
              <div className="pl-3">
                <div className="border-l-1 border-white border-opacity-[30%] pl-3">
                  <p className="font-normal text-[13px]">Download on the</p>
                  <strong className="text-[16px] font-medium capitalize">
                    Apple store
                  </strong>
                </div>
              </div>
            </a>
          </div>

          {/* 2 google-play */}
          <div className="rounded-normal bg-gray-normal text-white w-[210px] h-[63px]">
            <a href="#" className="flex items-center w-full h-full">
              {/* logo  */}
              <Image
                src={"/images/play.webp"}
                alt="playstore-logo"
                width={20}
                height={23}
                className="ml-[25px]"
              />

              {/* download text  */}
              <div className="pl-3">
                <div className="border-l-1 border-white border-opacity-[30%] pl-3">
                  <p className="font-normal text-[13px]">Get it on</p>
                  <strong className="text-[16px] font-medium capitalize">
                    google play
                  </strong>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetApp;
