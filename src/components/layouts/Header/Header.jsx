"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "./constants/menuLinks";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 現在のパスを取得
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 shadow-inner z-10 fixed top-0 left-0 right-0 transition-colors duration-300 ${headerBgClass}`}
    >
      <div className="mx-auto flex justify-between items-center">
        <Link href={"/"} className="max-lg:w-60" id="cta_header_title">
          {pathname === "/" ? (
            isScrolled ? (
              <Image
                src={"/assets/logoB.svg"}
                width={398}
                height={50}
                alt="mishima's portfolio"
                priority
              />
            ) : (
              <Image
                src={"/assets/logoW.svg"}
                width={398}
                height={50}
                alt="mishima's portfolio"
                priority
              />
            )
          ) : (
            <Image
              src={"/assets/logoB.svg"}
              width={398}
              height={50}
              alt="mishima's portfolio"
              priority
            />
          )}
        </Link>
        <div
          className="md:hidden absolute top-4 right-4 z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" id="cta_menu_toggle_close"/>
          ) : (
            <FaBars
              className={`text-2xl cursor-pointer ${headerTextColorClass}`}
              id="cta_menu_toggle_open"
            />
          )}
        </div>
        <nav className={`max-md:hidden ${headerTextColorClass}`}>
          <ul className="flex gap-6 xl:gap-12">
            {MenuLinks.map((item) => {
              return item === "Home" ? (
                <li key={item} className="text-xl lg:text-2xl lg:font-bold" id="cta_nav_home">
                  <Link href={`/`}>{item}</Link>
                </li>
              ) : (
                <li key={item} className="text-xl lg:text-2xl lg:font-bold" id={`cta_nav_${item.toLowerCase()}`}>
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-maingray flex flex-col justify-center items-center text-black transform transition-transform duration-500 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-4 text-center">
          {MenuLinks.map((item) => (
            <li key={item} className="text-2xl font-bold" id={`cta_mobile_nav_${item.toLowerCase()}`}>
              <Link
                href={item === "Home" ? `/` : `/${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 right-4 flex gap-4" id="cta_mobile_nav_x">
          <Link
            href="https://x.com/sotolife3141"
            className="w-6 cursor-pointer text-2xl"
            target="_blank"
            onClick={closeMenu}
          >
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
