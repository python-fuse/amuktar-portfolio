import Link from "next/link";
import React from "react";

interface LBPROPS {
  href: string;
  className?: string;
  text: string;
}

const LinkButton: React.FC<LBPROPS> = ({ href, text, className }) => {
  return (
    <Link
      href={href}
      className={`bg-blue-500 text-white p-2 flex-1 text-center rounded hover:bg-opacity-10 duration-700
        ${className}`}
    >
      {text}
    </Link>
  );
};
export default LinkButton;
