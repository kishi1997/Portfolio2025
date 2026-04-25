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
import { HiMoon, HiSun, HiBars3, HiXMark, HiArrowRight } from "react-icons/hi2";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300"
        style={{
          backgroundColor: isScroll ? "var(--bg-surface)" : "transparent",
          backdropFilter: isScroll ? "blur(16px)" : "none",
          borderBottom: isScroll ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="#top" className="flex-shrink-0 z-10">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            width={130}
            height={34}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode((p) => !p)}
            className="p-2.5 rounded-full transition-all duration-200"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-surface)",
            }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <HiSun className="w-4 h-4" />
            ) : (
              <HiMoon className="w-4 h-4" />
            )}
          </button>

          {/* CTA button */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 px-5 py-2 rounded-full text-[0.65rem] font-Mono tracking-widest uppercase transition-all duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              backgroundColor: "var(--accent-muted)",
            }}
          >
            Hire me
            <HiArrowRight className="w-3 h-3" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 rounded-full"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-surface)",
            }}
            onClick={openMenu}
            aria-label="Open menu"
          >
            <HiBars3 className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile side menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 bottom-0 w-72 z-[100] flex flex-col py-20 px-8 transition-transform duration-300"
        style={{
          transform: "translateX(100%)",
          backgroundColor: "var(--bg-surface)",
          borderLeft: "1px solid var(--border)",
        }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 rounded-full transition-colors"
          style={{
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}
          aria-label="Close menu"
        >
          <HiXMark className="w-5 h-5" />
        </button>

        {/* Mobile links */}
        <ul className="flex flex-col gap-8 mt-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-Mono tracking-widest uppercase transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-Mono tracking-widest uppercase font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--accent)",
              color: isDarkMode ? "#050508" : "#ffffff",
            }}
          >
            Get in touch
            <HiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
