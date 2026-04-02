import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#D9B899] text-[#4A3E31] py-3 px-3 md:px-[10%] w-screen flex items-center justify-between sticky top-0 inset-x-0">
      <Link href={`/`} className="flex items-center gap-2 font-medium">
        <Image
          src={`/logo.svg`}
          alt="logo"
          width={100}
          height={100}
          loading="eager"
          className="w-10 h-10 rounded-full"
        />
      </Link>
      <nav className="text-xs md:text-sm space-x-5">
        <Link href={`/`} className="text-white">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
