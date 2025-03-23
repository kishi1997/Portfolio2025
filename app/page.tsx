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

  // コンポーネントマウント時にテーマを再確認
  // ローカルストレージとシステム設定の両方をチェック
  useEffect(() => {
    if (
      localStorage.theme === "dark" || // ローカルストレージがダークモード
      (!("theme" in localStorage) && // ローカルストレージに設定がなく
        window.matchMedia("(prefers-color-scheme: dark)").matches) // システム設定がダークモード
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []); // マウント時のみ実行

  // isDarkModeの値が変更されたときにHTMLのクラスとローカルストレージを更新
  useEffect(() => {
    if (isDarkMode) {
      // ダークモードの場合、HTMLのルート要素にdarkクラスを追加
      document.documentElement.classList.add("dark");
      // ユーザー設定を保存
      localStorage.theme = "dark";
    } else {
      // ライトモードの場合、HTMLのルート要素からdarkクラスを削除
      document.documentElement.classList.remove("dark");
      // ユーザー設定を保存
      localStorage.theme = "light";
    }
  }, [isDarkMode]); // isDarkModeが変更されるたびに実行

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
