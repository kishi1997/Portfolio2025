import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* logo  */}
        <a href="#top">
          <Image
            width={96}
            height={96}
            alt="logo"
            src={assets.logo}
            className="w-40 cursor-pointer mr-14"
          />
        </a>
        {/* PC-menu  */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <Link className="font-Ovo color-foreground" href="#top">
              HOME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#">
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#">
              WORK
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#">
              CONTACT ME
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* dark-mode切り替えボタン */}
          <button>
            <Image
              width={48}
              height={48}
              alt="moon"
              src={assets.moon_icon}
              className="w-6"
            />
          </button>
          {/* コンタクトボタン */}
          <Link
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            CONTACT{" "}
            <Image
              width={20}
              height={20}
              alt="arrow"
              src={assets.arrow_icon}
              className="w-3"
            />
          </Link>
          <button className="block md:hidden ml-3">
            <Image
              width={48}
              height={48}
              alt="menu"
              src={assets.menu_black}
              className="w-6"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
