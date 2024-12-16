"use client";

import Link from "next/link";
import { getData } from "@/actions/actions";
import { useEffect, useState } from "react";
import { MYINFO } from "@/utils/definitions";

const Header = () => {
  const [myInfo, setMyInfo] = useState<MYINFO | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setMyInfo(data);
    };
    fetchData();
  }, []);

  return (
    <nav className="border-b border-blue-500 p-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold w-max  hover:text-blue-500 duration-300 animate-pulse"
      >
        SadikSmart
      </Link>

      <div className="flex gap-x-2">
        {myInfo?.contact.map((contact, idx) => {
          return (
            <Link key={idx} href={contact.url} className="hover:underline">
              {contact.platform}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Header;
