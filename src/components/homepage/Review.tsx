import Image from "next/image";
// components

const Review = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="">
          <div className="flex justify-between pb-[30px]">
            {/* user profile and quotes */}
            <div className="flex items-center">
              <Image
                src={"/images/test1.png"}
                alt="user-profile"
                width={90}
                height={90}
                className="rounded-90px overflow-hidden xs:w-[90px] xs:h-[90px] w-[60px] h-[60px]"
              />
              <div className="xs:pl-[20px] pl-[10px] text-left">
                <h5 className="font-medium text-[19px] pb-[3px]">
                  Cameron Williamson
                </h5>
                <p className="text-[15px] font-normal">designer</p>
              </div>
            </div>

            {/* quotes */}
            <Image
              src={"/images/vector.png"}
              alt="quote"
              className="inline-reset w-[39px] h-[38px]"
              width={39}
              height={38}
            />
          </div>

          {/* user review */}
          <p className="text-[19px] font-medium leading-9 text-center xs:text-left">
            Searches for multiplexes, property comparisons, and the loan
            estimator. Works great. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dores.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
