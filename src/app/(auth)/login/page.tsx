import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[600px] py-8 mx-auto">
      <div className="flex flex-col items-center gap-y-2">
        <Image src={logo} alt="logo" width={200} />
        <h2 className="text-4xl font-bold">Tube Buddy</h2>
        <p className="text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href={"/register"} className="text-violet-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default page;
