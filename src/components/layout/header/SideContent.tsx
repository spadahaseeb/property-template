"use client";

import { Phone, UserRound } from "lucide-react";
import Link from "next/link";
// components
import Button from "@/components/shared/Button";

const SideContent = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center">
        {/* cta - phone */}
        <div className="flex items-center flex-col-reverse xl:flex-row">
          <div className="xl:pr-5 my-5 xl:my-0 hidden xl:inline-block">
            <Link href="/" className="flex items-center">
              <Phone className="mr-2 text-white w-5" />
              <p className="text-white xl:text-[16px] text-[14px] font-medium">
                +68 685 88666
              </p>
            </Link>
          </div>

          {/* user-profile button */}
          <div className="hidden xl:inline-block">
            <Link
              href={"/"}
              className="m-auto w-[40px] xl:w-10 h-[40px] xl:h-10 flex items-center justify-center xl:mr-5 border-1 border-white rounded-full"
            >
              <UserRound className="text-white" size={16} />
            </Link>
          </div>
        </div>

        {/* add property button */}
        <Button
          onClick={() => console.log("clicked on header add property button")}
          buttonText="Add property"
          variant="v1"
          isLinkEnable={true}
          buttonLink="/"
        />
      </div>
    </>
  );
};

export default SideContent;
