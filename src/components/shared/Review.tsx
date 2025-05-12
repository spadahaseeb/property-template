import Image from "next/image";
// components

const Review = ({ image }: { image?: string }) => {
  return (
    <>
      <div className="max-w-[700px]">
        {/* userinfo and quote wrapper  */}
        <div className="flex items-center justify-between flex-col-reverse sm:flex-row pb-[29px]">
          {/* avataor & user-info  */}
          <div className="flex items-center">
            {/* avatar  */}
            <div>
              <Image
                src={"/images/test1.webp"}
                alt="user-profile"
                width={90}
                height={90}
                className="rounded-full overflow-hidden md:w-[90px] w-[70px] md:h-[90px] h-[70px]"
              />
            </div>

            {/* user-info  */}
            <div className="pl-5">
              <h5 className="font-medium text-[19px] pb-[3px] pr-5">
                Cameron Williamson
              </h5>
              <p className="text-[15px] font-normal">designer</p>
            </div>
          </div>

          {/* quotes  */}
          <div className="mb-5 sm:mb-0">
            <Image
              src={`/images/${image}` || "/images/vector.webp"}
              alt="quote"
              width={45}
              height={44}
              className="sm:w-[46px] sm:h-[45px] w-[32px] h-[31px]"
            />
          </div>
        </div>

        {/* user review */}
        <p className="text-[19px] font-medium leading-9 sm:text-left text-center">
          Searches for multiplexes, property comparisons, and the loan
          estimator. Works great. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.
        </p>
      </div>
    </>
  );
};

export default Review;
