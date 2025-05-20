// app/components/ThemeProvider.tsx（クライアントコンポーネント）
"use client";
// import { unstable_ViewTransition as ViewTransition } from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "dark") return true;
      if (localStorage.theme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);

  // useEffectをuseLayoutEffectに変更
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // テーマの変更に関するuseEffectはそのまま維持
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  if (!mounted) return null;

  return (
    <div className="dark:bg-darkTheme dark:text-white">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <ViewTransition name="cross-fade"> */}
      {children}
      {/* </ViewTransition> */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
