"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import nextConfig from "../../next.config";
const BASE_PATH = nextConfig.basePath || "";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  // モバイルメニューREF
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current == null) return;
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sideMenuRef.current == null) return;
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  //  スクロールしたらヘッダーに背景をつける
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          className="w-full"
          src={`${BASE_PATH}/${assets.header_bg_color}`}
          width={903}
          height={688}
          alt="header-bg-color"
        ></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
            ${
              isScroll
                ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-violet-50/20"
                : ""
            } `}
      >
        {/* logo  */}
        <a href="#top">
          <Image
            width={109}
            height={29}
            alt="logo"
            src={
              isDarkMode
                ? `${BASE_PATH}/${assets.logo_dark}`
                : `${BASE_PATH}/${assets.logo}`
            }
            className="w-40 cursor-pointer mr-14"
          />
        </a>
        {/* PC-menu  */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <Link className="font-Ovo color-foreground" href="#top">
              HOME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#about">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#service">
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#work">
              WORK
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#contact">
              CONTACT ME
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* dark-mode切り替えボタン */}
          <button
            className="cursor-pointer"
            onClick={() => setIsDarkMode((prev: boolean) => !prev)}
          >
            <Image
              width={48}
              height={48}
              alt="moon"
              src={
                isDarkMode
                  ? `${BASE_PATH}/${assets.sun_icon}`
                  : `${BASE_PATH}/${assets.moon_icon}`
              }
              className="w-6"
            />
          </button>
          {/* コンタクトボタン */}
          <Link
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full 
            ml-4 font-Ovo transition duration-500 dark:border-white/50 hover:-translate-y-0.5"
            href="#contact"
          >
            CONTACT
            <Image
              width={20}
              height={20}
              alt="arrow"
              src={
                isDarkMode
                  ? `${BASE_PATH}/${assets.arrow_icon_dark}`
                  : `${BASE_PATH}/${assets.arrow_icon}`
              }
              className="w-3"
            />
          </Link>
          {/* sp-menuボタン */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              width={48}
              height={48}
              alt="menu"
              src={
                isDarkMode
                  ? `${BASE_PATH}/${assets.menu_white}`
                  : `${BASE_PATH}/${assets.menu_black}`
              }
              className="w-6"
            />
          </button>
        </div>
        {/* mobile-menu  */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 
          z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              width={29}
              height={29}
              alt="close-icon"
              src={
                isDarkMode
                  ? `${BASE_PATH}/${assets.close_white}`
                  : `${BASE_PATH}/${assets.close_black}`
              }
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <Link
              className="font-Ovo color-foreground"
              href="#top"
              onClick={closeMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#about" onClick={closeMenu}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#service" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#work" onClick={closeMenu}>
              WORK
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#contact" onClick={closeMenu}>
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
