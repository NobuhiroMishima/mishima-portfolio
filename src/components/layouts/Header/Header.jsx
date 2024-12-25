"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "./constants/menuLinks";
import { usePathname } from "next/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 現在のパスを取得

  useEffect(() => {
    // if (pathname === "/") {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // }
  }, [pathname]);

  const headerBgClass =
    pathname === "/"
      ? isScrolled
        ? "bg-maingrayOp border-b"
        : "bg-transparent"
      : isScrolled
      ? "bg-maingrayOp border-b"
      : "bg-maingray border-b";

  const headerTextColorClass =
    pathname === "/"
      ? isScrolled
        ? "text-black"
        : "text-white"
      : "text-black";

  return (
    <header
      className={`px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 shadow-inner z-10 fixed top-0 left-0 right-0 transition-colors duration-300 ${headerBgClass}`}
    >
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full max-lg:w-60">
          {pathname === "/" ? (
            isScrolled ? (
              <Image
                src={"assets/logoB.svg"}
                width={398}
                height={50}
                alt="mishima's portfolio"
              />
            ) : (
              <Image
                src={"assets/logoW.svg"}
                width={398}
                height={50}
                alt="mishima's portfolio"
              />
            )
          ) : (
            <Image
              src={"assets/logoB.svg"}
              width={398}
              height={50}
              alt="mishima's portfolio"
            />
          )}
        </div>
        <nav className={`max-md:hidden ${headerTextColorClass}`}>
          <ul className="flex gap-6 xl:gap-12">
            {MenuLinks.map((item) => {
              return item === "Home" ? (
                <li key={item} className="text-xl lg:text-2xl lg:font-bold ">
                  <Link href={`/`}>{item}</Link>
                </li>
              ) : (
                <li key={item} className="text-xl lg:text-2xl lg:font-bold ">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
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
