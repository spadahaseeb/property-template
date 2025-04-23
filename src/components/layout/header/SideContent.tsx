"use client";

import { Phone, UserRound } from "lucide-react";
import Link from "next/link";
// components
import Button from "@/components/Button";

const SideContent = () => {
  return (
    <>
      <div className="flex items-center">
        {/* cta - phone */}
        <div className="pr-5 flex items-cente">
          <Link href="/" className="flex items-center">
            <Phone className="mr-2 text-white w-5" />
            <p className="text-white text-16">+68 685 88666</p>
          </Link>
        </div>

        {/* user-profile button */}
        <Link
          href={"/"}
          className="min-w-10 min-h-10 flex items-center justify-center mr-5 border-1 border-white rounded-full"
        >
          <UserRound className="text-white" size={16} />
        </Link>

        {/* add property button */}
        <Button
          onClick={() => console.log("logged")}
          buttonText="Add property"
          variant="v1"
        />
      </div>
    </>
  );
};

export default SideContent;
