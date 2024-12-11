import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-b border-blue-500 p-4 ">
      <Link
        href="/"
        className="text-2xl font-bold w-max  hover:text-blue-500 duration-300 animate-pulse"
      >
        SadikSmart
      </Link>
    </nav>
  );
};
export default Header;
