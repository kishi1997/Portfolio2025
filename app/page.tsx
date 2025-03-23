"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";

export default function Home() {
  // ダークモード状態を管理するステート
  // 初期値はローカルストレージの設定値またはシステム設定から取得
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // クライアントサイドでのみ実行（Next.jsのSSR対策）
    if (typeof window !== "undefined") {
      // ローカルストレージからテーマを取得、システムの設定も考慮
      if (localStorage.theme === "dark") {
        return true; // 明示的にダークモードが設定されている場合
      }
      if (localStorage.theme === "light") {
        return false; // 明示的にライトモードが設定されている場合
      }
      // ローカルストレージに設定がない場合はシステム設定を使用
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    // サーバーサイドの場合のデフォルト値
    return false;
  });
  const [mounted, setMounted] = useState(false); // クライアントがマウントされたかを追跡
  useEffect(() => {
    setMounted(true); // クライアント側でレンダリングが完了したことを確認
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  // マウントされるまで何も表示しない
  if (!mounted) {
    return null;
  }
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Service />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
