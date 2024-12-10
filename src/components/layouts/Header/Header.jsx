import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuLinks } from "./constants/menuLinks";

function Header() {
  return (
    <header className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 border-b shadow-inner z-10 fixed bg-maingray left-0 right-0">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full max-lg:w-60">
          <Image
            src={"assets/logo.svg"}
            width={398}
            height={50}
            alt="mishima's portfolio"
          />
        </div>
        <nav className="max-md:hidden">
          <ul className="flex gap-6 xl:gap-12">
            {MenuLinks.map((item) => {
              return (
                <li key={item} className="text-xl lg:text-2xl lg:font-bold ">
                  <Link href={`/${item}`}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
